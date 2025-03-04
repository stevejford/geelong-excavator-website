'use client';

import { useState } from 'react';

interface PostcodeCheckerProps {
  serviceablePostcodes: string[];
  areaName: string;
}

export default function PostcodeChecker({ serviceablePostcodes, areaName }: PostcodeCheckerProps) {
  const [result, setResult] = useState<string | null>(null);
  const [resultType, setResultType] = useState<'success' | 'error' | 'warning' | null>(null);

  const checkPostcode = () => {
    const postcodeInput = document.getElementById('postcode') as HTMLInputElement;
    
    if (postcodeInput) {
      const postcode = postcodeInput.value.trim();
      
      if (postcode === '') {
        setResult('Please enter a postcode.');
        setResultType('warning');
        return;
      }
      
      if (serviceablePostcodes.includes(postcode)) {
        setResult(`Good news! We service your area. Contact us to book equipment hire.`);
        setResultType('success');
      } else {
        setResult('We may not service this postcode directly. Please contact us to discuss your specific location.');
        setResultType('error');
      }
    }
  };

  return (
    <div className="bg-white p-8 rounded-lg shadow-md">
      <div className="mb-6">
        <label htmlFor="postcode" className="block text-sm font-medium text-gray-700 mb-2">
          Enter your postcode to check if we service your area
        </label>
        <div className="flex">
          <input
            type="text"
            id="postcode"
            name="postcode"
            className="flex-1 rounded-l-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
            placeholder="e.g. 3220"
          />
          <button
            type="button"
            id="check-postcode"
            className="bg-primary text-white px-4 py-2 rounded-r-md hover:bg-primary-dark transition-colors"
            onClick={checkPostcode}
          >
            Check
          </button>
        </div>
      </div>
      
      {result && (
        <div className="mt-4">
          <p className={`
            ${resultType === 'success' ? 'text-green-600 font-medium' : ''}
            ${resultType === 'error' ? 'text-red-600' : ''}
            ${resultType === 'warning' ? 'text-yellow-600' : ''}
          `}>
            {result}
          </p>
        </div>
      )}
      
      <p className="text-gray-600 text-sm mt-4">
        Note: If your postcode is not listed, we may still be able to service your area. Please contact us to discuss your specific requirements.
      </p>
    </div>
  );
}
