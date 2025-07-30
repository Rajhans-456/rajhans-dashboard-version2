import React from 'react';
import DashboardLayout from '../../components/layout/DashboardLayout';


const DealerWiseVehiclesReport = () => {
  return (
    <DashboardLayout>
    <main className="flex-1 flex flex-col bg-gray-100 min-h-screen">
      {/* Blue header */}
      <div className="bg-blue-800 text-white p-4">
        <h2 className="text-xl text-center font-bold">Dealer-wise Vehicles Report</h2>
      </div>

      {/* White card */}
      <div className="flex justify-center p-6">
        <div className="w-full max-w-4xl bg-white rounded-lg shadow-md p-6 space-y-6">
          
          {/* Report Duration */}
          <div className="flex items-center space-x-4">
            <label className="w-40 text-right font-semibold text-gray-700">Report Duration:</label>
            <select className="flex-1 p-2 border border-gray-300 rounded shadow-sm focus:ring-blue-500 focus:border-blue-500">
              <option>Day-Wise</option>
              <option>Monthly</option>
              <option>Quarterly</option>
              <option>Yearly</option>
            </select>
          </div>

          {/* From Date & To Date */}
          <div className="flex items-center flex-wrap gap-4">
            <label className="w-40 text-right font-semibold text-gray-700">From Date:</label>
            <input
              type="text"
              value="12-06-2025"
              className="w-48 p-2 border border-gray-300 rounded shadow-sm focus:ring-blue-500 focus:border-blue-500"
            />
            <label className="ml-8 font-semibold text-gray-700">To Date:</label>
            <input
              type="text"
              value="12-06-2025"
              className="w-48 p-2 border border-gray-300 rounded shadow-sm focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          {/* Dealer Name */}
          <div className="flex items-center space-x-4">
            <label className="w-40 text-right font-semibold text-gray-700">Dealer Name:</label>
            <select
              disabled
              className="flex-1 p-2 border border-gray-300 rounded shadow-sm focus:ring-blue-500 focus:border-blue-500 bg-gray-200"
            >
              <option>Select</option>
            </select>
          </div>

          {/* All Dealers checkbox */}
          <div className="flex items-center space-x-2 pl-44">
            <input
              type="checkbox"
              id="allDealers"
              checked
              className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
            />
            <label htmlFor="allDealers" className="font-semibold text-gray-700">All Dealers</label>
          </div>

          <hr className="my-4" />

          {/* Actions */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <a href="#" className="text-blue-600 font-medium hover:text-blue-800 hover:underline">
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

export default DealerWiseVehiclesReport;
