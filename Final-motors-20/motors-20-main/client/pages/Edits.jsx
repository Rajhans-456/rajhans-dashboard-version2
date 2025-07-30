import DashboardLayout from "@/components/layout/DashboardLayout";
import { Link } from "react-router-dom";
import {
  User,
  Users,
  Shield,
  FileText,
  RotateCcw,
  Car,
  UserCheck,
  CreditCard,
  Calendar,
  Hash,
} from "lucide-react";

export default function Edits() {
  const editOptions = [
    {
      title: "Edit Customer",
      description: "Modify customer information and details",
      path: "/edits/customer",
      icon: User,
      color: "bg-blue-500",
    },
    {
      title: "Edit Co-Borrower",
      description: "Update co-borrower information",
      path: "/edits/co-borrower",
      icon: Users,
      color: "bg-green-500",
    },
    {
      title: "Edit Guarantor",
      description: "Modify guarantor details",
      path: "/edits/guarantor",
      icon: Shield,
      color: "bg-purple-500",
    },
    {
      title: "Edit Loan",
      description: "Update loan information and terms",
      path: "/edits/loan",
      icon: FileText,
      color: "bg-orange-500",
    },
    {
      title: "Restructure Loan",
      description: "Restructure existing loan terms",
      path: "/edits/restructure-loan",
      icon: RotateCcw,
      color: "bg-red-500",
    },
    {
      title: "Edit Vehicle",
      description: "Update vehicle information",
      path: "/edits/vehicle",
      icon: Car,
      color: "bg-indigo-500",
    },
    {
      title: "Change Guarantor",
      description: "Replace or modify guarantor",
      path: "/edits/change-guarantor",
      icon: UserCheck,
      color: "bg-teal-500",
    },
    {
      title: "Change HP",
      description: "Modify HP related information",
      path: "/edits/change-hp",
      icon: CreditCard,
      color: "bg-pink-500",
    },
    {
      title: "Change EMI Date",
      description: "Update EMI payment dates",
      path: "/edits/change-emi-date",
      icon: Calendar,
      color: "bg-yellow-500",
    },
    {
      title: "Edit Ext Ac No",
      description: "Modify external account number",
      path: "/edits/edit-ext-ac-no",
      icon: Hash,
      color: "bg-gray-500",
    },
  ];

  return (
    <DashboardLayout>
      <div className="max-w-7xl mx-auto space-y-6">
        <div>
          <h1 className="text-2xl font-semibold text-gray-900">Edits</h1>
          <p className="text-gray-600 mt-1">
            Select an editing option to modify records
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {editOptions.map((option) => {
            const Icon = option.icon;
            return (
              <Link
                key={option.title}
                to={option.path}
                className="group bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-all duration-200 hover:border-blue-300"
              >
                <div className="flex flex-col items-center text-center space-y-4">
                  <div
                    className={`w-12 h-12 ${option.color} rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-200`}
                  >
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                      {option.title}
                    </h3>
                    <p className="text-sm text-gray-600 mt-1">
                      {option.description}
                    </p>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </DashboardLayout>
  );
}
