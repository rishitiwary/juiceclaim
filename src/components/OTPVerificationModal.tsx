'use client';

import React, { useState } from 'react';

export function OTPVerificationModal({setShowOTPModal}: {setShowOTPModal: (showOTPModal: boolean) => void}) {
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(''); // Clear previous errors
    
    if (!password.trim()) {
      setError('Please enter a password');
      return;
    }

    if (password === '123456') {
      setShowOTPModal(true);
      localStorage.setItem('showOTPModal', 'true');
      setPassword('');
      setError('');
    } else {
      setError('Invalid password');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-950 overflow-hidden" style={{minHeight: '80vh'}}>
      <div className="bg-white dark:bg-gray-900 p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-900 dark:text-white">
          Enter Password to Continue
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="space-y-4">
            {/* DEBUG FIELD - NON-PRODUCTION */}
            {/* {process.env.NODE_ENV === 'development' && (
              <div className="bg-yellow-100 dark:bg-yellow-900/20 border border-yellow-300 dark:border-yellow-700 rounded-lg p-3 mb-4">
                <p className="text-xs text-yellow-800 dark:text-yellow-200 font-medium mb-2">
                  🚧 DEBUG MODE - NON-PRODUCTION
                </p>
                <p className="text-xs text-yellow-700 dark:text-yellow-300">
                  Valid passwords: "123456", "admin", "test"
                </p>
                <p className="text-xs text-yellow-700 dark:text-yellow-300">
                  Current state: Modal Open
                </p>
              </div>
            )} */}
            
            <div>
              <input 
                type="password" 
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                  setError(''); // Clear error when user types
                }}
                className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 dark:bg-gray-800 dark:text-white ${
                  error ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-blue-500 dark:border-gray-700'
                }`}
                placeholder="Enter password" 
              />
              {error && (
                <p className="mt-2 text-sm text-red-600 dark:text-red-400">
                  {error}
                </p>
              )}
            </div>
            <button 
              type="submit" 
              className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
