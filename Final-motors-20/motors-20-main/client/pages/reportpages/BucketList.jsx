import React from "react";
import DashboardLayout from "../../components/layout/DashboardLayout";

const BucketList = () => {
  const bucketData = [
    { label: "1", count: 343 },
    { label: "2", count: 180 },
    { label: "3", count: 143 },
    { label: "4", count: 87 },
    { label: "5", count: 61 },
    { label: "6", count: 61 },
    { label: "Above 6", count: 1981 },
  ];

  return (
    <DashboardLayout>
    <div className="bg-gray-100 min-h-screen flex items-center justify-center p-6">
      <div className="w-full max-w-5xl bg-white rounded-lg shadow-lg">
        {/* Header */}
        <div className="bg-blue-800 text-center text-white py-4 rounded-t-lg">
          <h2 className="text-lg font-bold tracking-wider uppercase">Bucket Size Details</h2>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6">
          <h3 className="text-md font-semibold text-gray-700 text-center">Current Bucket-Wise Loan Count</h3>

          <div className="flex flex-wrap justify-center gap-4">
            {bucketData.map((bucket) => (
              <div
                key={bucket.label}
                className="flex flex-col items-center justify-center p-4 bg-gray-50 rounded-xl shadow-md border border-gray-200 w-28 h-24 hover:scale-105 transition-transform"
              >
                <span className="text-sm font-semibold text-gray-800">{bucket.label}</span>
                <span className="text-2xl font-bold text-red-600 mt-1">{bucket.count}</span>
              </div>
            ))}
          </div>

          <div className="flex justify-center mt-6">
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-5 rounded">
              Export to Excel
            </button>
          </div>
        </div>
      </div>
    </div>
   </DashboardLayout>
  );
};

export default BucketList;
