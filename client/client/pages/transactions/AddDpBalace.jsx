'use client';

import React from 'react';
import DashboardLayout from '../../components/layout/DashboardLayout';

export default function AddDownPaymentPage() {
  return (
    <DashboardLayout>
      <main className="flex-1 flex flex-col bg-gray-100 min-h-screen">
        {/* Blue Header */}
        <div className="bg-blue-800 text-white p-4">
          <h2 className="text-xl text-center font-bold">Add Down Payment Balance</h2>
        </div>

        {/* Card Section */}
        <div className="flex justify-center p-6">
          <div className="w-full max-w-4xl bg-white rounded-lg shadow-md p-6">
            
            {/* Search Button */}
            <div className="flex justify-end mb-6">
              <button className="bg-gray-500 hover:bg-gray-600 text-white font-semibold py-2 px-6 rounded">
                Search
              </button>
            </div>

            {/* Instruction Section */}
            <div className="h-72 flex items-center justify-center text-gray-400 text-lg">
              <p>Search for a customer to add down payment balance.</p>
            </div>

          </div>
        </div>
      </main>
    </DashboardLayout>
  );
}
