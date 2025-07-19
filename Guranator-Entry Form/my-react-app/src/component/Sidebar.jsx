import React, { useState } from "react";

const Sidebar = ({ isActive, onToggle, onMenuClick, activeMenu }) => {
  const menuItems = [
     { id: "Dashboard", label: "Dashboard", icon: "/assets/images/dashboard.svg" },
  { id: "EMI Calculator", label: "EMI Calculator", icon: "/assets/images/emicalculator.svg" },
  { id: "Search", label: "Search", icon: "/assets/images/search.png" },
  { id: "Entries", label: "Entries", icon: "/assets/images/entries.svg" },
  { id: "Transactions", label: "Transactions", icon: "/assets/images/Transactions.svg" },
  { id: "Updates", label: "Updates", icon: "/assets/images/updates.svg" },
  { id: "Edits", label: "Edits", icon: "/assets/images/edits.svg" },
  { id: "Reports", label: "Reports", icon: "/assets/images/reports.svg" },
  { id: "Setup", label: "Setup", icon: "/assets/images/setup.png" },
  { id: "Account", label: "Account", icon: "/assets/images/accounts.png" },
  ];

  const bottomMenuItems = [
    { id: "settings", label: "Settings",icon: "/assets/images/setting.svg"  },
    { id: "logout", label: "Logout", icon: "/assets/images/logout.png" },
  ];

  const handleMenuClick = (menuId) => {
    if (menuId === "logout") {
      if (window.confirm("Are you sure you want to logout?")) {
        alert("Logged out successfully!");
      }
      return;
    }
    onMenuClick(menuId);
  };

  return (
    <>
      <div
        className={`sidebar-overlay ${isActive ? "active" : ""}`}
        onClick={onToggle}
      ></div>
      <div className={`sidebar ${isActive ? "active" : ""}`}>
        <div className="sidebar-header">
          <img src="assets/images/logo.png" alt="Logo" className="logo-img" />
          <div className="back-button">←</div>
        </div>

        <div className="menu-section">
  {menuItems.map((item) => (
    <div
      key={item.id}
      className={`menu-item ${activeMenu === item.id ? "active" : ""}`}
      onClick={() => handleMenuClick(item.id)}
    >
      <img
        src={item.icon}
        alt={item.label}
        style={{ width: "24px", height: "24px", marginRight: "8px" }}
      />
      <span>{item.label}</span>
    </div>
  ))}
</div>


        <div className="bottom-menu">
  {bottomMenuItems.map((item) => (
    <div
      key={item.id}
      className={`menu-item ${activeMenu === item.id ? "active" : ""}`}
      onClick={() => handleMenuClick(item.id)}
    >
      <img
        src={item.icon}
        alt={item.label}
        style={{ width: "24px", height: "24px", marginRight: "8px" }}
      />
      <span>{item.label}</span>
    </div>
  ))}
</div>

      </div>
    </>
  );
};

export default Sidebar;
