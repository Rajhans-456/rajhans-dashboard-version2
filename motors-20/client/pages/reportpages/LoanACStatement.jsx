import React from 'react';
import DashboardLayout from '../../components/layout/DashboardLayout';

const LoanAccountStatement = () => {
  return (
    <DashboardLayout>
    <main className="flex-1 flex flex-col bg-gray-100 min-h-screen">
      {/* Blue header */}
      <div className="bg-blue-800 text-white p-4">
        <h2 className="text-xl text-center font-bold">Loan Account Statement</h2>
      </div>

      {/* White card */}
      <div className="flex justify-center p-6">
        <div className="w-full max-w-4xl bg-white rounded-lg shadow-md p-6">
          
          <div className="flex justify-end mb-6">
            <button className="bg-gray-500 hover:bg-gray-600 text-white font-semibold py-2 px-6 rounded">
              Search
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            {/* Left column */}
            <div className="space-y-4">
              <div className="flex items-center">
                <label className="w-32 font-semibold text-gray-700">Customer Name:</label>
                <input
                  type="text"
                  readOnly
                  value=""
                  className="flex-grow bg-gray-100 px-3 py-2 rounded border border-gray-300"
                />
              </div>
              <div className="flex items-center">
                <label className="w-32 font-semibold text-gray-700">Customer ID:</label>
                <span className="font-medium text-gray-800"></span>
              </div>
            </div>

            {/* Right column */}
            <div className="space-y-4">
              <div className="flex items-center">
                <label className="w-32 font-semibold text-gray-700">Loan Ac No:</label>
                <select className="flex-grow bg-white px-3 py-2 rounded border border-gray-300">
                  <option>Select Loan A/c No</option>
                </select>
              </div>
              <div className="flex items-center">
                <label className="w-32 font-semibold text-gray-700">Ext Ac No:</label>
                <span className="font-medium text-gray-800"></span>
              </div>
            </div>
          </div>

          <hr className="my-6" />

          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <a href="#" className="text-blue-600 hover:text-blue-800 font-medium hover:underline">
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
};

export default LoanAccountStatement;
