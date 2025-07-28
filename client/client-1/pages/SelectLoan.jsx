import DashboardLayout from "@/components/layout/DashboardLayout";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";

export default function SelectLoan() {
  return (
    <DashboardLayout>
      <div className="flex items-center justify-center min-h-[60vh]">
        <div className="bg-blue-100 border border-blue-300 rounded-lg p-8 max-w-2xl w-full mx-4">
          <div className="text-center mb-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-2">
              Select Loan to Edit
            </h2>
            <p className="text-sm text-gray-600">
              Search loans by customer name, account number, or mobile number
            </p>
          </div>

          <div className="space-y-6">
            <div>
              <h3 className="font-medium text-gray-900 mb-3">Search Loans</h3>
              <div className="flex gap-3 mb-4">
                <input
                  type="text"
                  placeholder="Enter Customer Name"
                  className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <Button className="bg-blue-500 hover:bg-blue-600 text-white px-6">
                  Search
                </Button>
                <Button variant="outline" className="px-6">
                  Clear All
                </Button>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Search By
                </label>
                <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                  <option>Select</option>
                  <option>Customer Name</option>
                  <option>Account Number</option>
                  <option>Mobile Number</option>
                </select>
              </div>
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-8 text-center">
              <div className="mb-4">
                <div className="w-16 h-16 bg-gray-300 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Search className="w-8 h-8 text-gray-500" />
                </div>
                <p className="text-gray-600 font-medium">No loans found</p>
                <p className="text-sm text-gray-500">
                  Try adjusting your search criteria or filters
                </p>
              </div>
            </div>

            <div className="flex justify-center gap-4 pt-4">
              <Button className="bg-blue-500 hover:bg-blue-600 text-white px-8">
                Select Loan
              </Button>
              <Button variant="outline" className="px-8">
                Close
              </Button>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
