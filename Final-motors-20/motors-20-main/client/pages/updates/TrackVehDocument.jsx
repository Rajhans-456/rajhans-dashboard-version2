import React, { useState, useEffect } from "react";
import DashboardLayout from "@/components/layout/DashboardLayout";
import "../../style/TrackVehDocument.css";

const TrackVehDocument = () => {
  const [sidebarActive, setSidebarActive] = useState(false);
  const [activeMenu, setActiveMenu] = useState("updates");
  const [selectedPage, setSelectedPage] = useState("updates");
  const [currentPage, setCurrentPage] = useState(1);
  const [isMobile, setIsMobile] = useState(false);
  const [formData, setFormData] = useState({
    searchBy: "",
    searchText: "",
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
        searchBy: "",
        searchText: "",
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
            <h2>Track/Update Vehicle Document</h2>
          </div>

          <div className="form-content">
            <div className="form-row">
              <div className="form-group">
                <label className="form-label">Search By :</label>
                <select
                  name="searchBy"
                  value={formData.searchBy}
                  onChange={handleInputChange}
                  className="form-select"
                >
                  <option value="">Regn No.</option>
                </select>
              </div>
                <div className="form-group">
                <label className="form-label">Search Text :</label>
                <input
                  type="text"
                  name="searchText"
                  value={formData.searchText}
                  onChange={handleInputChange}
                  className="form-input"
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

export default TrackVehDocument;

    
