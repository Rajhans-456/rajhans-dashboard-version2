import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import {
  LayoutDashboard,
  Calculator,
  Search,
  FileText,
  CreditCard,
  RefreshCw,
  Edit,
  BarChart3,
  Settings,
  Users,
  LogOut,
  ChevronDown,
  ChevronRight,
} from "lucide-react";

const sidebarItems = [
  { name: "Dashboard", path: "/", icon: LayoutDashboard },
  { name: "EMI Calculator", path: "/emi-calculator", icon: Calculator },
  { name: "Search", path: "/search", icon: Search },
  { name: "Entries", path: "/entries", icon: FileText },
  { name: "Transactions", path: "/transactions", icon: CreditCard },
];

const updatesItems = [
  { name: "Update Customer", path: "/updates/customer" },
  { name: "Update Loan", path: "/updates/loan" },
  { name: "Update Vehicle", path: "/updates/vehicle" },
];

const editItems = [
  { name: "EDIT CUSTOMER", path: "/edits/customer" },
  { name: "EDIT CO-BORROWER", path: "/edits/co-borrower" },
  { name: "EDIT GUARANTOR", path: "/edits/guarantor" },
  { name: "EDIT LOAN", path: "/edits/loan" },
  { name: "RESTRUCTURE LOAN", path: "/edits/restructure-loan" },
  { name: "EDIT VEHICLE", path: "/edits/vehicle" },
  { name: "CHANGE GUARANTOR", path: "/edits/change-guarantor" },
  { name: "CHANGE HP", path: "/edits/change-hp" },
  { name: "CHANGE EMI DATE", path: "/edits/change-emi-date" },
  { name: "EDIT EXT AC NO", path: "/edits/edit-ext-ac-no" },
]; 
const setupSystemItems = [
  { name: "Update OD Loans", path: "/setup/update-od-loans" },
  { name: "External Resources",
    children:[
{ name: "Sales Team", path: "/setup/sales-team" },
  { name: "Sales Agents", path: "/setup/sales-agents" },
  { name: "Registration Agents", path: "/setup/registration-agents" },
  { name: "Collection Agents", path: "/setup/collection-agents" },
  { name: "Collection Area", path: "/setup/collection-area" },
  { name: "Dealers", path: "/setup/dealers" },
    ],
  },
  { name: "Users", path: "/setup/users" },
];


const reportsItems = [
  {
    name: "EMI Related",
    children: [
      { name: "EMI Due Report", path: "/reports/emidue" },
      { name: "EMI History", path: "/reports/emihistory" },
      { name: "Receipt History", path: "/reports/receipthistory" },
      { name: "Loan Ledger", path: "/reports/loanledger" },
      { name: "EMI Expected", path: "/reports/emiexpected" },
      { name: "EMI Schedule", path: "/reports/emischedule" },
      { name: "Chq. Return Report", path: "/reports/chequereturn" },
    ],
  },
  {
    name: "Loan Related",
    children: [
      { name: "Customer W/O Loan", path: "/reports/customerwithoutloan" },
      { name: "Loan AC Statement", path: "/reports/loanacstatement" },
      { name: "First / Last EMI Report", path: "/reports/firstlastemi" },
      { name: "Loans Given", path: "/reports/loansgiven" },
      { name: "Loan Status Report", path: "/reports/loanstatus" },
      { name: "LCC Report", path: "/reports/lccreport" },
      { name: "Bucket List", path: "/reports/bucketlist" },
      { name: "Overdue Loans", path: "/reports/overdueloans" },
      { name: "Recalled Loans", path: "/reports/recalledloans" },
    ],
  },
  {
    name: "Vehicle Related",
    children: [
      { name: "Vehicles Delivered", path: "/reports/vehiclesdelivered" },
      { name: "Dealer-Wise Vehicle", path: "/reports/dealerwisevehicle" },
      { name: "Dealer Payment Due", path: "/reports/dealerpaymentdue" },
      { name: "Dealer Payment Report", path: "/reports/dealerpaymentreport" },
      { name: "Insurance Due Report", path: "/reports/insurancedue" },
      { name: "Vehicles in Possession", path: "/reports/vehiclesinpossession" },
    ],
  },
  {
    name: "Misc. Reports",
    children: [
      { name: "Collection Ag. Loan Count", path: "/reports/collectionagentloancount" },
      { name: "Customer W/O Coll. Area", path: "/reports/customernocollectionarea" },
      { name: "Customer List", path: "/reports/customerlist" },
      { name: "Dealer List", path: "/reports/dealerlist" },
    ],
  },
];


