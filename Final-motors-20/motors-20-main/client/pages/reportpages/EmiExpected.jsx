import React from 'react';
import DashboardLayout from '../../components/layout/DashboardLayout';

export default function EmiExpectedReport() {
  return (
    <DashboardLayout>
    <main className="flex-1 flex flex-col bg-gray-100 min-h-screen">
      {/* Blue header */}
      <div className="bg-blue-800 text-white p-4">
        <h2 className="text-xl text-center font-bold">EMI Expected Report</h2>
      </div>

      {/* White card */}
      <div className="flex justify-center p-6">
        <div className="w-full max-w-4xl bg-white rounded-lg shadow-md p-6">
          
          <div className="space-y-6">
            <div className="flex flex-col md:flex-row items-center gap-6 md:gap-12">
              <div className="flex items-center gap-3 w-full md:w-auto">
                <label className="font-semibold text-gray-700">From:</label>
                <input
                  type="text"
                  value="12-06-2025"
                  readOnly
                  className="w-full md:w-40 border border-gray-300 rounded px-3 py-2 bg-white"
                />
              </div>

              <div className="flex items-center gap-3 w-full md:w-auto">
                <label className="font-semibold text-gray-700">To:</label>
                <input
                  type="text"
                  value="12-06-2025"
                  readOnly
                  className="w-full md:w-40 border border-gray-300 rounded px-3 py-2 bg-white"
                />
              </div>
            </div>

            <div className="flex items-center">
              <input
                type="checkbox"
                id="showSummary"
                checked
                readOnly
                className="h-5 w-5 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
              />
              <label htmlFor="showSummary" className="ml-3 text-md font-medium text-gray-800">
                Show Day-wise summary
              </label>
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
