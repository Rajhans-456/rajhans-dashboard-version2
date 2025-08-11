import DashboardLayout from "@/components/layout/DashboardLayout";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";

export default function SearchReceipts() {
  return (
    <DashboardLayout>
      <div className="max-w-4xl mx-auto space-y-6">
        <div>
          <h1 className="text-2xl font-semibold text-gray-900">
            Search Receipts
          </h1>
        </div>

        <div className="bg-white rounded-lg border border-gray-200 p-6">
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Search By
                </label>
                <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent">
                  <option>Select Type</option>
                  <option>Receipt Number</option>
                  <option>Account Number</option>
                  <option>Transaction ID</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Type Text & Press ENTER
                </label>
                <input
                  type="text"
                  placeholder="Type Text & Press ENTER"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent"
                />
              </div>
            </div>

            <div className="flex items-center space-x-4 mb-4">
              <label className="flex items-center space-x-2">
                <input type="checkbox" className="rounded border-gray-300" />
                <span className="text-sm text-gray-700">
                  Search Last 4 Digit
                </span>
              </label>
            </div>

            <div className="flex items-center gap-4">
              <Button className="bg-primary hover:bg-primary/90 text-white px-6">
                <Search className="w-4 h-4 mr-2" />
                Search Receipts
              </Button>

              <Button variant="outline" className="px-6">
                Clear All Fields
              </Button>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg border border-gray-200 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-6">Results</h3>
          <div className="h-48 bg-gray-50 rounded-md border border-gray-200"></div>
        </div>
      </div>
    </DashboardLayout>
  );
}
