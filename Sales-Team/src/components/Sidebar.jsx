import React, { useState } from 'react';
import {
  Grid, Calculator, Search, Users, CreditCard, RefreshCw,
  Edit, FileText, Settings, User, LogOut
} from 'lucide-react';


const Sidebar = ({ activeMenu, setActiveMenu, isMobileMenuOpen, setIsMobileMenuOpen }) => {
  const [setupExpanded, setSetupExpanded] = useState(false);

  const handleMenuItemClick = (label) => {
    setActiveMenu(label);
    setIsMobileMenuOpen(false);
  };

  const menuItems = [
    { icon: <Grid size={20} />, label: 'Dashboard', hasBottomSeparator: false },
    { icon: <Calculator size={20} />, label: 'EMI Calculator', hasBottomSeparator: false },
    { icon: <Search size={20} />, label: 'Search', hasBottomSeparator: false },
    { icon: <Users size={20} />, label: 'Entries', hasBottomSeparator: false },
    { icon: <CreditCard size={20} />, label: 'Transactions', hasBottomSeparator: false },
    { icon: <RefreshCw size={20} />, label: 'Updates', hasBottomSeparator: false },
    { icon: <Edit size={20} />, label: 'Edits', hasBottomSeparator: false },
    { icon: <FileText size={20} />, label: 'Reports', hasNotification: true, hasBottomSeparator: false },
    { icon: <Settings size={20} />, label: 'Setup', hasDropdown: true, hasBottomSeparator: false },
    { icon: <User size={20} />, label: 'Accounts', hasNotification: true, hasBottomSeparator: false }
  ];

  const bottomMenuItems = [
    { icon: <Settings size={20} />, label: 'Settings', hasBottomSeparator: false },
    { icon: <LogOut size={20} />, label: 'Logout', hasBottomSeparator: false }
  ];

  return (
    <div className={`sidebar ${isMobileMenuOpen ? 'sidebar-open' : ''}`}>
      <div className="sidebar-header">
        <div className="logo-container">
          <img
            src="/src/assets/logo.png"
            alt="Fyneauto Logo"
            className="logo-img"
          />
        </div>
      </div>

      <nav className="sidebar-nav">
        <div className="menu-top">
          {menuItems.map((item, index) => (
            <div
              key={index}
              className={`nav-item ${activeMenu === item.label ? 'nav-item-active' : ''}`}
              onClick={() => handleMenuItemClick(item.label)}
            >
              <span className="nav-icon">{item.icon}</span>
              <span className="nav-label">{item.label}</span>
              {item.hasNotification && <span className="notification-dot"></span>}
              {item.hasDropdown && <span className="dropdown-arrow">^</span>}
            </div>
          ))}
        </div>

        <div className="menu-bottom">
          {bottomMenuItems.map((item, index) => (
            <div
              key={index + 10}
              className={`nav-item ${activeMenu === item.label ? 'nav-item-active' : ''}`}
              onClick={() => handleMenuItemClick(item.label)}
            >
              <span className="nav-icon">{item.icon}</span>
              <span className="nav-label">{item.label}</span>
            </div>
          ))}
        </div>
      </nav>
    </div>
  );
};

export default Sidebar;