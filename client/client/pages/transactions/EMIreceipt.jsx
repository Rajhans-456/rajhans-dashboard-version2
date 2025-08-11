import React from "react";
import DashboardLayout from "../../components/layout/DashboardLayout";

export default function EmiReceipt() {
  return (
    <DashboardLayout>
      <main className="flex-1 flex flex-col bg-gray-100 min-h-screen">
        {/* Page Header */}
        <div className="bg-blue-800 text-white p-4">
          <h2 className="text-xl font-bold text-center uppercase tracking-wide">
            EMI Receipt
          </h2>
        </div>

        {/* Form Card */}
        <div className="flex justify-center p-6">
          <div className="w-full max-w-5xl bg-white rounded-2xl shadow-lg p-8 border border-blue-200">

            <form className="space-y-6">

              {/* Grid: Customer Name, Loan Ac No, Ext Ac No, Ledger No */}
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div>
                  <label className="block font-semibold text-gray-700 mb-1">Customer Name</label>
                  <input
                    name="customerName"
                    placeholder="Enter name"
                    className="w-full border border-gray-300 rounded px-3 py-2 bg-white"
                  />
                </div>
                <div>
                  <label className="block font-semibold text-gray-700 mb-1">Loan Ac No</label>
                  <select
                    name="loanAcNo"
                    className="w-full border border-gray-300 rounded px-3 py-2 bg-white"
                  >
                    <option>Select</option>
                    <option>Loan 1</option>
                    <option>Loan 2</option>
                  </select>
                </div>
                <div>
                  <label className="block font-semibold text-gray-700 mb-1">Ext Ac No</label>
                  <input
                    name="extAcNo"
                    placeholder="Ext Ac No"
                    className="w-full border border-gray-300 rounded px-3 py-2 bg-white"
                  />
                </div>
                <div>
                  <label className="block font-semibold text-gray-700 mb-1">Ledger No</label>
                  <input
                    name="ledgerNo"
                    placeholder="Ledger No"
                    className="w-full border border-gray-300 rounded px-3 py-2 bg-white"
                  />
                </div>
              </div>

              {/* Grid: Customer ID, Veh Regn No, Branch */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <label className="block font-semibold text-gray-700 mb-1">Customer ID</label>
                  <input
                    name="customerId"
                    placeholder="Customer ID"
                    className="w-full border border-gray-300 rounded px-3 py-2 bg-white"
                  />
                </div>
                <div>
                  <label className="block font-semibold text-gray-700 mb-1">Veh Regn No</label>
                  <input
                    name="vehRegnNo"
                    placeholder="Vehicle Regn No"
                    className="w-full border border-gray-300 rounded px-3 py-2 bg-white"
                  />
                </div>
                <div>
                  <label className="block font-semibold text-gray-700 mb-1">Branch</label>
                  <input
                    name="branch"
                    placeholder="Branch"
                    className="w-full border border-gray-300 rounded px-3 py-2 bg-white"
                  />
                </div>
              </div>

              {/* Divider */}
              <hr className="border-t border-gray-300 my-6" />

              {/* Grid: EMI, Chq, Chq Type + Search Button */}
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6 items-end">
                <div>
                  <label className="block font-semibold text-gray-700 mb-1">EMI</label>
                  <input
                    name="emi"
                    placeholder="EMI"
                    className="w-full border border-gray-300 rounded px-3 py-2 bg-white"
                  />
                </div>
                <div>
                  <label className="block font-semibold text-gray-700 mb-1">Chq</label>
                  <input
                    name="chq"
                    placeholder="Chq"
                    className="w-full border border-gray-300 rounded px-3 py-2 bg-white"
                  />
                </div>
                <div>
                  <label className="block font-semibold text-gray-700 mb-1">Chq Type</label>
                  <select
                    name="chqType"
                    className="w-full border border-gray-300 rounded px-3 py-2 bg-white"
                  >
                    <option>Select</option>
                    <option>Type 1</option>
                    <option>Type 2</option>
                  </select>
                </div>

                {/* Button */}
                <div className="flex justify-end">
                  <button
                    type="button"
                    className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded shadow"
                  >
                    Search Customer
                  </button>
                </div>
              </div>

            </form>

          </div>
        </div>
      </main>
    </DashboardLayout>
  );
}
