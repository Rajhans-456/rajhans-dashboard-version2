import React, { useState, useEffect } from 'react';
import './app.css';
import logo from './assets/Logo.png';

const App = () => {
  const [activeMenuItem, setActiveMenuItem] = useState('Search');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [dealerData, setDealerData] = useState({
    dealerId: 'ST0005',
    dealerName: '',
    dealerType: 'Select Dealer',
    dealerFor: '',
    state: 'Select',
    contactPerson: '',
    email: '',
    phone1: '',
    phone2: '',
    city: '',
    subventionAmt: ''
  });

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isMobileMenuOpen && !event.target.closest('.sidebar') && !event.target.closest('.menu-toggle')) {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMobileMenuOpen]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  const handleInputChange = (field, value) => {
    setDealerData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSave = () => {
    console.log('Saving dealer data:', dealerData);
    // Add your save logic here
  };

  const handleCancel = () => {
    setDealerData({
      dealerId: 'ST0005',
      dealerName: '',
      dealerType: 'Select Dealer',
      dealerFor: '',
      state: 'Select',
      contactPerson: '',
      email: '',
      phone1: '',
      phone2: '',
      city: '',
      subventionAmt: ''
    });
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleMenuItemClick = (label) => {
    setActiveMenuItem(label);
    setIsMobileMenuOpen(false);
  };

  const menuItems = [
    { icon: 'dashboard', label: 'Dashboard', hasBottomSeparator: false },
    { icon: 'calculator', label: 'EMI Calculator', hasBottomSeparator: false },
    { icon: 'search', label: 'Search', hasBottomSeparator: false },
    { icon: 'people', label: 'Entries', hasBottomSeparator: false },
    { icon: 'credit-card', label: 'Transactions', hasBottomSeparator: false },
    { icon: 'refresh-cw', label: 'Updates', hasBottomSeparator: false },
    { icon: 'edit', label: 'Edits', hasBottomSeparator: false },
    { icon: 'file-text', label: 'Reports', hasNotification: true, hasBottomSeparator: false },
    { icon: 'settings', label: 'Setup', hasDropdown: true, hasBottomSeparator: false },
    { icon: 'user', label: 'Accounts', hasNotification: true, hasBottomSeparator: false },
    { icon: 'settings', label: 'Settings', hasBottomSeparator: false, hasTopSeparator: true },
    { icon: 'log-out', label: 'Logout', hasBottomSeparator: false }
  ];

  const renderIcon = (iconType) => {
    const iconProps = {
      width: "20",
      height: "20",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    };

    switch (iconType) {
      case 'dashboard':
        return (
          <svg {...iconProps}>
            <rect x="3" y="3" width="7" height="7"></rect>
            <rect x="14" y="3" width="7" height="7"></rect>
            <rect x="14" y="14" width="7" height="7"></rect>
            <rect x="3" y="14" width="7" height="7"></rect>
          </svg>
        );
      case 'calculator':
        return (
          <svg {...iconProps}>
            <rect x="4" y="2" width="16" height="20" rx="2"></rect>
            <line x1="8" y1="6" x2="16" y2="6"></line>
            <line x1="16" y1="10" x2="8" y2="10"></line>
            <line x1="8" y1="14" x2="16" y2="14"></line>
            <line x1="8" y1="18" x2="12" y2="18"></line>
            <line x1="16" y1="18" x2="16" y2="18"></line>
          </svg>
        );
      case 'search':
        return (
          <svg {...iconProps}>
            <circle cx="11" cy="11" r="8"></circle>
            <path d="m21 21-4.35-4.35"></path>
          </svg>
        );
      case 'people':
        return (
          <svg {...iconProps}>
            <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
            <circle cx="9" cy="7" r="4"></circle>
            <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
            <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
          </svg>
        );
      case 'credit-card':
        return (
          <svg {...iconProps}>
            <rect x="1" y="4" width="22" height="16" rx="2" ry="2"></rect>
            <line x1="1" y1="10" x2="23" y2="10"></line>
          </svg>
        );
      case 'refresh-cw':
        return (
          <svg {...iconProps}>
            <polyline points="23,4 23,10 17,10"></polyline>
            <polyline points="1,20 1,14 7,14"></polyline>
            <path d="M20.49 9A9 9 0 0 0 5.64 5.64L1 10m22 4l-4.64 4.36A9 9 0 0 1 3.51 15"></path>
          </svg>
        );
      case 'edit':
        return (
          <svg {...iconProps}>
            <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
            <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
          </svg>
        );
      case 'file-text':
        return (
          <svg {...iconProps}>
            <path d="M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2M18,20H6V4H13V9H18V20Z"></path>
            <line x1="8" y1="12" x2="16" y2="12"></line>
            <line x1="8" y1="16" x2="16" y2="16"></line>
          </svg>
        );
      case 'settings':
        return (
          <svg {...iconProps}>
            <circle cx="12" cy="12" r="3"></circle>
            <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1 1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
          </svg>
        );
      case 'user':
        return (
          <svg {...iconProps}>
            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
            <circle cx="12" cy="7" r="4"></circle>
          </svg>
        );
      case 'log-out':
        return (
          <svg {...iconProps}>
            <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path>
            <polyline points="16,17 21,12 16,7"></polyline>
            <line x1="21" y1="12" x2="9" y2="12"></line>
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <div className="app-container">
      {/* Mobile Overlay */}
      {isMobileMenuOpen && (
        <div
          className="mobile-overlay"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div className={`sidebar ${isMobileMenuOpen ? 'sidebar-open' : ''}`}>
        <div className="sidebar-header">
          <div className="logo-container">
            <img
              src={logo}
              alt="Fyneauto Logo"
              className="logo-img"
            />
          </div>

        </div>

        <nav className="sidebar-nav">
          <div className="menu-top">
            {menuItems.slice(0, 10).map((item, index) => (
              <div
                key={index}
                className={`nav-item ${activeMenuItem === item.label ? 'nav-item-active' : ''}`}
                onClick={() => handleMenuItemClick(item.label)}
              >
                <span className="nav-icon">{renderIcon(item.icon)}</span>
                <span className="nav-label">{item.label}</span>
                {item.hasNotification && <span className="notification-dot"></span>}
                {item.hasDropdown && <span className="dropdown-arrow">‹</span>}
              </div>
            ))}
          </div>

          <div className="menu-bottom">
            {menuItems.slice(10).map((item, index) => (
              <div
                key={index + 10}
                className={`nav-item ${activeMenuItem === item.label ? 'nav-item-active' : ''}`}
                onClick={() => handleMenuItemClick(item.label)}
              >
                <span className="nav-icon">{renderIcon(item.icon)}</span>
                <span className="nav-label">{item.label}</span>
              </div>
            ))}
          </div>
        </nav>


      </div>

      {/* Main Content */}
      <div className="main-content">
        {/* Header */}
        <div className="header">
          <button
            className="menu-toggle"
            onClick={toggleMobileMenu}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
          </button>
          <div className="user-avatar">
            <img
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40' viewBox='0 0 40 40'%3E%3Ccircle cx='20' cy='20' r='20' fill='%23e0e0e0'/%3E%3Ccircle cx='20' cy='15' r='5' fill='%23999'/%3E%3Cpath d='M8 32c0-6.627 5.373-12 12-12s12 5.373 12 12' fill='%23999'/%3E%3C/svg%3E"
              alt="User"
            />
          </div>
        </div>

        {/* Content Area */}
        <div className="content-area">
          <div className="page-header">
            <h1 className="page-title">ADD /EDIT DEALER</h1>
          </div>

          <div className="dealer-form-container">
            <h2 className="form-title">Dealer Details</h2>

            <div className="form-grid">
              <div className="form-group">
                <label className="form-label">Dealer ID</label>
                <input
                  type="text"
                  className="form-input"
                  value={dealerData.dealerId}
                  onChange={(e) => handleInputChange('dealerId', e.target.value)}
                />
              </div>

              <div className="form-group">
                <label className="form-label">Select Dealer Type</label>
                <select
                  className="form-select"
                  value={dealerData.dealerType}
                  onChange={(e) => handleInputChange('dealerType', e.target.value)}
                >
                  <option>Select Dealer</option>
                  <option>Authorized Dealer</option>
                  <option>Franchise Dealer</option>
                  <option>Independent Dealer</option>
                </select>
              </div>

              <div className="form-group">
                <label className="form-label">Dealer Name</label>
                <input
                  type="text"
                  className="form-input"
                  value={dealerData.dealerName}
                  onChange={(e) => handleInputChange('dealerName', e.target.value)}
                />
              </div>

              <div className="form-group">
                <label className="form-label">Dealer For</label>
                <input
                  type="text"
                  className="form-input"
                  value={dealerData.dealerFor}
                  onChange={(e) => handleInputChange('dealerFor', e.target.value)}
                />
              </div>

              <div className="form-group">
                <label className="form-label">STATE</label>
                <select
                  className="form-select"
                  value={dealerData.state}
                  onChange={(e) => handleInputChange('state', e.target.value)}
                >
                  <option>Select</option>
                  <option>Andhra Pradesh</option>
                  <option>Arunachal Pradesh</option>
                  <option>Assam</option>
                  <option>Bihar</option>
                  <option>Chhattisgarh</option>
                  <option>Goa</option>
                  <option>Gujarat</option>
                  <option>Haryana</option>
                  <option>Himachal Pradesh</option>
                  <option>Jharkhand</option>
                  <option>Karnataka</option>
                  <option>Kerala</option>
                  <option>Madhya Pradesh</option>
                  <option>Maharashtra</option>
                  <option>Manipur</option>
                  <option>Meghalaya</option>
                  <option>Mizoram</option>
                  <option>Nagaland</option>
                  <option>Odisha</option>
                  <option>Punjab</option>
                  <option>Rajasthan</option>
                  <option>Sikkim</option>
                  <option>Tamil Nadu</option>
                  <option>Telangana</option>
                  <option>Tripura</option>
                  <option>Uttar Pradesh</option>
                  <option>Uttarakhand</option>
                  <option>West Bengal</option>
                  <option>Andaman and Nicobar Islands</option>
                  <option>Chandigarh</option>
                  <option>Dadra and Nagar Haveli and Daman and Diu</option>
                  <option>Delhi</option>
                  <option>Jammu and Kashmir</option>
                  <option>Ladakh</option>
                  <option>Lakshadweep</option>
                  <option>Puducherry</option>
                </select>
              </div>

              <div></div>
            </div>

            <div className="contact-section">
              <div className="contact-grid">
                <div className="form-group">
                  <label className="form-label">Contact Person</label>
                  <input
                    type="text"
                    className="form-input"
                    value={dealerData.contactPerson}
                    onChange={(e) => handleInputChange('contactPerson', e.target.value)}
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">Email</label>
                  <input
                    type="email"
                    className="form-input"
                    value={dealerData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">Phone 1</label>
                  <input
                    type="tel"
                    className="form-input"
                    value={dealerData.phone1}
                    onChange={(e) => handleInputChange('phone1', e.target.value)}
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">Phone 2</label>
                  <input
                    type="tel"
                    className="form-input"
                    value={dealerData.phone2}
                    onChange={(e) => handleInputChange('phone2', e.target.value)}
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">City</label>
                  <select
                    className="form-select"
                    value={dealerData.city}
                    onChange={(e) => handleInputChange('city', e.target.value)}
                  >
                    <option value="">Select City</option>
                    <option value="Mumbai">Mumbai</option>
                    <option value="Pune">Pune</option>
                    <option value="Bangalore">Bangalore</option>
                    <option value="Chennai">Chennai</option>
                    <option value="Delhi">Delhi</option>
                  </select>
                </div>

                <div className="form-group">
                  <label className="form-label">Subvention Amt.</label>
                  <input
                    type="number"
                    className="form-input"
                    value={dealerData.subventionAmt}
                    onChange={(e) => handleInputChange('subventionAmt', e.target.value)}
                  />
                </div>
              </div>
            </div>

            <div className="form-actions">
              <button
                className="btn-save"
                onClick={handleSave}
              >
                Save
              </button>
              <button
                className="btn-cancel"
                onClick={handleCancel}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;