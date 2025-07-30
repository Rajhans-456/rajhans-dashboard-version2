import React, { useState } from "react";
import DashboardLayout from "../../components/layout/DashboardLayout";

const LccReport = () => {
  const [reportType, setReportType] = useState("quick-lcc");
  const [loanType, setLoanType] = useState("vehicle-loan");
  const [hpFilter, setHpFilter] = useState("hinduja-leyland");
  const [codeType, setCodeType] = useState("all");
  const [filterBy, setFilterBy] = useState("collection-area");
  const [collectionArea, setCollectionArea] = useState("all");
  const [includeAllData, setIncludeAllData] = useState(false);

  return (
    <DashboardLayout>
    <div className="bg-gray-100 min-h-screen flex items-center justify-center p-6">
      <div className="w-full max-w-4xl bg-white rounded-lg shadow-lg">
        {/* Header */}
        <div className="bg-blue-800 text-center text-white py-4 rounded-t-lg">
          <h2 className="text-lg font-bold tracking-wider uppercase">
            LCC Report
          </h2>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6">
          <div>
            <h3 className="text-md font-semibold mb-3">Select Report Type:</h3>
            <div className="flex flex-wrap gap-4">
              <label className="flex items-center space-x-2">
                <input
                  type="radio"
                  name="reportType"
                  value="quick-lcc"
                  checked={reportType === "quick-lcc"}
                  onChange={(e) => setReportType(e.target.value)}
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500"
                />
                <span className="font-semibold text-red-600">Quick LCC</span>
              </label>
              <label className="flex items-center space-x-2">
                <input
                  type="radio"
                  name="reportType"
                  value="filtered-lcc"
                  checked={reportType === "filtered-lcc"}
                  onChange={(e) => setReportType(e.target.value)}
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500"
                />
                <span className="text-gray-800">Filtered LCC</span>
              </label>
              <label className="flex items-center space-x-2">
                <input
                  type="radio"
                  name="reportType"
                  value="closed-loan-list"
                  checked={reportType === "closed-loan-list"}
                  onChange={(e) => setReportType(e.target.value)}
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500"
                />
                <span className="text-gray-800">Closed Loan List</span>
              </label>
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex items-center">
              <label className="w-48 text-sm font-semibold text-gray-700">
                Select Loan Type:
              </label>
              <select
                value={loanType}
                onChange={(e) => setLoanType(e.target.value)}
                className="flex-1 p-2 border border-gray-300 rounded"
              >
                <option value="vehicle-loan">Vehicle Loan</option>
                <option value="personal-loan">Personal Loan</option>
              </select>
            </div>

            <div className="flex items-center">
              <label className="w-48 text-sm font-semibold text-gray-700">
                Select HP Filter:
              </label>
              <select
                value={hpFilter}
                onChange={(e) => setHpFilter(e.target.value)}
                className="flex-1 p-2 border border-gray-300 rounded"
              >
                <option value="hinduja-leyland">Hinduja Leyland Finance Limited, Gurgaon</option>
                <option value="other-finance">Other Finance Corp</option>
              </select>
            </div>

            <div className="flex items-center">
              <label className="w-48 text-sm font-semibold text-gray-700">
                Code Type:
              </label>
              <select
                value={codeType}
                onChange={(e) => setCodeType(e.target.value)}
                className="flex-1 p-2 border border-gray-300 rounded"
              >
                <option value="all">ALL</option>
                <option value="fixed">Fixed</option>
                <option value="variable">Variable</option>
              </select>
            </div>

            <div className="flex items-center">
              <label className="w-48 text-sm font-semibold text-gray-700">
                Filter By Area / Agent:
              </label>
              <select
                value={filterBy}
                onChange={(e) => setFilterBy(e.target.value)}
                className="flex-1 p-2 border border-gray-300 rounded"
              >
                <option value="collection-area">Collection Area</option>
                <option value="agent">Agent</option>
              </select>
            </div>

            <div className="flex items-center">
              <label className="w-48 text-sm font-semibold text-gray-700">
                Collection Area:
              </label>
              <select
                value={collectionArea}
                onChange={(e) => setCollectionArea(e.target.value)}
                className="flex-1 p-2 border border-gray-300 rounded"
              >
                <option value="all">ALL</option>
                <option value="area-1">Area 1</option>
                <option value="area-2">Area 2</option>
              </select>
            </div>

            <div className="flex items-center">
              <label className="w-48"></label>
              <label className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  checked={includeAllData}
                  onChange={(e) => setIncludeAllData(e.target.checked)}
                  className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                />
                <span className="text-gray-800 text-sm">Include ALL Loans Data</span>
              </label>
            </div>
          </div>

          <hr className="my-6" />

          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <a
              href="#"
              className="text-blue-600 hover:text-blue-800 text-sm font-medium hover:underline"
            >
              Export to Excel
            </a>
            <div className="flex gap-3">
              <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-5 rounded">
                Get Report
              </button>
              <button
                onClick={() => {
                  setReportType("");
                  setLoanType("vehicle-loan");
                  setHpFilter("hinduja-leyland");
                  setCodeType("all");
                  setFilterBy("collection-area");
                  setCollectionArea("all");
                  setIncludeAllData(false);
                }}
                className="bg-gray-500 hover:bg-gray-600 text-white font-semibold py-2 px-5 rounded"
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

export default LccReport;
