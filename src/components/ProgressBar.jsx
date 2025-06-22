import React from 'react';

export default function ProgressBar({ step }) {
  return (
    <div className="progress-bar">
      <div className={step === 1 ? 'active' : ''}>1</div>
      <div className={step === 2 ? 'active' : ''}>2</div>
    </div>
  );
}
