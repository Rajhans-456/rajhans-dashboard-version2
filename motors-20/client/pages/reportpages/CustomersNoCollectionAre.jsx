import React from 'react';
import DashboardLayout from '../../components/layout/DashboardLayout';

export default function CustomersNoCollectionArea() {
  return (
    <DashboardLayout>
    <main className="flex-1 p-4">
      <div className="bg-white rounded shadow p-4 fade-in-transition">
        <div className="animate-fade-in-up p-8 bg-white shadow-lg rounded-lg mt-8">

          <h1 className="text-3xl font-bold text-gray-800 border-b-4 border-gray-300 pb-2 mb-6">
            Customers With No Collection Area
          </h1>

          {/* Controls */}
          <div className="flex items-center justify-between mb-4 text-sm text-gray-600 flex-wrap gap-2">
            <div className="flex items-center space-x-2">
              <span>Records / Page:</span>
              <select className="p-1 border border-gray-300 rounded-md">
                <option>10</option>
                <option>25</option>
                <option>50</option>
                <option>100</option>
              </select>
              <span>Page: 1</span>
              <span>Showing Records: 1 - 50 of 4881</span>
            </div>
            <div className="flex items-center space-x-2">
              <span>Sorted By:</span>
              <select className="p-1 border border-gray-300 rounded-md">
                <option>Customer Name</option>
                <option>Cust ID</option>
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
                  <th className="px-4 py-2 text-left">Cust ID</th>
                  <th className="px-4 py-2 text-left">Customer Name</th>
                  <th className="px-4 py-2 text-left">Cust Residence Address</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { sr: 1, id: 'B101-CU-002966', name: 'AAA', address: 'H NO-452,WARD NO-12,SANJAY GENERAL STORE, VILL-GARHI HARSARU, Gurugram, Haryana [HR]' },
                  { sr: 2, id: 'N101-CU-001260', name: 'AAAAA', address: 'H NO-318,WARD NO-1, TAJ NAGAR, Gurugram, Haryana [HR]' },
                  { sr: 3, id: 'A101-CU-000173', name: 'AADESH KUMAR TOMER', address: 'H.NO- NEAR MATA MANDIR , BEGUM PUR KHATOLA , Gurugram, Haryana [HR]' },
                  { sr: 4, id: 'A101-CU-000466', name: 'AADIL ALI', address: 'H.N. 06 DHUNELA , GURGAON, Gurugram, Haryana [HR]' },
                  { sr: 5, id: 'A101-CU-000602', name: 'AAJAM KHAN TEMPO SERVICES', address: 'H N 536 /31 NEAR SHANI MANDIR , LAXMAN VIHAR , Gurugram, Haryana [HR]' },
                  { sr: 6, id: 'A101-CU-004420', name: 'AAKASH', address: 'PLOT NO-3,AMAR PARK,ROHTAK ROAD, , New Delhi, Delhi [DL]' },
                  { sr: 7, id: 'A101-CU-004512', name: 'AAKASH', address: 'H NO-RZ-13,PREM NAGAR,NAJAFGARH, , South West Delhi, Delhi [DL]' },
                  { sr: 8, id: 'A101-CU-003645', name: 'AAKASH', address: 'VPO-BASKUSHLA, , Gurugram, Haryana [HR]' },
                  { sr: 9, id: 'A101-CU-003374', name: 'AAKASH', address: 'VILL-BASS KUSHLA, BASKUSHLA, Gurugram, Haryana [HR]' },
                ].map((row, idx) => (
                  <tr
                    key={row.id}
                    className={`border-b ${idx % 2 === 0 ? 'bg-blue-50' : 'bg-white'}`}
                  >
                    <td className="px-4 py-2">{row.sr}</td>
                    <td className="px-4 py-2 text-blue-600 cursor-pointer hover:underline">{row.id}</td>
                    <td className="px-4 py-2">{row.name}</td>
                    <td className="px-4 py-2">{row.address}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Pagination */}
          <div className="mt-4 flex flex-wrap justify-start items-center gap-1 text-sm">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20].map((page) => (
              <button
                key={page}
                className={`px-2 py-1 rounded-md ${page === 1 ? 'bg-blue-600 text-white' : 'text-blue-600 hover:underline'}`}
              >
                {page}
              </button>
            ))}
            <button className="px-2 py-1 text-blue-600 hover:underline">Next &gt;&gt;</button>
            <button className="px-2 py-1 text-blue-600 hover:underline">Last</button>
          </div>

        </div>
      </div>
    </main>
    </DashboardLayout>
  );
}
