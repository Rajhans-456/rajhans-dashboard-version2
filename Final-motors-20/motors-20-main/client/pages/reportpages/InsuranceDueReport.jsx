import React from 'react';
import DashboardLayout from '../../components/layout/DashboardLayout';

const InsuranceReport = () => {
  return (
    <DashboardLayout>
    <main className="flex-1 flex flex-col bg-gray-100 min-h-screen">
      {/* Blue header */}
      <div className="bg-blue-800 text-white p-4">
        <h2 className="text-xl text-center font-bold">Insurance Report</h2>
      </div>

      {/* White card */}
      <div className="flex justify-center p-6">
        <div className="w-full max-w-4xl bg-white rounded-lg shadow-md p-6 space-y-6">
          
          {/* Insurance Due Before */}
          <div className="flex items-center space-x-4">
            <label className="w-48 text-right font-semibold text-gray-700">Insurance Due Before:</label>
            <input
              type="text"
              value="12-06-2025"
              className="w-48 p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          {/* Checkbox */}
          <div className="flex items-center space-x-4 pl-52">
            <input
              type="checkbox"
              id="showDueInNext30Days"
              className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
            />
            <label htmlFor="showDueInNext30Days" className="font-semibold text-gray-700">
              Only Show Insurance Due In Next 30 Days
            </label>
          </div>

          {/* Buttons */}
          <div className="mt-4 flex items-center justify-start space-x-4">
            <a href="#" className="text-blue-600 hover:underline font-semibold">Export to Excel</a>
            <button className="px-8 py-3 bg-blue-600 text-white font-bold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all">
              Get Report
            </button>
            <button className="px-8 py-3 bg-gray-200 text-gray-800 font-bold rounded-lg shadow-md hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 transition-all">
              Clear All
            </button>
          </div>
        </div>
      </div>
    </main>
    </DashboardLayout>
  );
};

export default InsuranceReport;
