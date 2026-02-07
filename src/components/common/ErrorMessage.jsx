import React from 'react';

const ErrorMessage = ({ message }) => (
  <div className="text-center py-12 px-4">
    <div className="bg-red-50 text-red-600 px-6 py-4 rounded-lg inline-block border border-red-100">
      <h2 className="text-xl font-bold mb-2">Oops! Something went wrong</h2>
      <p>{message}</p>
    </div>
  </div>
);

export default ErrorMessage;