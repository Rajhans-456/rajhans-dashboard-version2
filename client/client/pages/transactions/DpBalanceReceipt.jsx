// components/DownPaymentBalanceTable.tsx

"use client";
import React, { useState } from "react";
import DashboardLayout from "../../components/layout/DashboardLayout";


const dummyData = [
  {
    id: 1,
    loanAcNo: "1234567890",
    customerName: "John Doe",
    extAcNo: "EXT987654",
    regnNo: "MH12AB1234",
    vehDelDt: "2024-07-15",
    balanceAmt: "₹12,000",
    lastPymtOn: "2024-08-01",
  },
  {
    id: 2,
    loanAcNo: "2345678901",
    customerName: "Jane Smith",
    extAcNo: "EXT123456",
    regnNo: "DL09XY4567",
    vehDelDt: "2024-06-20",
    balanceAmt: "₹18,500",
    lastPymtOn: "2024-07-29",
  },
];

export default function DownPaymentBalanceTable() {
  const [sortField, setSortField] = useState("loanAcNo");

  const sortedData = [...dummyData].sort((a, b) =>
    a[sortField]?.localeCompare(b[sortField])
  );

  return (
    <DashboardLayout>
      <main className="flex-1 flex flex-col bg-gray-100 min-h-screen">
        {/* Page Header */}
        <div className="bg-blue-800 text-white p-4">
          <h2 className="text-xl font-bold text-center uppercase tracking-wide">
            Down Payment Balance
          </h2>
        </div>

        {/* Content Card */}
        <div className="flex justify-center p-6">
          <div className="w-full max-w-5xl bg-white rounded-2xl shadow-lg p-6 border border-blue-200">
            {/* Sort Controls */}
            <div className="flex justify-end mb-4">
              <label className="mr-2 text-sm font-semibold text-gray-700">
                Sorted By:
              </label>
              <select
                value={sortField}
                onChange={(e) => setSortField(e.target.value)}
                className="border border-gray-300 rounded px-2 py-1 text-sm bg-white shadow-sm"
              >
                <option value="loanAcNo">Loan Ac No</option>
                <option value="customerName">Customer Name</option>
                <option value="regnNo">Regn No</option>
                <option value="balanceAmt">Balance Amt</option>
              </select>
            </div>

            {/* Table */}
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-300">
                <thead className="bg-blue-200">
                  <tr>
                    <th className="px-4 py-2 text-left text-sm font-semibold text-gray-800">Sr.</th>
                    <th className="px-4 py-2 text-left text-sm font-semibold text-gray-800">Loan Ac No</th>
                    <th className="px-4 py-2 text-left text-sm font-semibold text-gray-800">Customer Name</th>
                    <th className="px-4 py-2 text-left text-sm font-semibold text-gray-800">Ext Ac No</th>
                    <th className="px-4 py-2 text-left text-sm font-semibold text-gray-800">Regn No</th>
                    <th className="px-4 py-2 text-left text-sm font-semibold text-gray-800">Veh Del Dt</th>
                    <th className="px-4 py-2 text-left text-sm font-semibold text-gray-800">Balance Amt</th>
                    <th className="px-4 py-2 text-left text-sm font-semibold text-gray-800">Last Pymt On</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {sortedData.map((item, index) => (
                    <tr key={item.id} className="hover:bg-blue-50 transition">
                      <td className="px-4 py-2 text-sm text-gray-700">{index + 1}</td>
                      <td className="px-4 py-2 text-sm text-blue-700 underline cursor-pointer">
                        {item.loanAcNo}
                      </td>
                      <td className="px-4 py-2 text-sm text-gray-700">{item.customerName}</td>
                      <td className="px-4 py-2 text-sm text-gray-700">{item.extAcNo}</td>
                      <td className="px-4 py-2 text-sm text-gray-700">{item.regnNo}</td>
                      <td className="px-4 py-2 text-sm text-gray-700">{item.vehDelDt}</td>
                      <td className="px-4 py-2 text-sm text-green-700 font-semibold">{item.balanceAmt}</td>
                      <td className="px-4 py-2 text-sm text-gray-700">{item.lastPymtOn}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </main>
    </DashboardLayout>
  );
}
