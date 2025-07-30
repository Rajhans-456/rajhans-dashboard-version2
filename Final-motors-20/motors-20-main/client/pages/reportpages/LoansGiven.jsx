import React from 'react';
import DashboardLayout from '../../components/layout/DashboardLayout';

export default function LoansGiven() {
  return (
    <DashboardLayout>
    <main className="flex-1 flex flex-col bg-gray-100 min-h-screen">
      {/* Blue header */}
      <div className="bg-blue-800 text-white p-4">
        <h2 className="text-xl text-center font-bold">Loans Given</h2>
      </div>

      {/* White card */}
      <div className="flex justify-center p-6">
        <div className="w-full max-w-4xl bg-white rounded-lg shadow-md p-6">
          <p className="text-gray-800">This is a placeholder for the Loans Given report.</p>
        </div>
      </div>
    </main>
    </DashboardLayout>
  );
}
