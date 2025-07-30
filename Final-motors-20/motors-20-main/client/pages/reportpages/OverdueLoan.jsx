import React from "react";
import DashboardLayout from "../../components/layout/DashboardLayout";

const OverdueLoans = () => {
  return (
    <DashboardLayout>
    <main className="flex-1 p-4">
      <div className="bg-white rounded shadow p-4 fade-in-transition">
        {/* Blue gradient heading */}
        <div className="bg-blue-800 text-white  shadow-md mb-4">
          <h1 className="text-2xl font-bold px-6 py-3">List of Overdue Loans</h1>
        </div>

        <div
          id="overdueLoans"
          className="animate-fade-in-up max-w-full mx-auto bg-gradient-to-br from-gray-50 via-white to-gray-100 rounded-3xl shadow-2xl p-6 border border-gray-200"
        >
          {/* Filters */}
          <div className="flex flex-wrap items-center justify-between gap-4 mb-4 p-4 bg-white rounded-lg shadow">
            <div className="flex items-center space-x-2">
              <label className="text-sm font-medium text-gray-700">Loan Type:</label>
              <select className="px-2 py-1 border border-yellow-300 bg-yellow-100 rounded-md shadow-sm focus:ring-1 focus:ring-blue-500">
                <option>ALL</option>
              </select>
            </div>
            <div className="flex items-center space-x-2">
              <label className="text-sm font-medium text-gray-700">Select HP:</label>
              <select className="px-2 py-1 border border-gray-300 rounded-md shadow-sm focus:ring-1 focus:ring-blue-500">
                <option>ALL</option>
              </select>
            </div>
            <div className="flex items-center space-x-2">
              <label className="text-sm font-medium text-gray-700">Records Per Page:</label>
              <select className="px-2 py-1 border border-gray-300 rounded-md shadow-sm focus:ring-1 focus:ring-blue-500">
                <option>50</option>
                <option>100</option>
                <option>200</option>
              </select>
            </div>
            <div className="text-sm font-medium text-gray-600">
              Page: <span className="font-bold">1</span> &nbsp; Showing Records: <span className="font-bold">1 - 50</span> of <span className="font-bold">1538</span>
            </div>
            <div className="flex items-center space-x-2">
              <label className="text-sm font-medium text-gray-700">Sorted By:</label>
              <select className="px-2 py-1 border border-gray-300 rounded-md shadow-sm focus:ring-1 focus:ring-blue-500">
                <option>Customer Name</option>
              </select>
            </div>
            <div className="flex items-center space-x-2">
              <label className="text-sm font-medium text-gray-700">Order:</label>
              <select className="px-2 py-1 border border-gray-300 rounded-md shadow-sm focus:ring-1 focus:ring-blue-500">
                <option>Ascending</option>
                <option>Descending</option>
              </select>
            </div>
          </div>

          {/* Table */}
          <div className="overflow-x-auto bg-white rounded-lg shadow-md">
            <table className="min-w-full text-sm">
              <thead className="bg-blue-600 text-white">
                <tr>
                  <th className="p-3 text-left">Sr.</th>
                  <th className="p-3 text-left">Customer Name</th>
                  <th className="p-3 text-left">Phone</th>
                  <th className="p-3 text-left">Loan Ac No</th>
                  <th className="p-3 text-left">Ledger No</th>
                  <th className="p-3 text-left">Regn-Ch No</th>
                  <th className="p-3 text-left">ODs</th>
                  <th className="p-3 text-left">OD Amt</th>
                  <th className="p-3 text-left">Notice</th>
                  <th className="p-3 text-left">Date</th>
                  <th className="p-3 text-left">Seized</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b bg-gray-50 hover:bg-blue-50 transition-colors">
                  <td className="p-2">1</td>
                  <td className="p-2">AADESH KUMAR TOMER</td>
                  <td className="p-2">9818728873</td>
                  <td className="p-2">RAM-17A24C9-000195</td>
                  <td className="p-2">RA-200</td>
                  <td className="p-2">HHR55AE4824--09266</td>
                  <td className="p-2 text-center">13</td>
                  <td className="p-2 text-right">1,41,505.00</td>
                  <td className="p-2">Final</td>
                  <td className="p-2">03-09-20</td>
                  <td className="p-2 font-semibold text-red-600">True</td>
                </tr>
                {/* Add more rows here */}
              </tbody>
            </table>
          </div>

          {/* Pagination */}
          <div className="flex items-center justify-between mt-4 text-sm">
            <div className="flex flex-wrap items-center space-x-1 text-blue-600">
              <a href="#" className="font-bold">First</a>
              {[...Array(10)].map((_, i) => (
                <a key={i} href="#" className="px-2 py-1 rounded hover:bg-blue-100">{i + 1}</a>
              ))}
              <a href="#" className="font-bold">Last</a>
            </div>
            <a href="#" className="text-blue-600 font-bold">Next &gt;&gt;</a>
          </div>
        </div>
      </div>
    </main>
    </DashboardLayout>
  );
};

export default OverdueLoans;
