'use client';

import React, { useState } from 'react';
import DashboardLayout from '../../components/layout/DashboardLayout';

export default function AddOtherChargePage() {
  const [mobile, setMobile] = useState('');

  const handleSearch = () => {
    console.log('Searching customer with mobile:', mobile);
  };

  return (
    <DashboardLayout>
      <main className="flex-1 flex flex-col bg-gray-100 min-h-screen">
        {/* Page Header */}
        <div className="bg-blue-800 text-white p-4">
          <h2 className="text-xl font-bold text-center uppercase tracking-wide">
            Add Other Payment
          </h2>
        </div>

        {/* Form Card */}
        <div className="flex justify-center p-6">
          <div className="w-full max-w-4xl bg-white rounded-lg shadow-md p-8">
            <form className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6 items-end">
                {/* Input Field */}
                <div className="col-span-3">
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Mobile Number:
                  </label>
                  <input
                    type="text"
                    placeholder="Enter customer mobile number"
                    value={mobile}
                    onChange={(e) => setMobile(e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                {/* Search Button */}
                <div className="flex justify-end md:col-span-1">
                  <button
                    type="button"
                    onClick={handleSearch}
                    className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded"
                  >
                    Search
                  </button>
                </div>
              </div>
            </form>

            {/* Placeholder Info */}
            <div className="h-72 flex items-center justify-center text-gray-500 mt-10">
              <p className="text-base font-medium">
                Search for a customer to add an Other Payment entry.
              </p>
            </div>
          </div>
        </div>
      </main>
    </DashboardLayout>
  );
}
