import React from 'react';
import DashboardLayout from '../../components/layout/DashboardLayout';

export default function CurrentAgentLoanCount() {
  return (
     <DashboardLayout>
    <main className="flex-1 flex flex-col bg-gray-100 min-h-screen">
      {/* Blue header */}
      <div className="bg-blue-800 text-white p-4">
        <h2 className="text-xl text-center font-bold">Current Agent Loan Count</h2>
      </div>

      {/* White card */}
      <div className="flex justify-center p-6">
        <div className="w-full max-w-4xl bg-white rounded-lg shadow-md p-6 space-y-6">
          
          {/* Table */}
          <div className="overflow-x-auto">
            <table className="min-w-full text-sm border rounded">
              <thead className="bg-gray-100">
                <tr>
                  <th className="text-left px-4 py-2 font-semibold text-gray-700">No.</th>
                  <th className="text-left px-4 py-2 font-semibold text-gray-700">Agent ID</th>
                  <th className="text-left px-4 py-2 font-semibold text-gray-700">Agent Name</th>
                  <th className="text-left px-4 py-2 font-semibold text-gray-700">Loan Count</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t hover:bg-gray-50">
                  <td className="px-4 py-2">1</td>
                  <td className="px-4 py-2 text-blue-600">3W0015CA</td>
                  <td className="px-4 py-2">3w Automobiles-Faridabad</td>
                  <td className="px-4 py-2">8</td>
                </tr>
                <tr className="border-t hover:bg-gray-50">
                  <td className="px-4 py-2">2</td>
                  <td className="px-4 py-2 text-blue-600">ANI0001CA</td>
                  <td className="px-4 py-2">Anil Bhardwaj</td>
                  <td className="px-4 py-2">192</td>
                </tr>
                <tr className="border-t hover:bg-gray-50">
                  <td className="px-4 py-2">3</td>
                  <td className="px-4 py-2 text-blue-600">ANS0018CA</td>
                  <td className="px-4 py-2">Anshul</td>
                  <td className="px-4 py-2">1</td>
                </tr>
                {/* Add more rows as needed */}
              </tbody>
            </table>
          </div>

          {/* Footer buttons */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-3">
            <a href="#" className="text-blue-600 hover:underline font-semibold">Export to Excel</a>
            <div className="flex gap-3">
              <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded">
                Refresh Data
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
