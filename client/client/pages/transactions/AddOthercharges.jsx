'use client';

import React from 'react';
import DashboardLayout from '../../components/layout/DashboardLayout';

export default function AddOtherChargesPage() {
  return (
    <DashboardLayout>
      <main className="flex-1 flex flex-col bg-gray-100 min-h-screen">
        {/* Blue Header */}
        <div className="bg-blue-800 text-white p-4">
          <h2 className="text-xl text-center font-bold">Add Other Charges</h2>
        </div>

        {/* Main Content Card */}
        <div className="flex justify-center p-6">
          <div className="w-full max-w-4xl bg-white rounded-lg shadow-md p-6">
            {/* Search Button */}
            <div className="flex justify-end mb-6">
              <button className="bg-gray-500 hover:bg-gray-600 text-white font-semibold py-2 px-6 rounded">
                Search
              </button>
            </div>

            {/* Active Input Form */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Loan A/C No.</label>
                <input
                  type="text"
                  className="w-full p-3 bg-white border border-gray-300 rounded-lg"
                />
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Customer Name</label>
                <input
                  type="text"
                  className="w-full p-3 bg-white border border-gray-300 rounded-lg"
                />
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Charge Type</label>
                <select className="w-full p-3 border border-gray-300 rounded-lg bg-white">
                  <option>Select Charge Type</option>
                  <option>Bounce Charges</option>
                  <option>Late Fine</option>
                  <option>Foreclosure Charges</option>
                  <option>Document Charges</option>
                  <option>Other</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Amount</label>
                <input
                  type="number"
                  placeholder="Enter amount"
                  className="w-full p-3 border border-gray-300 rounded-lg"
                />
              </div>

              <div className="md:col-span-2">
                <label className="block text-sm font-bold text-gray-700 mb-2">Remarks</label>
                <textarea
                  rows={3}
                  placeholder="Enter remarks"
                  className="w-full p-3 border border-gray-300 rounded-lg"
                />
              </div>
            </div>

            {/* Save Button */}
            <div className="flex justify-end">
              <button className="bg-blue-600 text-white font-bold px-8 py-3 rounded-lg hover:bg-green-700 transition-colors">
                Save
              </button>
            </div>

            {/* Message */}
            <div className="text-center text-gray-500 mt-10">
              <p>Search for a customer to add other charges.</p>
            </div>
          </div>
        </div>
      </main>
    </DashboardLayout>
  );
}
