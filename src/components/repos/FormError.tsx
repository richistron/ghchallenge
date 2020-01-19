import React, { useState, useEffect } from 'react';

const FormError: React.FC<{ error: string }> = ({ error }) => {
  const [showError, toggleError] = useState<boolean>(false);

  useEffect(() => {
    let errorTimer: any = null;
    if (error) {
      toggleError(true);
      errorTimer = setTimeout(() => toggleError(false), 5000);
    }
    return () => {
      if (errorTimer) {
        clearTimeout(errorTimer);
      }
    };
  }, [error]);

  if (!showError) {
    return null;
  }

  return (
    <div
      className="alert alert-warning alert-dismissible fade show"
      role="alert"
    >
      <strong>{error}</strong>.
      <button
        onClick={e => {
          e.preventDefault();
          toggleError(false);
        }}
        type="button"
        className="close"
        data-dismiss="alert"
        aria-label="Close"
      >
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
  );
};

export default FormError;
