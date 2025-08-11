import React, { useState } from 'react';
import DashboardLayout from '../../components/layout/DashboardLayout';

const CollectionAgentReports = () => {
  const [agentName, setAgentName] = useState('ALL AGENTS');
  const [reportDuration, setReportDuration] = useState('Monthly');
  const [month, setMonth] = useState('Jun');
  const [year, setYear] = useState('2025');

  const agents = [
    'ALL AGENTS',
    'Ramesh Kumar',
    'Suresh Singh',
    'Amit Sharma',
    'Sunita Devi'
  ];

  const durations = [
    'Daily',
    'Weekly',
    'Monthly',
    'Quarterly',
    'Yearly'
  ];

  const months = [
    'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
    'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
  ];

  const handleGetReport = () => {
    console.log('Generate collection agent report with:', {
      agentName,
      reportDuration,
      month,
      year
    });
    // Add your report generation logic here
  };

  const handleClearAll = () => {
    setAgentName('ALL AGENTS');
    setReportDuration('Monthly');
    setMonth('Jun');
    setYear('2025');
  };

  const handleExportToExcel = () => {
    console.log('Export collection agent report to Excel');
    // Add your export logic here
  };

  return (
    <DashboardLayout>
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-6xl mx-auto">
        <div className="bg-white rounded-lg shadow-sm p-8">
          {/* Accent Border */}
          <div className="border-b-4 border-teal-300 pb-4 mb-8">
            <h2 className="text-2xl font-bold text-blue-800 tracking-wide">COLLECTION AGENT REPORTS</h2>
          </div>

          {/* Form Fields */}
          <div className="space-y-6 mb-8">
            <div className="flex items-center">
              <label className="w-36 text-gray-700 font-medium">Agent Name:</label>
              <select
                value={agentName}
                onChange={(e) => setAgentName(e.target.value)}
                className="w-96 border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white"
              >
                {agents.map((agent) => (
                  <option key={agent} value={agent}>{agent}</option>
                ))}
              </select>
            </div>

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

            <div className="flex items-center">
              <label className="w-36 text-gray-700 font-medium">For:</label>
              <div className="flex space-x-4">
                <select
                  value={month}
                  onChange={(e) => setMonth(e.target.value)}
                  className="w-20 border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white"
                >
                  {months.map((m) => (
                    <option key={m} value={m}>{m}</option>
                  ))}
                </select>
                <input
                  type="text"
                  value={year}
                  onChange={(e) => setYear(e.target.value)}
                  className="w-24 border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
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

export default CollectionAgentReports;