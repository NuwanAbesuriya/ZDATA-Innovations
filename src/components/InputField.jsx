import React, { useState } from 'react';

const EyeIcon = ({ open }) => (
  open ? (
    <svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 24 24" fill="none" stroke="#951d1d" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  ) : (
    <svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 24 24" fill="none" stroke="#951d1d" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M17.94 17.94A10.94 10.94 0 0 1 12 20c-7 0-11-8-11-8a21.57 21.57 0 0 1 5.06-6.06" />
      <path d="M1 1l22 22" />
      <path d="M9.53 9.53a3 3 0 0 0 4.24 4.24" />
      <path d="M14.12 14.12L12 12" />
    </svg>
  )
);

export default function InputField({
  label,
  type,
  name,
  value,
  onChange,
  error,
  placeholder,
  required
}) {
  const [show, setShow] = useState(false);
  const isPassword = type === 'password';

  return (
    <div className="input-group">
      <label>
        {label} {required && <span style={{ color: '#e53e3e' }}>*</span>}
      </label>
      <div className="input-with-icon">
        <input
          type={isPassword && show ? 'text' : type}
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className={error ? 'invalid' : ''}
          autoComplete="off"
          required={required}
        />
        {isPassword && (
          <button
            type="button"
            onClick={() => setShow(!show)}
            aria-label={show ? 'Hide password' : 'Show password'}
            className="eye-icon-button"
          >
            <EyeIcon open={show} />
          </button>
        )}
      </div>
      {error && <span className="error">{error}</span>}
    </div>
  );
}
