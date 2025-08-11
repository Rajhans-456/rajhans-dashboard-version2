import React, { useState } from 'react';
import DashboardLayout from '../../components/layout/DashboardLayout';

const MoneyInMarketReport = () => {
  const [asOnDate, setAsOnDate] = useState('dd-mm-yyyy');

  const handleGetReport = () => {
    console.log('Generate money in market report with:', {
      asOnDate
    });
    // Add your report generation logic here
  };

  const handleClearAll = () => {
    setAsOnDate('dd-mm-yyyy');
  };

  return (
      <DashboardLayout>
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-6xl mx-auto">
        <div className="bg-white rounded-lg shadow-sm p-8">
          {/* Accent Border */}
          <div className="border-b-4 border-teal-300 pb-4 mb-8">
            <h2 className="text-2xl font-bold text-blue-800 tracking-wide">MONEY IN MARKET REPORT</h2>
          </div>

          {/* Form Fields */}
          <div className="space-y-6 mb-8">
            <div className="flex items-center">
              <label className="w-24 text-gray-700 font-medium">As on Date:</label>
              <div className="relative">
                <input
                  type="text"
                  value={asOnDate}
                  onChange={(e) => setAsOnDate(e.target.value)}
                  placeholder="dd-mm-yyyy"
                  className="w-48 border border-gray-300 rounded-lg px-4 py-3 pr-12 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
                <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                  <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex space-x-4">
            <button
              onClick={handleGetReport}
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-medium transition-colors shadow-sm"
            >
              Get Report
            </button>
            <button
              onClick={handleClearAll}
              className="bg-gray-500 hover:bg-gray-600 text-white px-8 py-3 rounded-lg font-medium transition-colors shadow-sm"
            >
              Clear All
            </button>
          </div>
        </div>
      </div>
    </div>
    </DashboardLayout>
  );
};

export default MoneyInMarketReport;