import React from "react";
import DashboardLayout from "../../components/layout/DashboardLayout";

export default function LoanSettlement() {
  return (
    <DashboardLayout>
      <main className="flex-1 flex flex-col bg-gray-100 min-h-screen">
        {/* Blue Header */}
        <div className="bg-blue-800 text-white p-4">
          <h2 className="text-xl text-center font-bold uppercase tracking-wide">
            Loan Settlement
          </h2>
        </div>

        {/* White Card */}
        <div className="flex justify-center p-6">
          <div className="w-full max-w-4xl bg-white rounded-lg shadow-md p-6">
            {/* Search Button */}
            <div className="flex justify-end mb-6">
              <button className="bg-gray-500 hover:bg-gray-600 text-white font-semibold py-2 px-6 rounded">
                Search
              </button>
            </div>

            {/* Input Fields Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Left Column */}
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Customer Name:</label>
                  <input
                    type="text"
                    placeholder="Enter customer name"
                    className="w-full border border-gray-300 rounded px-3 py-2 bg-white"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Customer ID:</label>
                  <input
                    type="text"
                    placeholder="Enter customer ID"
                    className="w-full border border-gray-300 rounded px-3 py-2 bg-white"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Veh Regn No:</label>
                  <input
                    type="text"
                    placeholder="Enter Vehicle Registration No"
                    className="w-full border border-gray-300 rounded px-3 py-2 bg-white"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Branch:</label>
                  <input
                    type="text"
                    placeholder="Enter branch"
                    className="w-full border border-gray-300 rounded px-3 py-2 bg-white"
                  />
                </div>
              </div>

              {/* Right Column */}
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Loan Ac No:</label>
                  <select className="w-full border border-gray-300 rounded px-3 py-2 bg-white">
                    <option value="">Select Loan Account</option>
                    <option value="Loan 1">Loan 1</option>
                    <option value="Loan 2">Loan 2</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Ext Ac No:</label>
                  <input
                    type="text"
                    placeholder="Enter Ext Ac No"
                    className="w-full border border-gray-300 rounded px-3 py-2 bg-white"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Ledger No:</label>
                  <input
                    type="text"
                    placeholder="Enter Ledger No"
                    className="w-full border border-gray-300 rounded px-3 py-2 bg-white"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">EMI:</label>
                  <input
                    type="text"
                    placeholder="Enter EMI"
                    className="w-full border border-gray-300 rounded px-3 py-2 bg-white"
                  />
                </div>
              </div>
            </div>

            {/* Bottom Row (Chq + Action Buttons) */}
            <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Chq:</label>
                <input
                  type="text"
                  placeholder="Enter Chq"
                  className="w-full border border-gray-300 rounded px-3 py-2 bg-white"
                />
              </div>
              <div className="flex justify-end gap-4 mt-2 md:mt-0">
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
