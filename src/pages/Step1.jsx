import React from 'react';
import InputField from '../components/InputField';

export default function Step1({ form, onChange, errors, onNext, isNextDisabled }) {
  return (
    <form>
      <InputField
        label="Full Name"
        type="text"
        name="fullName"
        placeholder="Enter your full name"
        value={form.fullName}
        onChange={onChange}
        error={errors.fullName}
        required={true}
      />
      <InputField
        label="Email"
        type="email"
        name="email"
        placeholder="Enter your email address"
        value={form.email}
        onChange={onChange}
        error={errors.email}
        required={true}
      />
      <InputField
        label="Phone Number"
        type="tel"
        name="phone"
        placeholder="Enter your phone number"
        value={form.phone}
        onChange={onChange}
        error={errors.phone}
      />
      <button type="button" onClick={onNext} disabled={isNextDisabled}>Next</button>
    </form>
  );
}
