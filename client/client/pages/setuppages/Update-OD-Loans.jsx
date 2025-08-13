import React, { useState } from 'react';
import DashboardLayout from '../../components/layout/DashboardLayout';

const Updateodloans = () => {
  const [showSuccess, setShowSuccess] = useState(false);

  const handleUpdateClick = () => {
    setShowSuccess(true);
  };

  const handleOkClick = () => {
    setShowSuccess(false);
  };

  return (
    <DashboardLayout>
      <div className="min-h-screen bg-white">
        {/* Main Content Area - Pure White */}
        <div className="w-full h-screen bg-white flex items-center justify-center p-4">
          {/* Main Dashboard Card */}
          <div className="bg-gradient-to-br from-blue-50 to-green-50 rounded-3xl p-8 w-full max-w-md shadow-lg border border-gray-200">
            <div className="text-center">
              <h1 className="text-2xl font-bold text-blue-900 mb-6 tracking-wide">
                OVERDUE LOAN UPDATE
              </h1>
              
              {/* Decorative line */}
              <div className="w-full h-1 bg-gradient-to-r from-cyan-300 to-teal-300 rounded-full mb-8"></div>
              
              {/* Update Button */}
              <button
                onClick={handleUpdateClick}
                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 px-8 rounded-lg text-lg transition-colors duration-200 shadow-md hover:shadow-lg"
              >
                Update Now
              </button>
            </div>
          </div>

          {/* Success Popup Modal */}
          {showSuccess && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
              <div className="bg-gradient-to-br from-green-100 to-green-200 rounded-2xl p-8 w-full max-w-sm shadow-2xl border border-green-300">
                <div className="text-center">
                  <h2 className="text-2xl font-bold text-gray-800 mb-4 underline">
                    Success
                  </h2>
                  
                  <p className="text-gray-700 text-lg mb-6">
                    Overdue Loan Update Completed Successfully.
                  </p>
                  
                  <button
                    onClick={handleOkClick}
                    className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold py-3 px-8 rounded-lg transition-colors duration-200 shadow-sm hover:shadow-md"
                  >
                    OK
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Updateodloans;
