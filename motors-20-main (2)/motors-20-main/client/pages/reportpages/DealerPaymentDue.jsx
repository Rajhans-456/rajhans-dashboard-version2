import React from 'react';
import DashboardLayout from '../../components/layout/DashboardLayout';

const DealerPaymentPending = () => {
  return (
    <DashboardLayout>
      <main className="flex-1 flex flex-col bg-gray-100 min-h-screen">
        {/* Blue header */}
        <div className="bg-blue-800 text-white p-4">
          <h2 className="text-xl text-center font-bold">Dealer Payment Pending</h2>
        </div>

      {/* White card */}
      <div className="flex justify-center p-6">
        <div className="w-full max-w-6xl bg-white rounded-lg shadow-md p-6 space-y-4">
          
          {/* Title & Total Dues */}
          <div className="flex justify-between items-center border-b-4 border-blue-500 pb-2 mb-4">
            <h1 className="text-2xl font-bold text-gray-800">Dealer Payment Pending</h1>
            <div className="text-right">
              <p className="text-lg font-semibold text-gray-700">
                Total Dealer Dues:{' '}
                <span className="text-red-600">1519,72,210.00</span>
              </p>
            </div>
          </div>

          {/* Controls */}
          <div className="flex flex-col md:flex-row justify-between text-sm text-gray-600 gap-4">
            {/* Left controls */}
            <div className="flex items-center space-x-2">
              <span>Records / Page:</span>
              <select className="p-1 border border-gray-300 rounded-md">
                <option value="10">10</option>
                <option value="25">25</option>
                <option value="50">50</option>
                <option value="100">100</option>
              </select>
              <span>Page: 1</span>
              <span>Showing Records: 1 - 50 of 806</span>
            </div>

            {/* Right controls */}
            <div className="flex items-center space-x-2">
              <span>Sorted By:</span>
              <select className="p-1 border border-gray-300 rounded-md">
                <option>Customer Name</option>
                <option>Loan Ac No</option>
                <option>Amt Due</option>
              </select>
              <select className="p-1 border border-gray-300 rounded-md">
                <option>Ascending</option>
                <option>Descending</option>
              </select>
            </div>
          </div>

          {/* Table */}
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white text-sm">
              <thead className="bg-blue-600 text-white">
                <tr>
                  <th className="px-4 py-2 text-left">Sr.</th>
                  <th className="px-4 py-2 text-left">Loan Ac No</th>
                  <th className="px-4 py-2 text-left">Customer Name</th>
                  <th className="px-4 py-2 text-left">Regn No.</th>
                  <th className="px-4 py-2 text-left">Veh Del Dt.</th>
                  <th className="px-4 py-2 text-left">Dealer Name</th>
                  <th className="px-4 py-2 text-right">Amt Due</th>
                </tr>
              </thead>
              <tbody>
                {/* Example rows */}
                <tr className="border-b bg-blue-50">
                  <td className="px-4 py-2">1</td>
                  <td className="px-4 py-2 text-blue-600 cursor-pointer hover:underline">RAM-17A24C9-000195</td>
                  <td className="px-4 py-2">AADESH KUMAR TOMER</td>
                  <td className="px-4 py-2">HHR55AE4824</td>
                  <td className="px-4 py-2">28-08-2017</td>
                  <td className="px-4 py-2">RAJHANS AUTOMOBILES</td>
                  <td className="px-4 py-2 text-right">1,90,000.00</td>
                </tr>
                <tr className="border-b bg-white">
                  <td className="px-4 py-2">2</td>
                  <td className="px-4 py-2 text-blue-600 cursor-pointer hover:underline">RAM-18M20D9-000538</td>
                  <td className="px-4 py-2">AADIL ALI</td>
                  <td className="px-4 py-2">HR55AD8444</td>
                  <td className="px-4 py-2">19-04-2018</td>
                  <td className="px-4 py-2">RAJHANS AUTOMOBILES</td>
                  <td className="px-4 py-2 text-right">1,90,000.00</td>
                </tr>
                {/* Add remaining rows similarly... */}
              </tbody>
            </table>
          </div>

          {/* Pagination */}
          <div className="flex flex-wrap gap-1 mt-4 text-sm">
            <button className="px-3 py-1 rounded-md bg-blue-600 text-white">1</button>
            <button className="px-3 py-1 rounded-md text-blue-600 hover:underline">2</button>
            <button className="px-3 py-1 rounded-md text-blue-600 hover:underline">3</button>
            <button className="px-3 py-1 rounded-md text-blue-600 hover:underline">4</button>
            <button className="px-3 py-1 rounded-md text-blue-600 hover:underline">5</button>
            {/* Add more page buttons as needed */}
          </div>
        </div>
      </div>
    </main>
    </DashboardLayout>
  );
};

export default DealerPaymentPending;
