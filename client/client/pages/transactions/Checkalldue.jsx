import React from "react";
import DashboardLayout from "../../components/layout/DashboardLayout";

export default function NoDuesCheck() {
  return (
    <DashboardLayout>
      <main className="flex-1 flex flex-col bg-gray-100 min-h-screen">
        {/* Page Header */}
        <div className="bg-blue-800 text-white p-4">
          <h2 className="text-xl font-bold text-center uppercase tracking-wide">
            No Dues Check
          </h2>
        </div>

        {/* Form Card */}
        <div className="flex justify-center p-6">
          <div className="w-full max-w-7xl bg-white rounded-lg shadow-md p-8">
            <form className="space-y-8">
              {/* Grid Inputs */}
              <div className="grid grid-cols-1 md:grid-cols-5 gap-6 items-end">
                {["Customer Name", "Loan Ac No", "Customer ID", "Ext. Ac No", "Ledger No", "Veh Regn No", "Branch", "EMI", "Chq"].map((label) => (
                  <div key={label}>
                    <label className="block text-sm font-medium text-gray-700 mb-1">{label}:</label>
                    <input
                      name={label.replace(/\s+/g, '').toLowerCase()}
                      placeholder={label}
                      className="w-full border border-gray-300 rounded px-3 py-2 bg-white"
                    />
                  </div>
                ))}
                {/* Search Button */}
                <div className="flex justify-end md:col-span-1">
                  <button
                    type="button"
                    className="bg-gray-500 hover:bg-gray-600 text-white font-semibold py-2 px-6 rounded mt-6"
                  >
                    Search
                  </button>
                </div>
              </div>
            </form>

            {/* Result Section */}
            <div className="flex flex-col md:flex-row gap-8 mt-10">
              {/* Left Card */}
              <div className="bg-white rounded-lg shadow-md p-6 flex flex-col gap-4 min-w-[340px] max-w-md mx-auto md:mx-0">
                {[
                  "Down Payment Balance",
                  "Previous Late Fine/Chq Ret Chgs Balance",
                  "Legal & Other Chgs Balance"
                ].map((title, index) => (
                  <div key={index}>
                    <div className="font-bold text-gray-700 mb-2">{title}</div>
                    <div className="flex gap-2 mb-2">
                      <input disabled className="bg-white border border-gray-300 rounded px-3 py-1 text-sm flex-1" />
                      <button className="px-4 py-1 bg-gray-200 text-gray-700 rounded hover:bg-gray-300 font-semibold text-sm">
                        {index === 0 ? "Clear Balance" : "Details"}
                      </button>
                    </div>
                  </div>
                ))}

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">EMI Amount Due As On Date</label>
                  <input className="w-full border border-gray-300 rounded px-3 py-2 bg-white" />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Late Fine On Unpaid EMIs</label>
                  <input className="w-full border border-gray-300 rounded px-3 py-2 bg-white" />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Chq. Ret. Charges For Unpaid EMIs</label>
                  <input className="w-full border border-gray-300 rounded px-3 py-2 bg-white" />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Extra Amt As On Date</label>
                  <input className="w-full border border-gray-300 rounded px-3 py-2 bg-white" />
                </div>

                <div>
                  <label className="block  font-bold text-gray-800 mb-1 text-lg">Total Amt Due As On Date</label>
                  <input className="w-full border border-blue-400 rounded px-3 py-2 bg-white font-bold" />
                </div>

                <input disabled className="w-full border border-gray-300 rounded px-3 py-2 bg-white" />
              </div>

              <div className="flex-1" />
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-6 justify-center mt-10">
              <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded">
                View Receipt History
              </button>
              <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded">
                View Loan Ledger
              </button>
              <button className="bg-gray-500 hover:bg-gray-600 text-white font-semibold py-2 px-6 rounded">
                Clear All
              </button>
            </div>
          </div>
        </div>
      </main>
    </DashboardLayout>
  );
}
