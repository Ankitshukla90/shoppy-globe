import React from 'react';
import { Loader2 } from 'lucide-react';

const Loader = () => (
  <div className="flex flex-col items-center justify-center min-h-[50vh] text-gray-500">
    <Loader2 size={40} className="animate-spin mb-4 text-blue-600" />
    <p>Loading...</p>
  </div>
);

export default Loader;