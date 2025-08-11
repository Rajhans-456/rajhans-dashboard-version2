import React, { useState } from 'react';
import DashboardLayout from '../../components/layout/DashboardLayout';

const CollectionReportsPage = () => {
  const [loansGivenBy, setLoansGivenBy] = useState('Showroom-Delhi');
  const [collectionAt, setCollectionAt] = useState('Showroom-Delhi');
  const [reportDuration, setReportDuration] = useState('Daily');
  const [forDate, setForDate] = useState('12-06-2025');

  const branches = [
    'Showroom-Delhi',
    'Showroom-Mumbai',
    'Showroom-Bangalore',
    'Showroom-Chennai',
    'Showroom-Pune'
  ];

  const durations = [
    'Daily',
    'Weekly',
    'Monthly',
    'Quarterly',
    'Yearly'
  ];

  const handleGetReport = () => {
    console.log('Generate collection report with:', {
      loansGivenBy,
      collectionAt,
      reportDuration,
      forDate
    });
    // Add your report generation logic here
  };

  const handleClearAll = () => {
    setLoansGivenBy('Showroom-Delhi');
    setCollectionAt('Showroom-Delhi');
    setReportDuration('Daily');
    setForDate('12-06-2025');
  };

  const handleExportToExcel = () => {
    console.log('Export collection report to Excel');
    // Add your export logic here
  };

  return (
     <DashboardLayout>
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-6xl mx-auto">
        <div className="bg-white rounded-lg shadow-sm p-8">
          {/* Accent Border */}
          <div className="border-b-4 border-teal-300 pb-4 mb-8">
            <h2 className="text-2xl font-bold text-blue-800 tracking-wide">COLLECTION REPORTS</h2>
          </div>

          {/* Form Fields */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
            {/* Left Column */}
            <div className="space-y-6">
              <div className="flex items-center">
                <label className="w-32 text-gray-700 font-medium">Loans Given By:</label>
                <select
                  value={loansGivenBy}
                  onChange={(e) => setLoansGivenBy(e.target.value)}
                  className="flex-1 border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white"
                >
                  {branches.map((branch) => (
                    <option key={branch} value={branch}>{branch}</option>
                  ))}
                </select>
                <span className="ml-4 text-gray-600 font-medium">Branch</span>
              </div>

              <div className="flex items-center">
                <label className="w-32 text-gray-700 font-medium">Collection At:</label>
                <select
                  value={collectionAt}
                  onChange={(e) => setCollectionAt(e.target.value)}
                  className="flex-1 border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white"
                >
                  {branches.map((branch) => (
                    <option key={branch} value={branch}>{branch}</option>
                  ))}
                </select>
                <span className="ml-4 text-gray-600 font-medium">Branch</span>
              </div>
            </div>

            {/* Right Column */}
            <div className="space-y-6">
              <div className="flex items-center">
                <label className="w-36 text-gray-700 font-medium">Report Duration:</label>
                <select
                  value={reportDuration}
                  onChange={(e) => setReportDuration(e.target.value)}
                  className="flex-1 border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white"
                >
                  {durations.map((duration) => (
                    <option key={duration} value={duration}>{duration}</option>
                  ))}
                </select>
              </div>

              <div className="flex items-center">
                <label className="w-36 text-gray-700 font-medium">For Date:</label>
                <input
                  type="text"
                  value={forDate}
                  onChange={(e) => setForDate(e.target.value)}
                  placeholder="DD-MM-YYYY"
                  className="flex-1 border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center space-y-4 sm:space-y-0">
            <button
              onClick={handleExportToExcel}
              className="text-blue-600 hover:text-blue-800 font-medium transition-colors"
            >
              Export to Excel
            </button>
            
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
    </div>
    </DashboardLayout>
  );
};

export default CollectionReportsPage;