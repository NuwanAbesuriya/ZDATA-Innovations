import React, { useState } from 'react';
import Step1 from './pages/Step1';
import Step2 from './pages/Step2';
import Success from './pages/Success';
import ProgressBar from './components/ProgressBar';
import { validateStep1, validateStep2 } from './utils/validation';
import { registerUser } from './services/registerService';
import './App.css';


const initialForm = {
  fullName: '',
  email: '',
  phone: '',
  password: '',
  confirmPassword: ''
};

export default function App() {
  const [step, setStep] = useState(1);
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: undefined });
  };

  const handleNext = () => {
    const step1Errors = validateStep1(form);
    if (Object.keys(step1Errors).length) {
      setErrors(step1Errors);
      return;
    }
    setStep(2);
  };

  const handleBack = () => setStep(1);

  const handleSubmit = async () => {
    const step2Errors = validateStep2(form);
    if (Object.keys(step2Errors).length) {
      setErrors(step2Errors);
      return;
    }
    setLoading(true);
    try {
      await registerUser({
        fullName: form.fullName,
        email: form.email,
        phone: form.phone,
        password: form.password
      });
      setSuccess(true);
    } catch (err) {
      alert("Registration failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };
  

  if (success) return <Success />;

  return (
    <div className="container">
      <h2 >Registration Form</h2>
      <ProgressBar step={step} />
      {step === 1 && (
        <Step1
          form={form}
          onChange={handleChange}
          errors={errors}
          onNext={handleNext}
          isNextDisabled={!!Object.keys(validateStep1(form)).length}
        />
      )}
      {step === 2 && (
        <Step2
          form={form}
          onChange={handleChange}
          errors={errors}
          onBack={handleBack}
          onSubmit={handleSubmit}
          loading={loading}
        />
      )}
    </div>
  );
}
