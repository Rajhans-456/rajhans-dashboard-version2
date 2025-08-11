import React from 'react';
import DashboardLayout from '../../components/layout/DashboardLayout';

export default function VehiclesFinancedReport() {
  return (
    <DashboardLayout>
    <main className="flex-1 flex flex-col bg-gray-100 min-h-screen">
      {/* Blue header */}
      <div className="bg-blue-800 text-white p-4">
        <h2 className="text-xl text-center font-bold">Vehicles Financed Report</h2>
      </div>

      {/* White card */}
      <div className="flex justify-center p-6">
        <div className="w-full max-w-4xl bg-white rounded-lg shadow-md p-6 space-y-6">
          
          {/* Report Duration */}
          <div className="flex items-center space-x-4">
            <label className="w-40 text-right font-semibold text-gray-700">Report Duration:</label>
            <select className="flex-1 p-2 border border-gray-300 rounded shadow-sm focus:ring-blue-500 focus:border-blue-500">
              <option>Monthly</option>
              <option>Quarterly</option>
              <option>Yearly</option>
              <option>Custom</option>
            </select>
          </div>

          {/* From and To */}
          <div className="flex items-center flex-wrap gap-4">
            <label className="w-40 text-right font-semibold text-gray-700">From:</label>
            <select className="p-2 border border-gray-300 rounded shadow-sm focus:ring-blue-500 focus:border-blue-500">
              <option>Jan</option><option>Feb</option><option>Mar</option>
              <option>Apr</option><option>May</option><option>Jun</option>
              <option>Jul</option><option>Aug</option><option>Sep</option>
              <option>Oct</option><option>Nov</option><option>Dec</option>
            </select>
            <input
              type="text"
              placeholder="Year"
              defaultValue="2025"
              className="w-24 p-2 border border-gray-300 rounded shadow-sm focus:ring-blue-500 focus:border-blue-500"
            />

            <label className="ml-8 font-semibold text-gray-700">To:</label>
            <select className="p-2 border border-gray-300 rounded shadow-sm focus:ring-blue-500 focus:border-blue-500">
              <option>Jan</option><option>Feb</option><option>Mar</option>
              <option>Apr</option><option>May</option><option>Jun</option>
              <option>Jul</option><option>Aug</option><option>Sep</option>
              <option>Oct</option><option>Nov</option><option>Dec</option>
            </select>
            <input
              type="text"
              placeholder="Year"
              defaultValue="2025"
              className="w-24 p-2 border border-gray-300 rounded shadow-sm focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          {/* HP Name */}
          <div className="flex items-center space-x-4">
            <label className="w-40 text-right font-semibold text-gray-700">HP Name:</label>
            <select className="flex-1 p-2 border border-gray-300 rounded shadow-sm focus:ring-blue-500 focus:border-blue-500">
              <option>All Vehicles</option>
            </select>
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
}
