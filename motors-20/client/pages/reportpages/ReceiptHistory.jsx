import React from 'react';
import DashboardLayout from '../../components/layout/DashboardLayout';

export default function ReceiptHistory() {
  return (
    <DashboardLayout>
    <main className="flex-1 flex flex-col bg-gray-100 min-h-screen">
      {/* Separate blue header */}
      <div className="bg-blue-800 text-white p-4">
        <h2 className="text-xl text-center font-bold">Receipt History</h2>
      
      </div>

      {/* White card box */}
      <div className="flex justify-center p-6">
        <div className="w-full max-w-4xl bg-white rounded-lg shadow-md p-6">
          <div className="flex justify-end mb-6">
            <button className="bg-gray-500 hover:bg-gray-600 text-white font-semibold py-2 px-6 rounded">
              Search
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Left column */}
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Customer Name:</label>
                <input
                  type="text"
                  readOnly
                  placeholder="Enter customer name"
                  className="w-full border border-gray-300 rounded px-3 py-2 bg-white"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Customer ID:</label>
                <span className="font-bold text-gray-800"></span>
              </div>
            </div>

            {/* Right column */}
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Loan Ac No:</label>
                <select
                  readOnly
                  className="w-full border border-gray-300 rounded px-3 py-2 bg-white"
                >
                  <option value="">Select Account</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Ext Ac No:</label>
                <span className="font-bold text-gray-800"></span>
              </div>
            </div>
          </div>

          <hr className="my-6" />

          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <a
              href="#"
              className="text-blue-600 font-medium hover:text-blue-800 hover:underline"
            >
              Export to Excel
            </a>
            <div className="flex gap-3">
              <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded">
                Get Report
              </button>
              <button className="bg-gray-500 hover:bg-gray-600 text-white font-semibold py-2 px-6 rounded">
                Clear All
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
    </DashboardLayout>
  );
}
