import React, { useState, useEffect } from "react";
import DashboardLayout from "@/components/layout/DashboardLayout";
import "../../../style/UpdateSpoiledPDC.css";

const UpdateSpoiledPDC = () => {
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
  let count = 0;
    const counterEl = document.getElementById('counter');

    function increase() {
      count++;
      counterEl.textContent = count;
    }

    function decrease() {
      if (count > 0) {
        count--;
        counterEl.textContent = count;
      }
    }

  return (
    <DashboardLayout>
    <div className="dashboard-container">

      {/* Main Content */}
      <div className="main-content">

        {/* Form Container */}
        <div className="form-container">
          <div className="form-header">
            <h2>Update Spoiled PDC</h2>
            <button
              onClick={searchCustomer}
              className={`search-button ${searchButtonClass}`}
            >
              {searchButtonText}
            </button>
          </div>
          

          <div className="form-content">
            <hr style={{ border: "2px solid black", margin: "10px 0"}} />
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
                <label className="form-label">Customer ID :</label>
                <input
                  type="text"
                  name="customerId"
                  value={formData.customerId}
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
                <label className="form-label">Loan Amount:</label>
                <input
                  type="text"
                  name="loanAmount"
                  value={formData.loanAmount}
                  onChange={handleInputChange}
                  className="form-input"
                />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label className="form-label">Tenure In Mths:</label>
                <input
                  type="text"
                  name="tenureInMths"
                  value={formData.tenureInMths}
                  onChange={handleInputChange}
                  className="form-input"
                />
              </div>

              <div className="form-group">
                <label className="form-label">Last EMI Date:</label>
                <input
                  type="text"
                  name="lastEMIDate"
                  value={formData.lastEMIDate}
                  onChange={handleInputChange}
                  className="form-input"
                />
              </div>
            </div>

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

              <div className="form-group">
                <label className="form-label">Ext Ac No.:</label>
                <input
                  type="text"
                  name="ExtAcNo"
                  value={formData.ExtAcNo}
                  onChange={handleInputChange}
                  className="form-input"
                />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label className="form-label">Ledger No.:</label>
                <input
                  type="text"
                  name="ledgerNo"
                  value={formData.ledgerNo}
                  onChange={handleInputChange}
                  className="form-input"
                />
              </div>

              <div className="form-group">
                <label className="form-label">EMI Amount:</label>
                <input
                  type="text"
                  name="emiAmount"
                  value={formData.emiAmount}
                  onChange={handleInputChange}
                  className="form-input"
                />
              </div>
            </div>
            <div className="form-row">
              <div className="form-group">
                <label className="form-label">EMI Left:</label>
                <input
                  type="text"
                  name="emiLeft"
                  value={formData.emiLeft}
                  onChange={handleInputChange}
                  className="form-input"
                />
              </div>
              <div className="form-group form-group-empty"></div>
            </div>
            <hr style={{ border: "1px solid black", margin: "20px 0" }} />
            <div className="form-row">
             <div className="form-group">
              <label class="label">No. Of Spoiled PDC:</label>
            <div class="counter-container">
              <button class="counter-btn" onclick="decrease()">−</button>
              <span class="counter-value" id="counter">0</span>
              <button class="counter-btn" onclick="increase()">+</button>
              </div>
             </div>
            </div>
            <div className="form-row1">
              <div className="form-group">
                <label className="form-label">Reason:</label>
                <input
                  type="text"
                  name="reason"
                  value={formData.reason}
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
    </DashboardLayout>
  );
};

export default UpdateSpoiledPDC;

    
