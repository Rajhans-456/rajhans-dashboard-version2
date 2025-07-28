import React from 'react';
import DashboardLayout from '../../components/layout/DashboardLayout';

export default function CustomersWithoutLoans() {
  return (
      <DashboardLayout>
    <main className="flex-1 flex flex-col bg-gray-100 min-h-screen">
      {/* Blue header */}
      <div className="bg-blue-800 text-white p-4">
        <h2 className="text-xl text-center font-bold">Customers Without Loans</h2>
      </div>

      {/* White card */}
      <div className="flex justify-center p-6">
        <div className="w-full max-w-6xl bg-white rounded-lg shadow-md p-6">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-semibold text-gray-800">Report Date: 12-Jun-2025</h3>
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded">
              Export to Excel
            </button>
          </div>

          <div className="overflow-x-auto">
            <table className="min-w-full text-left text-sm border-collapse">
              <thead className="border-b-2 border-gray-300">
                <tr>
                  <th className="py-2 px-4">No.</th>
                  <th className="py-2 px-4">Customer ID</th>
                  <th className="py-2 px-4">Customer Name</th>
                  <th className="py-2 px-4">Action</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["1", "V101-CU-000550", "VIRENDER SINGH"],
                  ["2", "S101-CU-003331", "SANTOSH"],
                  ["3", "N101-CU-003851", "NP TRADERS-NARENDRA SINGH"],
                  ["4", "A101-CU-002838", "AKHTAR"],
                  ["5", "P101-CU-000186", "PRADEEP KUMAR"],
                  ["6", "R101-CU-002567", "RAKESH KUMAR"],
                  ["7", "U101-CU-002608", "UMA SHANKAR"],
                  ["8", "A101-CU-004535", "ARIF"],
                  ["9", "P101-CU-002971", "PAWAN KUMAR"],
                  ["10", "D101-CU-002236", "DALBEER"],
                  ["11", "S101-CU-004364", "SARFARAJ KHAN"],
                  ["12", "M101-CU-000825", "MUKESH"],
                  ["13", "N101-CU-001250", "AAAAA"],
                  ["14", "B101-CU-002966", "AAA"],
                  ["15", "N101-CU-001865", "NARESH KUMAR"],
                  ["16", "M101-CU-001912", "MAHIPAL SINGH"],
                  ["17", "S101-CU-002241", "SAVITA"],
                  ["18", "P101-CU-000243", "PARVEEN SINGH"],
                  ["19", "V101-CU-000637", "VARUN"],
                ].map(([no, id, name], index) => (
                  <tr key={id} className={index % 2 !== 0 ? "bg-gray-100" : ""}>
                    <td className="py-2 px-4 border-b">{no}</td>
                    <td className="py-2 px-4 border-b">{id}</td>
                    <td className="py-2 px-4 border-b">{name}</td>
                    <td className="py-2 px-4 border-b">
                      <a href="#" className="text-blue-600 hover:text-blue-800 hover:underline mr-4">
                        Add Loan
                      </a>
                      <a href="#" className="text-red-600 hover:text-red-800 hover:underline">
                        Delete
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-6 text-gray-700 font-semibold">
            <p>Rajhans Motor Investment Co.</p>
          </div>
        </div>
      </div>
    </main>
    </DashboardLayout>

    
  );
}
