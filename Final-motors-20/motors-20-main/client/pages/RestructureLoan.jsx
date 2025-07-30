import DashboardLayout from "@/components/layout/DashboardLayout";
import { Button } from "@/components/ui/button";
import { CheckCircle, DollarSign, Search, FileText } from "lucide-react";

export default function RestructureLoan() {
  return (
    <DashboardLayout>
      <div className="max-w-6xl mx-auto space-y-6">
        <div>
          <h1 className="text-2xl font-semibold text-gray-900">
            Restructure Loan
          </h1>
          <p className="text-gray-600 mt-1">
            Modify loan terms and restructure payment schedule
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Column - Current Loan Details */}
          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <div className="flex items-center mb-6 text-blue-500">
              <CheckCircle className="w-5 h-5 mr-2" />
              <h2 className="text-lg font-semibold">Current Loan Details</h2>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Customer Name
                </label>
                <input
                  type="text"
                  placeholder="Customer Name"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Loan Account No.
                </label>
                <input
                  type="text"
                  placeholder="Loan Account Number"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Current Loan Amount
                </label>
                <input
                  type="text"
                  placeholder="Current Outstanding Amount"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Current EMI Amount
                </label>
                <input
                  type="text"
                  placeholder="Current EMI"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Current Interest Rate
                </label>
                <input
                  type="text"
                  placeholder="Current Rate %"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Remaining Tenure (Months)
                </label>
                <input
                  type="text"
                  placeholder="Remaining Months"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>
          </div>

          {/* Right Column - New Loan Terms */}
          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <div className="flex items-center mb-6 text-blue-500">
              <DollarSign className="w-5 h-5 mr-2" />
              <h2 className="text-lg font-semibold">New Loan Terms</h2>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  New Interest Rate (%)
                </label>
                <input
                  type="text"
                  placeholder="New Interest Rate"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  New Tenure (Months)
                </label>
                <input
                  type="text"
                  placeholder="New Tenure in Months"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  New EMI Amount
                </label>
                <input
                  type="text"
                  placeholder="Calculated New EMI"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md bg-gray-50"
                  readOnly
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Processing Fee
                </label>
                <input
                  type="text"
                  placeholder="Processing Fee Amount"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Restructure Reason
                </label>
                <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                  <option>Select Reason</option>
                  <option>Financial Hardship</option>
                  <option>Rate Reduction</option>
                  <option>Tenure Extension</option>
                  <option>EMI Reduction</option>
                  <option>Other</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Effective Date
                </label>
                <input
                  type="date"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Terms & Conditions */}
        <div className="bg-white rounded-lg border border-gray-200 p-6">
          <div className="flex items-center mb-6 text-blue-500">
            <FileText className="w-5 h-5 mr-2" />
            <h2 className="text-lg font-semibold">Terms & Conditions</h2>
          </div>

          <div className="space-y-4">
            <div className="flex items-start space-x-3">
              <input type="checkbox" className="mt-1 rounded border-gray-300" />
              <p className="text-sm text-gray-700">
                I acknowledge that the restructured loan terms will be
                applicable from the effective date mentioned above.
              </p>
            </div>
            <div className="flex items-start space-x-3">
              <input type="checkbox" className="mt-1 rounded border-gray-300" />
              <p className="text-sm text-gray-700">
                I understand that processing fees and other charges may apply as
                per the bank's policy.
              </p>
            </div>
            <div className="flex items-start space-x-3">
              <input type="checkbox" className="mt-1 rounded border-gray-300" />
              <p className="text-sm text-gray-700">
                I agree to the new EMI amount and payment schedule as
                calculated.
              </p>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex justify-center space-x-4 pt-6">
          <Button className="bg-blue-500 hover:bg-blue-600 text-white px-12 py-3 text-lg">
            CALCULATE EMI
          </Button>
          <Button className="bg-green-500 hover:bg-green-600 text-white px-12 py-3 text-lg">
            RESTRUCTURE LOAN
          </Button>
          <Button variant="outline" className="px-12 py-3 text-lg">
            Clear all
          </Button>
        </div>
      </div>
    </DashboardLayout>
  );
}
