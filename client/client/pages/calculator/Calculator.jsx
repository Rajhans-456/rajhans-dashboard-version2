import React, { useState } from "react";
import DashboardLayout from "../../components/layout/DashboardLayout";

export default function EMICalculator() {
  const [formData, setFormData] = useState({
    interestType: "Flat",
    loanDate: "",
    loanAmount: "",
    interestRate: "13.5",
    tenure: "11",
    intPeriod: "12",
    type: "Normal",
    emiPattern: "Even",
  });

  const [result, setResult] = useState({
    emi: "",
    irr: "-",
    advEmiAmt: "-",
    emisToPay: "-",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleCalculate = () => {
    // Dummy values – replace with actual logic later
    setResult({
      emi: "₹5,500",
      irr: "14.2%",
      advEmiAmt: "₹11,000",
      emisToPay: "10",
    });
  };

  const handleClear = () => {
    setFormData({
      interestType: "Flat",
      loanDate: "",
      loanAmount: "",
      interestRate: "13.5",
      tenure: "11",
      intPeriod: "12",
      type: "Normal",
      emiPattern: "Even",
    });
    setResult({
      emi: "",
      irr: "-",
      advEmiAmt: "-",
      emisToPay: "-",
    });
  };

  return (
    <DashboardLayout>
      <main className="flex-1 flex flex-col bg-gray-100 min-h-screen">
        {/* 🔷 Header like EMIHistory */}
        <div className="bg-blue-800 text-white p-4">
          <h2 className="text-xl text-center font-bold">EMI Calculator</h2>
        </div>

        {/* 🔲 Content */}
        <div className="flex justify-center p-6">
          <div className="w-full max-w-4xl bg-white rounded-lg shadow-md p-6">
            <form className="grid grid-cols-1 gap-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <label className="font-semibold text-gray-700">
                  Interest Type:
                  <select
                    name="interestType"
                    value={formData.interestType}
                    onChange={handleChange}
                    className="mt-1 w-full border rounded px-3 py-2 focus:ring-2 focus:ring-blue-400"
                  >
                    <option value="Flat">Flat</option>
                    <option value="Reducing">Reducing</option>
                  </select>
                </label>

                <label className="font-semibold text-gray-700">
                  Loan Date:
                  <input
                    type="date"
                    name="loanDate"
                    value={formData.loanDate}
                    onChange={handleChange}
                    className="mt-1 w-full border rounded px-3 py-2 focus:ring-2 focus:ring-blue-400"
                  />
                </label>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <label className="font-semibold text-gray-700">
                  Loan Amount:
                  <input
                    type="number"
                    name="loanAmount"
                    value={formData.loanAmount}
                    onChange={handleChange}
                    className="mt-1 w-full border rounded px-3 py-2 bg-yellow-50 focus:ring-2 focus:ring-blue-400"
                  />
                </label>

                <label className="font-semibold text-gray-700">
                  Interest Rate:
                  <div className="flex items-center">
                    <input
                      type="number"
                      step="0.01"
                      name="interestRate"
                      value={formData.interestRate}
                      onChange={handleChange}
                      className="mt-1 w-full border rounded px-3 py-2 focus:ring-2 focus:ring-blue-400"
                    />
                    <span className="ml-2">%</span>
                  </div>
                </label>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <label className="font-semibold text-gray-700">
                  Tenure In Mths:
                  <input
                    type="number"
                    name="tenure"
                    value={formData.tenure}
                    onChange={handleChange}
                    className="mt-1 w-full border rounded px-3 py-2 focus:ring-2 focus:ring-blue-400"
                  />
                </label>

                <label className="font-semibold text-gray-700">
                  Int. Period:
                  <input
                    type="number"
                    name="intPeriod"
                    value={formData.intPeriod}
                    onChange={handleChange}
                    className="mt-1 w-full border rounded px-3 py-2 focus:ring-2 focus:ring-blue-400"
                  />
                </label>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <label className="font-semibold text-gray-700">
                  Type:
                  <select
                    name="type"
                    value={formData.type}
                    onChange={handleChange}
                    className="mt-1 w-full border rounded px-3 py-2 focus:ring-2 focus:ring-blue-400"
                  >
                    <option value="Normal">Normal</option>
                    <option value="Special">Special</option>
                  </select>
                </label>

                <label className="font-semibold text-gray-700">
                  EMI Pattern:
                  <select
                    name="emiPattern"
                    value={formData.emiPattern}
                    onChange={handleChange}
                    className="mt-1 w-full border rounded px-3 py-2 focus:ring-2 focus:ring-blue-400"
                  >
                    <option value="Even">Even</option>
                    <option value="Odd">Odd</option>
                  </select>
                </label>
              </div>

              {/* 🔘 Action Buttons */}
              <div className="flex flex-col md:flex-row gap-4 mt-4">
                <button
                  type="button"
                  onClick={handleCalculate}
                  className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded shadow"
                >
                  Calculate EMI
                </button>

                <button
                  type="button"
                  onClick={handleClear}
                  className="flex-1 bg-white border border-blue-600 text-blue-600 hover:bg-blue-50 font-semibold py-2 rounded shadow"
                >
                  Clear All
                </button>
              </div>
            </form>

            {/* 🔹 Results */}
            <hr className="my-8 border-t-2 border-dashed" />

            <div className="space-y-2 text-gray-700">
              <div>
                EMI: <span className="font-semibold">{result.emi}</span>
              </div>
              <div>
                IRR %: <span className="font-semibold">{result.irr}</span>
              </div>
              <div>
                Adv. EMI Amt.:{" "}
                <span className="font-semibold">{result.advEmiAmt}</span>
              </div>
              <div>
                EMIs To Pay:{" "}
                <span className="font-semibold">{result.emisToPay}</span>
              </div>
            </div>
          </div>
        </div>
      </main>
    </DashboardLayout>
  );
}
