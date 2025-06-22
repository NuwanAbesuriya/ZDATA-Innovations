import React from 'react';
import InputField from '../components/InputField';

export default function Step2({ form, onChange, errors, onBack, onSubmit, loading }) {
  return (
    <form>
      <InputField
        label="Password"
        type="password"
        name="password"
        placeholder="Enter your password"
        value={form.password}
        onChange={onChange}
        error={errors.password}
        required={true}
      />
      <InputField
        label="Confirm Password"
        type="password"
        name="confirmPassword"
        placeholder="Confirm your password"
        value={form.confirmPassword}
        onChange={onChange}
        error={errors.confirmPassword}
        required={true}
      />
      <button type="button" onClick={onBack}>
        Back
      </button>
      <button type="button" onClick={onSubmit} disabled={loading}>
        {loading ? 'Submitting...' : 'Submit'}
      </button>
    </form>
  );
}
