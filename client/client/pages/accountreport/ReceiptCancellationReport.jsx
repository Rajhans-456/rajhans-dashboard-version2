import React, { useState } from 'react';
import DashboardLayout from '../../components/layout/DashboardLayout';

const ReceiptCancellationReport = () => {
  const [reportDuration, setReportDuration] = useState('Day-Wise');
  const [fromDate, setFromDate] = useState('12-06-2025');
  const [toDate, setToDate] = useState('12-06-2025');
  const [cancelledBy, setCancelledBy] = useState('Select');
  const [allUsers, setAllUsers] = useState(true);

  const durations = [
    'Day-Wise',
    'Week-Wise',
    'Month-Wise',
    'Quarter-Wise',
    'Year-Wise'
  ];

  const cancelledByOptions = [
    'Select',
    'Admin',
    'Manager',
    'Supervisor',
    'Agent'
  ];

  const handleGetReport = () => {
    console.log('Generate receipt cancellation report with:', {
      reportDuration,
      fromDate,
      toDate,
      cancelledBy,
      allUsers
    });
    // Add your report generation logic here
  };

  const handleClearAll = () => {
    setReportDuration('Day-Wise');
    setFromDate('12-06-2025');
    setToDate('12-06-2025');
    setCancelledBy('Select');
    setAllUsers(true);
  };

  const handleExportToExcel = () => {
    console.log('Export receipt cancellation report to Excel');
    // Add your export logic here
  };

  return (
      <DashboardLayout>
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-6xl mx-auto">
        <div className="bg-white rounded-lg shadow-sm p-8">
          {/* Accent Border */}
          <div className="border-b-4 border-teal-300 pb-4 mb-8">
            <h2 className="text-2xl font-bold text-blue-800 tracking-wide">RECEIPT CANCELLATION REPORT</h2>
          </div>

          {/* Form Fields */}
          <div className="space-y-6 mb-8">
            <div className="flex items-center">
              <label className="w-36 text-gray-700 font-medium">Report Duration:</label>
              <select
                value={reportDuration}
                onChange={(e) => setReportDuration(e.target.value)}
                className="w-32 border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white"
              >
                {durations.map((duration) => (
                  <option key={duration} value={duration}>{duration}</option>
                ))}
              </select>
            </div>

            <div className="flex items-center space-x-8">
              <div className="flex items-center">
                <label className="w-24 text-gray-700 font-medium">From Date:</label>
                <input
                  type="text"
                  value={fromDate}
                  onChange={(e) => setFromDate(e.target.value)}
                  placeholder="DD-MM-YYYY"
                  className="w-40 border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>

              <div className="flex items-center">
                <label className="w-20 text-gray-700 font-medium">To Date:</label>
                <input
                  type="text"
                  value={toDate}
                  onChange={(e) => setToDate(e.target.value)}
                  placeholder="DD-MM-YYYY"
                  className="w-40 border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
            </div>

            <div className="flex items-center">
              <label className="w-36 text-gray-700 font-medium">Cancelled By:</label>
              <select
                value={cancelledBy}
                onChange={(e) => setCancelledBy(e.target.value)}
                className="w-40 border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white"
              >
                {cancelledByOptions.map((option) => (
                  <option key={option} value={option}>{option}</option>
                ))}
              </select>
              <div className="flex items-center ml-8">
                <input
                  type="checkbox"
                  checked={allUsers}
                  onChange={(e) => setAllUsers(e.target.checked)}
                  className="w-5 h-5 text-purple-600 focus:ring-purple-500 focus:ring-2 border-gray-300 rounded"
                />
                <label className="ml-2 text-gray-700 font-medium">All Users</label>
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

export default ReceiptCancellationReport;