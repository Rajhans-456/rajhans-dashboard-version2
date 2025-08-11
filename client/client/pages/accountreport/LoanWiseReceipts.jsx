import React, { useState } from 'react';
import DashboardLayout from '../../components/layout/DashboardLayout';

const LoanWiseReceipts = () => {
  const [loanType, setLoanType] = useState('Vehicle Loan');
  const [reportDuration, setReportDuration] = useState('Monthly');
  const [fromMonth, setFromMonth] = useState('Jun');
  const [fromYear, setFromYear] = useState('2025');
  const [toMonth, setToMonth] = useState('Jun');
  const [toYear, setToYear] = useState('2025');
  const [hpName, setHpName] = useState('Hinduja Leyland Finance Limited, Gurgaon');

  const loanTypes = [
    'Vehicle Loan',
    'Personal Loan',
    'Home Loan',
    'Business Loan',
    'Education Loan'
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

  const hpNames = [
    'Hinduja Leyland Finance Limited, Gurgaon',
    'HDFC Bank Limited, Mumbai',
    'ICICI Bank Limited, Delhi',
    'Axis Bank Limited, Bangalore',
    'Kotak Mahindra Bank, Chennai'
  ];

  const handleExportToExcel = () => {
    console.log('Export loan-wise receipts to Excel with:', {
      loanType,
      reportDuration,
      fromMonth,
      fromYear,
      toMonth,
      toYear,
      hpName
    });
    // Add your export logic here
  };

  const handleClearAll = () => {
    setLoanType('Vehicle Loan');
    setReportDuration('Monthly');
    setFromMonth('Jun');
    setFromYear('2025');
    setToMonth('Jun');
    setToYear('2025');
    setHpName('Hinduja Leyland Finance Limited, Gurgaon');
  };

  return (
      <DashboardLayout>
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-6xl mx-auto">
        <div className="bg-white rounded-lg shadow-sm p-8">
          {/* Accent Border */}
          <div className="border-b-4 border-teal-300 pb-4 mb-8">
            <h2 className="text-2xl font-bold text-blue-800 tracking-wide">LOAN-WISE RECEIPTS</h2>
          </div>

          {/* Form Fields */}
          <div className="space-y-6 mb-8">
            <div className="flex items-center">
              <label className="w-36 text-gray-700 font-medium">Loan Type:</label>
              <select
                value={loanType}
                onChange={(e) => setLoanType(e.target.value)}
                className="w-96 border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white"
              >
                {loanTypes.map((type) => (
                  <option key={type} value={type}>{type}</option>
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

            <div className="flex items-center space-x-8">
              <div className="flex items-center">
                <label className="w-16 text-gray-700 font-medium">From:</label>
                <div className="flex space-x-4">
                  <select
                    value={fromMonth}
                    onChange={(e) => setFromMonth(e.target.value)}
                    className="w-20 border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white"
                  >
                    {months.map((month) => (
                      <option key={month} value={month}>{month}</option>
                    ))}
                  </select>
                  <input
                    type="text"
                    value={fromYear}
                    onChange={(e) => setFromYear(e.target.value)}
                    className="w-24 border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
              </div>

              <div className="flex items-center">
                <label className="w-12 text-gray-700 font-medium">To:</label>
                <div className="flex space-x-4">
                  <select
                    value={toMonth}
                    onChange={(e) => setToMonth(e.target.value)}
                    className="w-20 border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white"
                  >
                    {months.map((month) => (
                      <option key={month} value={month}>{month}</option>
                    ))}
                  </select>
                  <input
                    type="text"
                    value={toYear}
                    onChange={(e) => setToYear(e.target.value)}
                    className="w-24 border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
              </div>
            </div>

            <div className="flex items-center">
              <label className="w-36 text-gray-700 font-medium">HP Name:</label>
              <select
                value={hpName}
                onChange={(e) => setHpName(e.target.value)}
                className="flex-1 border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white"
              >
                {hpNames.map((name) => (
                  <option key={name} value={name}>{name}</option>
                ))}
              </select>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex justify-center space-x-4">
            <button
              onClick={handleExportToExcel}
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-medium transition-colors shadow-sm"
            >
              Export to Excel
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

export default LoanWiseReceipts;