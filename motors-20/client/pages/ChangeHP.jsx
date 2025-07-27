import DashboardLayout from "@/components/layout/DashboardLayout";
import { Button } from "@/components/ui/button";
import { CheckCircle, CreditCard, Search } from "lucide-react";

export default function ChangeHP() {
  return (
    <DashboardLayout>
      <div className="max-w-6xl mx-auto space-y-6">
        {/* Header */}
        <div className="bg-blue-500 text-white p-4 rounded-lg flex justify-between items-center">
          <h1 className="text-xl font-semibold">CHANGE HP</h1>
          <div className="flex items-center space-x-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Search..."
                className="px-4 py-2 rounded-md text-gray-900 w-64"
              />
            </div>
            <Button className="bg-blue-700 hover:bg-blue-800 text-white">
              <Search className="w-4 h-4 mr-2" />
              Search
            </Button>
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Column - Customer & Loan Details */}
          <div className="bg-white rounded-lg border-l-4 border-blue-400 p-6">
            <div className="flex items-center mb-6 text-blue-500">
              <CheckCircle className="w-5 h-5 mr-2" />
              <h2 className="text-lg font-semibold">Customer & Loan Details</h2>
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
                  Internal Ac No.
                </label>
                <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                  <option>Select</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Current HP
                </label>
                <input
                  type="text"
                  placeholder="Current HP"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Ext Ac No.
                </label>
                <input
                  type="text"
                  placeholder="Ext Ac No."
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Loan Amount
                </label>
                <input
                  type="text"
                  placeholder="Loan Amount"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Veh Regn No.
                </label>
                <input
                  type="text"
                  placeholder="Veh Regn No."
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>
          </div>

          {/* Right Column - HP Change Details */}
          <div className="bg-white rounded-lg border-l-4 border-blue-400 p-6">
            <div className="flex items-center mb-6 text-blue-500">
              <CreditCard className="w-5 h-5 mr-2" />
              <h2 className="text-lg font-semibold">HP Change Details</h2>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  New HP
                </label>
                <input
                  type="text"
                  placeholder="New HP"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  HP Change Reason
                </label>
                <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                  <option>Select Reason</option>
                  <option>Transfer of Ownership</option>
                  <option>Bank Change</option>
                  <option>Policy Update</option>
                  <option>Customer Request</option>
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

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  HP Contact Number
                </label>
                <input
                  type="text"
                  placeholder="HP Contact Number"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  HP Email
                </label>
                <input
                  type="email"
                  placeholder="HP Email Address"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Additional Notes
                </label>
                <textarea
                  placeholder="Enter any additional notes"
                  rows={3}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex justify-center space-x-4 mt-8">
          <Button className="bg-blue-500 hover:bg-blue-600 text-white px-12 py-3 text-lg">
            SAVE
          </Button>
          <Button variant="outline" className="px-12 py-3 text-lg">
            Clear all
          </Button>
        </div>
      </div>
    </DashboardLayout>
  );
}