export default function Sidebar() {
  const location = useLocation();
  const [openDropdowns, setOpenDropdowns] = useState([]);

  const toggleDropdown = (dropdownName) => {
    setOpenDropdowns((prev) =>
      prev.includes(dropdownName)
        ? prev.filter((name) => name !== dropdownName)
        : [...prev, dropdownName],
    );
  };

  const isDropdownOpen = (dropdownName) => openDropdowns.includes(dropdownName);

  const isEditPageActive = location.pathname.startsWith("/edits");
  const isUpdatesPageActive = location.pathname.startsWith("/updates");
  const isReportsPageActive = location.pathname.startsWith("/reports");

  return (
    <div className="w-64 bg-white h-screen shadow-sm border-r border-gray-200 flex flex-col hidden lg:flex">
      {/* Logo */}
      <div className="p-6 border-b border-gray-200">
        <div className="flex items-center space-x-2">
          <img
            src="https://cdn.builder.io/api/v1/image/assets%2F2f7586ff9e01429985c3cdd0be5b530e%2Fbbc1714c8c5e4bfe8026b78b72010f9b?format=webp&width=800"
            alt="FYNEAUTO Logo"
            className="h-8 w-auto"
          />
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4 overflow-y-auto">
        <div className="space-y-1">
          {/* Regular menu items */}
          {sidebarItems.map((item) => {
            const Icon = item.icon;
            const isActive =
              location.pathname === item.path ||
              (item.path === "/search" &&
                location.pathname.startsWith("/search"));

            return (
              <Link
                key={item.name}
                to={item.path}
                className={cn(
                  "flex items-center space-x-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors",
                  isActive
                    ? "bg-primary text-white"
                    : "text-gray-700 hover:bg-gray-100",
                )}
              >
                <Icon className="w-5 h-5" />
                <span>{item.name}</span>
              </Link>
            );
          })}

          {/* Updates Dropdown */}
          <div>
            <button
              onClick={() => toggleDropdown("updates")}
              className={cn(
                "w-full flex items-center justify-between px-3 py-2 rounded-lg text-sm font-medium transition-colors",
                isUpdatesPageActive
                  ? "bg-primary text-white"
                  : "text-gray-700 hover:bg-gray-100",
              )}
            >
              <div className="flex items-center space-x-3">
                <RefreshCw className="w-5 h-5" />
                <span>UPDATES</span>
              </div>
              {isDropdownOpen("updates") ? (
                <ChevronDown className="w-4 h-4" />
              ) : (
                <ChevronRight className="w-4 h-4" />
              )}
            </button>
            {isDropdownOpen("updates") && (
              <div className="ml-6 mt-1 space-y-1">
                {updatesItems.map((item) => (
                  <Link
                    key={item.name}
                    to={item.path}
                    className={cn(
                      "block px-3 py-2 text-sm text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded",
                      location.pathname === item.path &&
                        "text-primary bg-blue-50",
                    )}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Edit Dropdown */}
          <div>
            <button
              onClick={() => toggleDropdown("edit")}
              className={cn(
                "w-full flex items-center justify-between px-3 py-2 rounded-lg text-sm font-medium transition-colors",
                isEditPageActive
                  ? "bg-primary text-white"
                  : "text-gray-700 hover:bg-gray-100",
              )}
            >
              <div className="flex items-center space-x-3">
                <Edit className="w-5 h-5" />
                <span>EDIT</span>
              </div>
              {isDropdownOpen("edit") ? (
                <ChevronDown className="w-4 h-4" />
              ) : (
                <ChevronRight className="w-4 h-4" />
              )}
            </button>
            {isDropdownOpen("edit") && (
              <div className="ml-6 mt-1 space-y-1">
                {editItems.map((item) => (
                  <Link
                    key={item.name}
                    to={item.path}
                    className={cn(
                      "block px-3 py-2 text-sm text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded",
                      location.pathname === item.path &&
                        "text-primary bg-blue-50",
                    )}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            )}
          </div>

{/* Reports Dropdown with Nested Menus */}
<div>
  <button
    onClick={() => toggleDropdown("reports")}
    className={cn(
      "w-full flex items-center justify-between px-3 py-2 rounded-lg text-sm font-medium transition-colors",
      isReportsPageActive ? "bg-primary text-white" : "text-gray-700 hover:bg-gray-100",
    )}
  >
    <div className="flex items-center space-x-3">
      <BarChart3 className="w-5 h-5" />
      <span>Reports</span>
    </div>
    {isDropdownOpen("reports") ? (
      <ChevronDown className="w-4 h-4" />
    ) : (
      <ChevronRight className="w-4 h-4" />
    )}
  </button>

  {isDropdownOpen("reports") && (
    <div className="ml-4 mt-1 space-y-1">
      {reportsItems.map((group) => (
        <div key={group.name}>
          <button
            onClick={() => toggleDropdown(group.name)}
            className="flex justify-between w-full text-left text-sm font-semibold text-gray-700 hover:bg-gray-100 px-3 py-2 rounded"
          >
            <span>{group.name}</span>
            {isDropdownOpen(group.name) ? (
              <ChevronDown className="w-4 h-4" />
            ) : (
              <ChevronRight className="w-4 h-4" />
            )}
          </button>

          {isDropdownOpen(group.name) && (
            <div className="ml-4 mt-1 space-y-1">
              {group.children.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={cn(
                    "block px-3 py-2 text-sm text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded",
                    location.pathname === item.path && "text-primary bg-blue-50"
                  )}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  )}
</div>


          {/* Setup and Accounts */}

{/* Setup System Dropdown */}
<div>
  <button
    onClick={() => toggleDropdown("setupSystem")}
    className={cn(
      "w-full flex items-center justify-between px-3 py-2 rounded-lg text-sm font-medium transition-colors",
      location.pathname.startsWith("/setup") ? "bg-primary text-white" : "text-gray-700 hover:bg-gray-100",
    )}
  >
    <div className="flex items-center space-x-3">
      <Settings className="w-5 h-5" />
      <span>Setup System</span>
    </div>
    {isDropdownOpen("setupSystem") ? (
      <ChevronDown className="w-4 h-4" />
    ) : (
      <ChevronRight className="w-4 h-4" />
    )}
  </button>

  {isDropdownOpen("setupSystem") && (
    <div className="ml-6 mt-1 space-y-1">
      {setupSystemItems.map((item) =>
        item.children ? (
          <div key={item.name}>
            <button
              onClick={() => toggleDropdown(item.name)}
              className="flex justify-between w-full text-left text-sm font-semibold text-gray-700 hover:bg-gray-100 px-3 py-2 rounded"
            >
              <span>{item.name}</span>
              {isDropdownOpen(item.name) ? (
                <ChevronDown className="w-4 h-4" />
              ) : (
                <ChevronRight className="w-4 h-4" />
              )}
            </button>
            {isDropdownOpen(item.name) && (
              <div className="ml-4 mt-1 space-y-1">
                {item.children.map((child) => (
                  <Link
                    key={child.name}
                    to={child.path}
                    className={cn(
                      "block px-3 py-2 text-sm text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded",
                      location.pathname === child.path && "text-primary bg-blue-50"
                    )}
                  >
                    {child.name}
                  </Link>
                ))}
              </div>
            )}
          </div>
        ) : (
          <Link
            key={item.name}
            to={item.path}
            className={cn(
              "block px-3 py-2 text-sm text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded",
              location.pathname === item.path && "text-primary bg-blue-50"
            )}
          >
            {item.name}
          </Link>
        )
      )}
    </div>
  )}
</div>



          <Link
            to="/accounts"
            className={cn(
              "flex items-center space-x-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors",
              location.pathname === "/accounts"
                ? "bg-primary text-white"
                : "text-gray-700 hover:bg-gray-100",
            )}
          >
            <Users className="w-5 h-5" />
            <span>Accounts</span>
            <span className="ml-auto w-2 h-2 bg-red-500 rounded-full"></span>
          </Link>
        </div>
      </nav>

      {/* Settings and Logout */}
      <div className="p-4 border-t border-gray-200">
        <div className="space-y-1">
          <Link
            to="/settings"
            className="flex items-center space-x-3 px-3 py-2 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-100 transition-colors"
          >
            <Settings className="w-5 h-5" />
            <span>Settings</span>
          </Link>
          <button className="w-full flex items-center space-x-3 px-3 py-2 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-100 transition-colors">
            <LogOut className="w-5 h-5" />
            <span>Logout</span>
          </button>
        </div>
      </div>
    </div>
  );
}
