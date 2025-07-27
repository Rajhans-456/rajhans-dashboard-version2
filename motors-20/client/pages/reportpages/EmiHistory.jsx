import React, { useState, useEffect } from "react";
import DashboardLayout from "../../components/layout/DashboardLayout";

export default function EMIHistory() {
  const [customerName, setCustomerName] = useState("");
  const [customerId, setCustomerId] = useState("");
  const [loanAccounts, setLoanAccounts] = useState([]);
  const [selectedLoanAc, setSelectedLoanAc] = useState("");
  const [extAcNo, setExtAcNo] = useState("");

  const [emiHistory, setEmiHistory] = useState([]); // this will store fetched EMI data

  // ✅ Optional: Fetch loan accounts on load
  useEffect(() => {
    // This would come from backend
    fetch("/api/loan-accounts")
      .then((res) => res.json())
      .then((data) => setLoanAccounts(data))
      .catch((err) => console.error("Failed to load loan accounts", err));
  }, []);

  const handleSearch = () => {
    // simulate fetching customerId/extAcNo
    fetch(`/api/customers/search?name=${customerName}`)
      .then((res) => res.json())
      .then((data) => {
        setCustomerId(data.customerId);
        setExtAcNo(data.extAcNo);
        setLoanAccounts(data.loanAccounts); // optional if needed here
      })
      .catch((err) => console.error("Search failed", err));
  };

  const handleGetReport = () => {
    fetch(`/api/emihistory?loanAcNo=${selectedLoanAc}`)
      .then((res) => res.json())
      .then((data) => setEmiHistory(data))
      .catch((err) => console.error("Get report failed", err));
  };

  const handleClear = () => {
    setCustomerName("");
    setCustomerId("");
    setLoanAccounts([]);
    setSelectedLoanAc("");
    setExtAcNo("");
    setEmiHistory([]);
  };

  return (
    <DashboardLayout>
    <main className="flex-1 flex flex-col bg-gray-100 min-h-screen">
      {/* Header */}
      <div className="bg-blue-800 text-white p-4">
        <h2 className="text-xl text-center font-bold">Paid EMI History</h2>
      </div>

      {/* Content Card */}
      <div className="flex justify-center p-6">
        <div className="w-full max-w-4xl bg-white rounded-lg shadow-md p-6">
          {/* Search Button */}
          <div className="flex justify-end mb-6">
            <button
              onClick={handleSearch}
              className="bg-gray-500 hover:bg-gray-600 text-white font-semibold py-2 px-6 rounded"
            >
              Search
            </button>
          </div>

          {/* Inputs */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Customer Name:
                </label>
                <input
                  type="text"
                  value={customerName}
                  onChange={(e) => setCustomerName(e.target.value)}
                  placeholder="Enter customer name"
                  className="w-full border border-gray-300 rounded px-3 py-2 bg-white"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Customer ID:
                </label>
                <span className="font-bold text-gray-800">{customerId}</span>
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Loan Ac No:
                </label>
                <select
                  value={selectedLoanAc}
                  onChange={(e) => setSelectedLoanAc(e.target.value)}
                  className="w-full border border-gray-300 rounded px-3 py-2 bg-white"
                >
                  <option value="">Select Account</option>
                  {loanAccounts.map((ac) => (
                    <option key={ac.id} value={ac.accountNo}>
                      {ac.accountNo}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Ext Ac No:
                </label>
                <span className="font-bold text-gray-800">{extAcNo}</span>
              </div>
            </div>
          </div>

          <hr className="my-6" />

          {/* Footer Buttons */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <a
              href="#"
              className="text-blue-600 font-medium hover:text-blue-800 hover:underline"
            >
              Export to Excel
            </a>
            <div className="flex gap-3">
              <button
                onClick={handleGetReport}
                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded"
              >
                Get Report
              </button>
              <button
                onClick={handleClear}
                className="bg-gray-500 hover:bg-gray-600 text-white font-semibold py-2 px-6 rounded"
              >
                Clear All
              </button>
            </div>
          </div>

          {/* Optional: Display EMI History Report */}
          {emiHistory.length > 0 && (
            <div className="mt-8">
              <h4 className="text-lg font-semibold mb-2">EMI Report:</h4>
              <table className="w-full border border-gray-300 text-sm">
                <thead>
                  <tr className="bg-gray-200">
                    <th className="p-2 border">Date</th>
                    <th className="p-2 border">Amount</th>
                    <th className="p-2 border">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {emiHistory.map((emi, index) => (
                    <tr key={index}>
                      <td className="p-2 border">{emi.date}</td>
                      <td className="p-2 border">{emi.amount}</td>
                      <td className="p-2 border">{emi.status}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </main>
    </DashboardLayout>
  );
}
