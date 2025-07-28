import DashboardLayout from "@/components/layout/DashboardLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  BarChart3,
  TrendingUp,
  Users,
  CreditCard,
  DollarSign,
  Activity,
} from "lucide-react";

export default function Dashboard() {
  const stats = [
    {
      title: "Total Customers",
      value: "2,345",
      change: "+12%",
      icon: Users,
      trend: "up",
    },
    {
      title: "Active Loans",
      value: "1,234",
      change: "+8%",
      icon: CreditCard,
      trend: "up",
    },
    {
      title: "Monthly Revenue",
      value: "₹45.2L",
      change: "+15%",
      icon: DollarSign,
      trend: "up",
    },
    {
      title: "EMI Collections",
      value: "₹32.8L",
      change: "+5%",
      icon: TrendingUp,
      trend: "up",
    },
  ];

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
          <p className="text-gray-600 mt-1">
            Welcome back, here's what's happening with your business today.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat) => {
            const Icon = stat.icon;
            return (
              <Card key={stat.title}>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium text-gray-600">
                    {stat.title}
                  </CardTitle>
                  <Icon className="h-4 w-4 text-gray-400" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-gray-900">
                    {stat.value}
                  </div>
                  <p className="text-xs text-green-600 flex items-center mt-1">
                    <TrendingUp className="h-3 w-3 mr-1" />
                    {stat.change} from last month
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Charts Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <BarChart3 className="h-5 w-5 mr-2" />
                Monthly Performance
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-64 flex items-center justify-center text-gray-500">
                Chart placeholder - Monthly performance data
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Activity className="h-5 w-5 mr-2" />
                Recent Activity
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div>
                    <p className="text-sm font-medium">
                      New customer registration
                    </p>
                    <p className="text-xs text-gray-500">John Doe - AC001234</p>
                  </div>
                  <span className="text-xs text-gray-400">2 mins ago</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div>
                    <p className="text-sm font-medium">EMI payment received</p>
                    <p className="text-xs text-gray-500">₹15,000 - AC001235</p>
                  </div>
                  <span className="text-xs text-gray-400">5 mins ago</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div>
                    <p className="text-sm font-medium">Loan approval pending</p>
                    <p className="text-xs text-gray-500">
                      Jane Smith - AC001236
                    </p>
                  </div>
                  <span className="text-xs text-gray-400">10 mins ago</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  );
}
