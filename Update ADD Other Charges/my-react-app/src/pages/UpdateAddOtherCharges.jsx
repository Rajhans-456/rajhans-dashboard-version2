import React, { useState, useEffect } from "react";
import Sidebar from "./Sidebar";
import "./UpdateAddOtherCharges.css";

const UpdateAddOtherCharges = () => {
  const [sidebarActive, setSidebarActive] = useState(false);
  const [activeMenu, setActiveMenu] = useState("updates");
  const [selectedPage, setSelectedPage] = useState("updates");
  const [currentPage, setCurrentPage] = useState(1);
  const [isMobile, setIsMobile] = useState(false);
  const [searchButtonText, setSearchButtonText] = useState("Search Customer");
  const [searchButtonClass, setSearchButtonClass] = useState("");
  const [customerName, setCustomerName] = useState("");
  const [formData, setFormData] = useState({
    customerName: "",
    customerId: "",
    loanAcNo: "",
    extAcNo: "",
    vehRegnNo: "",
    loanDate: "",
    firstEMIDate: "",
    firstExtEMIDate: "",
    extPartyName: "",
  });

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSave = () => {
    console.log("Form data saved:", formData);
    alert("Data saved successfully!");
  };

  const handleClearAll = () => {
    if (window.confirm("Are you sure you want to clear all data?")) {
      setFormData({
        customerName: "",
        customerId: "",
        loanAcNo: "",
        extAcNo: "",
        vehRegnNo: "",
        loanDate: "",
        firstEMIDate: "",
        firstExtEMIDate: "",
        extPartyName: "",
      });
    }
  };

  
  // Responsive breakpoint detection
  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth <= 768);
      if (window.innerWidth > 768) {
        setSidebarActive(false);
      }
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  // Touch gesture support
  useEffect(() => {
    let touchStartX = 0;
    let touchEndX = 0;

    const handleTouchStart = (e) => {
      touchStartX = e.changedTouches[0].screenX;
    };

    const handleTouchEnd = (e) => {
      touchEndX = e.changedTouches[0].screenX;
      handleSwipe();
    };

    const handleSwipe = () => {
      if (window.innerWidth <= 768) {
        const swipeThreshold = 50;
        const swipeDistance = touchEndX - touchStartX;

        if (swipeDistance > swipeThreshold) {
          setSidebarActive(true);
        } else if (swipeDistance < -swipeThreshold) {
          setSidebarActive(false);
        }
      }
    };

    document.addEventListener("touchstart", handleTouchStart);
    document.addEventListener("touchend", handleTouchEnd);

    return () => {
      document.removeEventListener("touchstart", handleTouchStart);
      document.removeEventListener("touchend", handleTouchEnd);
    };
  }, []);

  // Close sidebar when clicking outside on mobile
  const handleOverlayClick = () => {
    if (isMobile) {
      setSidebarActive(false);
    }
  };

    // Handle menu navigation
  const handleMenuNavigation = (menuId) => {
    setActiveMenu(menuId);
    setSelectedPage(menuId);

    // Close sidebar on mobile after navigation
    if (window.innerWidth <= 768) {
      setSidebarActive(false);
    }
  };
  const searchCustomer = () => {
    if (customerName.trim()) {
    
      const originalText = searchButtonText;
      setSearchButtonText("Customer Found ✓");
      setSearchButtonClass("success");

      setTimeout(() => {
        setSearchButtonText(originalText);
        setSearchButtonClass("");
      }, 2000);
    } else {
      alert("Please enter customer name to search");
    }
  };

  return (
    <div className="dashboard-container">
      {/* Mobile Toggle Button */}
      {isMobile && (
        <button
          className="mobile-toggle"
          onClick={() => setSidebarActive(!sidebarActive)}
          aria-label="Toggle sidebar"
        >
          ☰
        </button>
      )}

      {/* Sidebar */}
      <Sidebar
        isActive={sidebarActive}
        onToggle={() => setSidebarActive(!sidebarActive)}
        onMenuClick={handleMenuNavigation}
        activeMenu={activeMenu}
      />

      {/* Sidebar Overlay for mobile */}
      {isMobile && sidebarActive && (
        <div
          className="sidebar-overlay active"
          onClick={handleOverlayClick}
          aria-hidden="true"
        />
      )}

      {/* Main Content */}
      <div className="main-content">

        {/* Form Container */}
        <div className="form-container">
          <div className="form-header">
            <h2>Add Other Charges</h2>
            <button
              onClick={searchCustomer}
              className={`search-button ${searchButtonClass}`}
            >
              {searchButtonText}
            </button>
          </div>

          <div className="form-content">
            <div className="form-row">
              <div className="form-group">
                <label className="form-label">Loan Ac No:</label>
                <select
                  name="loanAcNo"
                  value={formData.loanAcNo}
                  onChange={handleInputChange}
                  className="form-select"
                >
                  <option value="">Select Loan Account No.</option>
                  <option value="loan1">Loan Account 1</option>
                  <option value="loan2">Loan Account 2</option>
                  <option value="loan3">Loan Account 3</option>
                </select>
              </div>
            </div>
            <div className="form-row">
              <div className="form-group">
                <label className="form-label">Customer Name :</label>
                <input
                  type="text"
                  name="customerName"
                  value={formData.customerName}
                  onChange={handleInputChange}
                  className="form-input"
                />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label className="form-label">Charge type</label>
                <input
                  type="text"
                  name="chargeType"
                  value={formData.chargeType}
                  onChange={handleInputChange}
                  className="form-input"
                />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label className="form-label">Amount</label>
                <input
                  type="text"
                  name="amount"
                  value={formData.amount}
                  onChange={handleInputChange}
                  className="form-input"
                />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label className="form-label">Remarks</label>
                <input
                  type="text"
                  name="remarks"
                  value={formData.remarks}
                  onChange={handleInputChange}
                  className="form-input1"
                />
              </div>
            </div>

            <div className="form-actions">
              <button className="btn btn-primary" onClick={handleSave}>
                SAVE
              </button>
              <button className="btn btn-secondary" onClick={handleClearAll}>
                Clear All
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateAddOtherCharges;

    
