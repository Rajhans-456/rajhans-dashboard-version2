import React, { useState, useEffect } from "react";
import Sidebar from "./Sidebar";
import "./SuccessPopup.css";

const SuccessPopup = () => {
  const [sidebarActive, setSidebarActive] = useState(false);
  const [activeMenu, setActiveMenu] = useState("updates");
  const [isMobile, setIsMobile] = useState(false);
  const [showPopup, setShowPopup] = useState(true);

  const handleOverlayClick = () => {
    if (isMobile) setSidebarActive(false);
  };

  const handleMenuNavigation = (menuId) => {
    setActiveMenu(menuId);
    if (window.innerWidth <= 768) setSidebarActive(false);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth <= 768);
      if (window.innerWidth > 768) setSidebarActive(false);
    };
    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  useEffect(() => {
    let touchStartX = 0;
    let touchEndX = 0;

    const handleTouchStart = (e) => {
      touchStartX = e.changedTouches[0].screenX;
    };

    const handleTouchEnd = (e) => {
      touchEndX = e.changedTouches[0].screenX;
      const swipeDistance = touchEndX - touchStartX;
      const threshold = 50;

      if (isMobile) {
        if (swipeDistance > threshold) setSidebarActive(true);
        else if (swipeDistance < -threshold) setSidebarActive(false);
      }
    };

    document.addEventListener("touchstart", handleTouchStart);
    document.addEventListener("touchend", handleTouchEnd);
    return () => {
      document.removeEventListener("touchstart", handleTouchStart);
      document.removeEventListener("touchend", handleTouchEnd);
    };
  }, [isMobile]);

  return (
    <div className="dashboard-container">
      {isMobile && (
        <button
          className="mobile-toggle"
          onClick={() => setSidebarActive(!sidebarActive)}
        >
          ☰
        </button>
      )}

      <Sidebar
        isActive={sidebarActive}
        onToggle={() => setSidebarActive(!sidebarActive)}
        onMenuClick={handleMenuNavigation}
        activeMenu={activeMenu}
      />

      {isMobile && sidebarActive && (
        <div className="sidebar-overlay active" onClick={handleOverlayClick} />
      )}

      <div className="main-content">
        {showPopup && (
          <div className="popup-overlay">
            <div className="popup-box">
              <div className="popup-icon emoji">✅</div>
              <h2>Success</h2>
              <p>No loan accounts requiring PDC update.</p>
              <button onClick={handleClosePopup}>OK</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SuccessPopup;
