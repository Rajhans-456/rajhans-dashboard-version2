import React from 'react';
import DashboardLayout from '../../components/layout/DashboardLayout';

export default function FirstLastEmiReport() {
  return (
    <DashboardLayout>
    <main className="flex-1 flex flex-col bg-gray-100 min-h-screen">
      {/* Blue header */}
      <div className="bg-blue-800 text-white p-4">
        <h2 className="text-xl text-center font-bold">First / Last EMI Report</h2>
      </div>

      {/* White card */}
      <div className="flex justify-center p-6">
        <div className="w-full max-w-4xl bg-white rounded-lg shadow-md p-6">
          
          {/* EMI Status */}
          <div className="mb-6">
            <label className="block text-md font-semibold text-gray-700 mb-2">EMI Status:</label>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { value: "non-starter-loans", label: "Non Starter Loans" },
                { value: "pending", label: "Pending" },
                { value: "paid", label: "Paid" },
                { value: "all", label: "All" },
              ].map(({ value, label }) => (
                <label key={value} className="flex items-center p-3 border border-gray-300 rounded cursor-pointer hover:bg-gray-50">
                  <input type="radio" name="emiStatus" value={value} className="h-4 w-4 text-blue-600" />
                  <span className="ml-3 text-gray-800">{label}</span>
                </label>
              ))}
            </div>
          </div>

          <hr className="my-6" />

          {/* Footer buttons */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-3">
            <a href="#" className="text-blue-600 hover:underline font-semibold">Export to Excel</a>
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
