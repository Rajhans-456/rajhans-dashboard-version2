import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import DashboardLayout from "@/components/layout/DashboardLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AlertTriangle } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname,
    );
  }, [location.pathname]);

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Page Not Found</h1>
          <p className="text-gray-600 mt-1">
            This feature is coming soon or under development
          </p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <AlertTriangle className="h-5 w-5 mr-2 text-yellow-500" />
              Under Development
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-64 flex flex-col items-center justify-center text-gray-500">
              <div className="text-6xl font-bold text-gray-300 mb-4">404</div>
              <p className="text-lg mb-2">This feature is coming soon</p>
              <p className="text-sm">
                The page you're looking for is under development
              </p>
              <a
                href="/"
                className="text-primary hover:text-primary/80 underline mt-4"
              >
                Return to Dashboard
              </a>
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default NotFound;
