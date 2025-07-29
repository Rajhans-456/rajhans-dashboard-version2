import React, { useState } from "react";
import DashboardLayout from "../../components/layout/DashboardLayout";
export default function EmiDueReport() {
  const [reportType, setReportType] = useState("EMI due today");

  const reportOptions = [
    "EMI due in next 2 days",
    "EMI due today",
    "EMI overdue upto 7 days",
    "EMI overdue more than 7 days upto 15 days",
    "EMI overdue more than 15 days upto 30 days",
    "EMI overdue more than 30 days upto 60 days",
    "EMI overdue more than 60 days upto 90 days",
    "EMI overdue more than 90 days",
    "All due EMIs",
  ];

  return (
       <DashboardLayout>
    <main className="flex-1 flex flex-col bg-gray-100 min-h-screen">
      {/* Blue header */}
      <div className="bg-blue-800 text-white p-4">
        <h2 className="text-xl text-center font-bold">E M I SCHEDULE</h2>
      </div>

      {/* White card */}
      <div className="flex justify-center p-6">
        <div className="w-full max-w-4xl bg-white rounded-lg shadow-md p-6">
          
          <h3 className="text-md font-semibold mb-4">Select Report Type:</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            {reportOptions.map((option) => (
              <label key={option} className="flex items-center p-3 border border-gray-300 rounded cursor-pointer hover:bg-gray-50">
                <input
                  type="radio"
                  name="reportType"
                  value={option}
                  checked={reportType === option}
                  onChange={(e) => setReportType(e.target.value)}
                  className="h-4 w-4 text-blue-600"
                />
                <span className="ml-3 text-gray-800">{option}</span>
              </label>
            ))}
          </div>

          <hr className="my-6" />

          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <a
              href="#"
              className="text-blue-600 font-medium hover:text-blue-800 hover:underline"
            >
              Export to Excel
            </a>
            <div className="flex gap-3">
              <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded">
                Get Report
              </button>
              <button
                onClick={() => setReportType("")}
                className="bg-gray-500 hover:bg-gray-600 text-white font-semibold py-2 px-6 rounded"
              >
                Clear All
              </button>
            </div>
          </div>

        </div>
      </div>
    </main>
    </DashboardLayout>
  );
}
