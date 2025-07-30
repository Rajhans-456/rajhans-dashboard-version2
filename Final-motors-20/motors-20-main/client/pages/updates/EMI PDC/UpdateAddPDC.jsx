import React, { useState, useEffect } from "react";
import DashboardLayout from "@/components/layout/DashboardLayout";
import "../../../style/UpdateAddPDC.css";

const UpdateAddPDC = () => {
  const [sidebarActive, setSidebarActive] = useState(false);
  const [activeMenu, setActiveMenu] = useState("updates");
  const [selectedPage, setSelectedPage] = useState("updates");
  const [currentPage, setCurrentPage] = useState(1);
  const [isMobile, setIsMobile] = useState(false);
  const [pdcGiven, setPdcGiven] = useState(false);
  const [formData, setFormData] = useState({
    customerName: "",
    customerId: "",
    internalAcNo: "",
    extAcNo: "",
    disbursalDate: "",
    ledgerFolio: "",
    loanAmount: "",
    NoOfEMI: "",
    EMIsLeft: "",
    lastEMIDate:"",
    setPdcGiven:"",
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
    internalAcNo: "",
    extAcNo: "",
    disbursalDate: "",
    ledgerFolio: "",
    loanAmount: "",
    NoOfEMI: "",
    EMIsLeft: "",
    lastEMIDate:"",
    setPdcGiven:"",
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

  return (
    <DashboardLayout>
    <div className="dashboard-container">
      

      {/* Main Content */}
      <div className="main-content">

        {/* Form Container */}
        <div className="form-container">
          <div className="form-header">
            <h2>Add PDC</h2>
          </div>

          <div className="form-content">
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

              <div className="form-group">
                <label className="form-label">Internal Ac No:</label>
                <select
                  name="internalAcNo"
                  value={formData.internalAcNo}
                  onChange={handleInputChange}
                  className="form-select"
                >
                  <option value="">Select Account No.</option>
                  <option value="loan1">Account 1</option>
                  <option value="loan2">Account 2</option>
                  <option value="loan3">Account 3</option>
                </select>
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label className="form-label">Customer ID :</label>
                <input
                  type="text"
                  name="customerId"
                  value={formData.customerId}
                  onChange={handleInputChange}
                  className="form-input"
                />
              </div>

              <div className="form-group">
                <label className="form-label">Ext Ac No:</label>
                <input
                  type="text"
                  name="extAcNo"
                  value={formData.extAcNo}
                  onChange={handleInputChange}
                  className="form-input"
                />
              </div>
            </div>
            <div className="form-row">
              <div className="form-group">
                <label className="form-label">Disbursal Date:</label>
                <input
                  type="text"
                  name="disbursalDate"
                  value={formData.disbursalDate}
                  onChange={handleInputChange}
                  className="form-input"
                />
              </div>

              <div className="form-group">
                <label className="form-label">ledger Folio:</label>
                <input
                  type="text"
                  name="ledgerFolio"
                  value={formData.ledgerFolio}
                  onChange={handleInputChange}
                  className="form-input"
                />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label className="form-label">Loan Amount:</label>
                <input
                  type="text"
                  name="loanAmount"
                  value={formData.loanAmount}
                  onChange={handleInputChange}
                  className="form-input"
                />
              </div>

              <div className="form-group">
                <label className="form-label">No. Of EMIs:</label>
                <input
                  type="text"
                  name="NoOfEMI"
                  value={formData.NoOfEMI}
                  onChange={handleInputChange}
                  className="form-input"
                />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label className="form-label">EMIs Left:</label>
                <input
                  type="text"
                  name="EMIsLeft"
                  value={formData.EMIsLeft}
                  onChange={handleInputChange}
                  className="form-input"
                />
              </div>

              <div className="form-group">
                <label className="form-label">Last EMI Date:</label>
                <input
                  type="text"
                  name="lastExtEMIDate"
                  value={formData.lastExtEMIDate}
                  onChange={handleInputChange}
                  className="form-input"
                  placeholder="DD-MM-YYYY"
                />
              </div>
            </div>

            <div className="form-row">
              <div className="checkbox-field">
                <label className="calc-label">PDC Given ?</label>
                <div className="checkbox-container">
                  <input
                    type="checkbox"
                    checked={pdcGiven}
                    onChange={(e) => setPdcGiven(e.target.checked)}
                    className="checkbox"
                  />
                </div>
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
    </DashboardLayout>
  );
};

export default UpdateAddPDC;

    
