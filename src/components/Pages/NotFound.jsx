import React from 'react';
import { useRouteError, Link } from 'react-router-dom';

const NotFound = () => {
  const error = useRouteError();
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center text-center px-4">
      <h1 className="text-9xl font-black text-gray-100">404</h1>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Page Not Found</h2>
        <p className="text-gray-500 mb-8">{error?.statusText || error?.message || "The page you are looking for doesn't exist."}</p>
        <Link to="/" className="bg-blue-600 text-white px-8 py-3 rounded-full font-medium hover:bg-blue-700 transition">Back to Home</Link>
      </div>
    </div>
  );
};

export default NotFound;