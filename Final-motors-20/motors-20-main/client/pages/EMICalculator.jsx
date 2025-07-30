import DashboardLayout from "@/components/layout/DashboardLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calculator } from "lucide-react";

export default function EMICalculator() {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">EMI Calculator</h1>
          <p className="text-gray-600 mt-1">
            Calculate EMI for loans and financing options
          </p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Calculator className="h-5 w-5 mr-2" />
              EMI Calculator
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-64 flex items-center justify-center text-gray-500">
              EMI Calculator interface will be implemented here
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
}
