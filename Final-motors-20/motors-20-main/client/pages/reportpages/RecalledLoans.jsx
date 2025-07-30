import React from "react";
import DashboardLayout from "../../components/layout/DashboardLayout";

const RecalledLoans = () => {
  return (
    <DashboardLayout>
    <div className="bg-gray-100 min-h-screen flex items-center justify-center p-6">
      <div className="w-full max-w-4xl bg-white rounded-lg shadow-lg">
        {/* Top header */}
        <div className="bg-blue-800 text-center text-white py-4 rounded-t-lg">
          <h2 className="text-lg font-bold tracking-wider uppercase">Recalled Loans</h2>
        </div>

        {/* Content inside card */}
        <div className="p-6 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex items-center">
              <label htmlFor="loanType" className="w-32 text-gray-800 font-semibold">
                Loan Type:
              </label>
              <select
                id="loanType"
                name="loanType"
                className="flex-1 p-2 border border-yellow-400 rounded-lg bg-yellow-50 shadow-sm"
              >
                <option value="all">ALL</option>
                <option value="vehicle">Vehicle Loan</option>
                <option value="personal">Personal Loan</option>
              </select>
            </div>
            <div className="flex items-center">
              <label htmlFor="hp" className="w-32 text-gray-800 font-semibold">
                Select HP:
              </label>
              <select
                id="hp"
                name="hp"
                className="flex-1 p-2 border border-blue-200 rounded-lg bg-white shadow-sm"
              >
                <option value="all">ALL</option>
                <option value="hp1">HP Filter 1</option>
                <option value="hp2">HP Filter 2</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </div>
    </DashboardLayout>
  );
};

export default RecalledLoans;
