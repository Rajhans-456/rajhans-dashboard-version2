import React from 'react';
import DashboardLayout from '../../components/layout/DashboardLayout';

const LoanLedger = () => {
  return (
    <DashboardLayout>
    <main className="flex-1 flex flex-col bg-gray-100 min-h-screen">
      {/* Top blue header */}
      <div className="bg-blue-800 text-white p-4">
        <h2 className="text-xl font-bold">Customer Loan Ledger</h2>
        <p className="text-sm">View detailed loan transactions and balances</p>
      </div>

      {/* White card */}
      <div className="flex justify-center p-6">
        <div className="w-full max-w-5xl bg-white rounded shadow-md p-6">
          <div className="flex justify-between items-center mb-6 border-b border-gray-200 pb-4">
            <h2 className="text-lg font-semibold text-gray-800">Customer Loan Ledger</h2>
            <div className="flex items-center gap-3">
              <button className="bg-gray-500 hover:bg-gray-600 text-white font-semibold py-2 px-6 rounded">
                Search
              </button>
              <button className="bg-white hover:bg-gray-100 text-gray-700 font-semibold py-2 px-6 border border-gray-300 rounded">
                Clear All
              </button>
            </div>
          </div>

          {/* Content area */}
          <div className="h-96 flex items-center justify-center text-gray-400">
            <p>Search for a customer to view the loan ledger.</p>
          </div>
        </div>
      </div>
    </main>
    </DashboardLayout>
  );
};

export default LoanLedger;
