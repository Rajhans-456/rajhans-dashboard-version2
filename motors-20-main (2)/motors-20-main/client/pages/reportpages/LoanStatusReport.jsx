import React from 'react';
import DashboardLayout from '../../components/layout/DashboardLayout';

const StatusWiseLoanCount = () => {
  return (
    <DashboardLayout>
    <main className="flex-1 flex flex-col bg-gray-100 min-h-screen">
      {/* Blue header */}
      <div className="bg-blue-800 text-white p-4">
        <h2 className="text-xl text-center font-bold">Status-wise Loan Count</h2>
      </div>

      {/* White card */}
      <div className="flex justify-center p-6">
        <div className="w-full max-w-7xl bg-white rounded-lg shadow-md p-6">
          <h1 className="text-2xl font-bold mb-4">Status-wise Loan Count</h1>

          {/* New Vehicle Loan */}
          <div className="mb-8">
            <h2 className="text-lg font-bold mb-2">New Vehicle Loan</h2>
            <div className="border border-black">
              <div className="grid grid-cols-8 text-center font-bold bg-gray-100">
                <div className="border border-black px-2 py-1 text-black">Running</div>
                <div className="border border-black px-2 py-1 text-black">OverDue</div>
                <div className="border border-black px-2 py-1 text-black">Recalled</div>
                <div className="border border-black px-2 py-1 text-black">Legal</div>
                <div className="border border-black px-2 py-1 text-black">Settled</div>
                <div className="border border-black px-2 py-1 text-black">Closed</div>
                <div className="border border-black px-2 py-1 text-black">Pre-Paid</div>
                <div className="border border-black px-2 py-1 text-black">Total</div>
              </div>
              <div className="grid grid-cols-8 text-center font-bold">
                <div className="border border-black px-2 py-1 text-green-600">946</div>
                <div className="border border-black px-2 py-1 text-red-600">1302</div>
                <div className="border border-black px-2 py-1 text-black">0</div>
                <div className="border border-black px-2 py-1 text-black">0</div>
                <div className="border border-black px-2 py-1 text-green-600">127</div>
                <div className="border border-black px-2 py-1 text-green-600">1537</div>
                <div className="border border-black px-2 py-1 text-black">75</div>
                <div className="border border-black px-2 py-1 text-blue-600">3987</div>
              </div>
              <div className="grid grid-cols-8 text-center font-bold">
                <div className="col-span-1 border border-black py-1 text-blue-600">2248</div>
                <div className="col-start-3 col-span-1 border border-black py-1 text-red-600">0</div>
                <div className="col-start-6 col-span-1 border border-black py-1 text-green-600">1739</div>
              </div>
              <div className="grid grid-cols-8 text-center font-bold">
                <div className="col-start-2 col-span-1 border border-black py-1 text-red-600">1302</div>
              </div>
            </div>
            <div className="flex items-center mt-2 gap-2">
              <div className="bg-red-500 text-white font-bold px-4 py-1 border border-black">ALERT =&gt;&gt;&gt;</div>
              <div className="flex items-center border border-black">
                <span className="px-4 font-bold">Expired Loan Count :</span>
                <span className="px-4 py-1 border-l border-black text-red-600 font-bold">800</span>
              </div>
              <div className="border border-black px-4 py-1 font-semibold">
                Loans Which Should Have Been Closed Or Settled By Now.
              </div>
            </div>
          </div>

          {/* Used Vehicle Loan */}
          <div className="mb-8">
            <h2 className="text-lg font-bold mb-2">Used Vehicle Loan</h2>
            <div className="border border-black">
              <div className="grid grid-cols-8 text-center font-bold bg-gray-100">
                <div className="border border-black px-2 py-1 text-black">Running</div>
                <div className="border border-black px-2 py-1 text-black">OverDue</div>
                <div className="border border-black px-2 py-1 text-black">Recalled</div>
                <div className="border border-black px-2 py-1 text-black">Legal</div>
                <div className="border border-black px-2 py-1 text-black">Settled</div>
                <div className="border border-black px-2 py-1 text-black">Closed</div>
                <div className="border border-black px-2 py-1 text-black">Pre-Paid</div>
                <div className="border border-black px-2 py-1 text-black">Total</div>
              </div>
              <div className="grid grid-cols-8 text-center font-bold">
                <div className="border border-black px-2 py-1 text-green-600">251</div>
                <div className="border border-black px-2 py-1 text-red-600">235</div>
                <div className="border border-black px-2 py-1 text-black">0</div>
                <div className="border border-black px-2 py-1 text-black">0</div>
                <div className="border border-black px-2 py-1 text-green-600">58</div>
                <div className="border border-black px-2 py-1 text-green-600">376</div>
                <div className="border border-black px-2 py-1 text-black">29</div>
                <div className="border border-black px-2 py-1 text-blue-600">949</div>
              </div>
              <div className="grid grid-cols-8 text-center font-bold">
                <div className="col-span-1 border border-black py-1 text-blue-600">486</div>
                <div className="col-start-3 col-span-1 border border-black py-1 text-red-600">0</div>
                <div className="col-start-6 col-span-1 border border-black py-1 text-green-600">463</div>
              </div>
              <div className="grid grid-cols-8 text-center font-bold">
                <div className="col-start-2 col-span-1 border border-black py-1 text-red-600">235</div>
              </div>
            </div>
            <div className="flex items-center mt-2 gap-2">
              <div className="bg-red-500 text-white font-bold px-4 py-1 border border-black">ALERT =&gt;&gt;&gt;</div>
              <div className="flex items-center border border-black">
                <span className="px-4 font-bold">Expired Loan Count :</span>
                <span className="px-4 py-1 border-l border-black text-red-600 font-bold">138</span>
              </div>
              <div className="border border-black px-4 py-1 font-semibold">
                Loans Which Should Have Been Closed Or Settled By Now.
              </div>
            </div>
          </div>

          {/* Personal Loan */}
          <div className="mb-8">
            <h2 className="text-lg font-bold mb-2">Personal Loan</h2>
            <div className="border border-black">
              <div className="grid grid-cols-8 text-center font-bold bg-gray-100">
                <div className="border border-black px-2 py-1 text-black">Running</div>
                <div className="border border-black px-2 py-1 text-black">OverDue</div>
                <div className="border border-black px-2 py-1 text-black">Recalled</div>
                <div className="border border-black px-2 py-1 text-black">Legal</div>
                <div className="border border-black px-2 py-1 text-black">Settled</div>
                <div className="border border-black px-2 py-1 text-black">Closed</div>
                <div className="border border-black px-2 py-1 text-black">Pre-Paid</div>
                <div className="border border-black px-2 py-1 text-black">Total</div>
              </div>
              <div className="grid grid-cols-8 text-center font-bold">
                <div className="border border-black px-2 py-1 text-green-600">14</div>
                <div className="border border-black px-2 py-1 text-red-600">1</div>
                <div className="border border-black px-2 py-1 text-red-600">15</div>
                <div className="border border-black px-2 py-1 text-black">0</div>
                <div className="border border-black px-2 py-1 text-green-600">2</div>
                <div className="border border-black px-2 py-1 text-green-600">5</div>
                <div className="border border-black px-2 py-1 text-black">1</div>
                <div className="border border-black px-2 py-1 text-blue-600">20</div>
              </div>
              <div className="grid grid-cols-8 text-center font-bold">
                <div className="col-span-1 border border-black py-1 text-blue-600">15</div>
                <div className="col-start-3 col-span-1 border border-black py-1 text-red-600">15</div>
                <div className="col-start-6 col-span-1 border border-black py-1 text-green-600">5</div>
              </div>
              <div className="grid grid-cols-8 text-center font-bold">
                <div className="col-start-2 col-span-1 border border-black py-1 text-red-600">1</div>
              </div>
            </div>
            <div className="flex items-center mt-2 gap-2">
              <div className="bg-red-500 text-white font-bold px-4 py-1 border border-black">ALERT =&gt;&gt;&gt;</div>
              <div className="flex items-center border border-black">
                <span className="px-4 font-bold">Expired Loan Count :</span>
                <span className="px-4 py-1 border-l border-black text-red-600 font-bold">3</span>
              </div>
              <div className="border border-black px-4 py-1 font-semibold">
                Loans Which Should Have Been Closed Or Settled By Now.
              </div>
            </div>
          </div>

          {/* Count for All Loan Types */}
          <div className="mb-8">
            <h2 className="text-lg font-bold mb-2">Count for All Loan Types</h2>
            <div className="border border-black">
              <div className="grid grid-cols-8 text-center font-bold bg-gray-100">
                <div className="border border-black px-2 py-1 text-black">Running</div>
                <div className="border border-black px-2 py-1 text-black">OverDue</div>
                <div className="border border-black px-2 py-1 text-black">Recalled</div>
                <div className="border border-black px-2 py-1 text-black">Legal</div>
                <div className="border border-black px-2 py-1 text-black">Settled</div>
                <div className="border border-black px-2 py-1 text-black">Closed</div>
                <div className="border border-black px-2 py-1 text-black">Pre-Paid</div>
                <div className="border border-black px-2 py-1 text-black">Total</div>
              </div>
              <div className="grid grid-cols-8 text-center font-bold">
                <div className="border border-black px-2 py-1 text-green-600">1211</div>
                <div className="border border-black px-2 py-1 text-red-600">1538</div>
                <div className="border border-black px-2 py-1 text-black">0</div>
                <div className="border border-black px-2 py-1 text-black">0</div>
                <div className="border border-black px-2 py-1 text-green-600">187</div>
                <div className="border border-black px-2 py-1 text-green-600">1915</div>
                <div className="border border-black px-2 py-1 text-black">105</div>
                <div className="border border-black px-2 py-1 text-blue-600">4956</div>
              </div>
              <div className="grid grid-cols-8 text-center font-bold">
                <div className="col-span-1 border border-black py-1 text-blue-600">2749</div>
                <div className="col-start-3 col-span-1 border border-black py-1 text-red-600">0</div>
                <div className="col-start-6 col-span-1 border border-black py-1 text-green-600">2207</div>
              </div>
              <div className="grid grid-cols-8 text-center font-bold">
                <div className="col-start-2 col-span-1 border border-black py-1 text-red-600">1538</div>
              </div>
            </div>
            <div className="flex items-center mt-2 gap-2">
              <div className="bg-red-500 text-white font-bold px-4 py-1 border border-black">ALERT =&gt;&gt;&gt;</div>
              <div className="flex items-center border border-black">
                <span className="px-4 font-bold">Expired Loan Count :</span>
                <span className="px-4 py-1 border-l border-black text-red-600 font-bold">941</span>
              </div>
              <div className="border border-black px-4 py-1 font-semibold">
                Loans Which Should Have Been Closed Or Settled By Now.
              </div>
            </div>
          </div>

        </div>
      </div>
    </main>
    </DashboardLayout>
  );
};

export default StatusWiseLoanCount;
