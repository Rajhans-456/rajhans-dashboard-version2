import { useState } from "react";
import DashboardLayout from "@/components/layout/DashboardLayout";
import { Link, useNavigate } from "react-router-dom";

export default function Search() {
  const navigate = useNavigate();

  const searchOptions = [
    {
      title: "Search Customer",
      description: "Search for customer information",
      path: "/search/customer",
    },
    {
      title: "Search Guarantor",
      description: "Search for guarantor details",
      path: "/search/guarantor",
    },
    {
      title: "Search Receipt",
      description: "Search for receipt records",
      path: "/search/receipts",
    },
  ];

  return (
    <DashboardLayout>
      <div className="max-w-4xl mx-auto space-y-6">
        <div>
          <h1 className="text-2xl font-semibold text-gray-900">Search</h1>
          <p className="text-gray-600 mt-1">
            Choose a search type to get started
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {searchOptions.map((option) => (
            <div
              key={option.title}
              onClick={() => navigate(option.path)}
              className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow cursor-pointer"
            >
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {option.title}
              </h3>
              <p className="text-gray-600 text-sm">{option.description}</p>
            </div>
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
}
