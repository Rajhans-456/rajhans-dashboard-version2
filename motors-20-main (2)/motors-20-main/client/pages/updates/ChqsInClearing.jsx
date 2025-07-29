import React, { useState, useEffect } from "react";
import DashboardLayout from "@/components/layout/DashboardLayout";
import "../../style/UpdateRegnNO.css";

const ChqsInClearing = () => {
  const [sidebarActive, setSidebarActive] = useState(false);
  const [activeMenu, setActiveMenu] = useState("updates");
  const [selectedPage, setSelectedPage] = useState("updates");
  const [currentPage, setCurrentPage] = useState(1);
  const [isMobile, setIsMobile] = useState(false);

  // Filter state management
  const [filters, setFilters] = useState({
    loanType: "All",
    selectHP: "All",
    recordsPerPage: "50",
    page: "1",
    sortedBy: "Loan Amount",
    orderBy: "-------"
  });

  const tableHeaders = [
    "Sr",
    "Customer Name",
    "Receipt Dt",
    "Receipt No.",
    "Cheque No.",
    "Receipt Amount",
  ];

    const emptyRows = Array.from({ length: 15 }, (_, i) => i + 1);

  // Options for custom selects
  const loanTypeOptions = [
    { value: "All", label: "All" },
    { value: "Personal", label: "Personal" },
    { value: "Auto", label: "Auto" },
    { value: "Home", label: "Home" },
  ];

  const hpOptions = [
    { value: "All", label: "All" },
    { value: "HP1", label: "HP1" },
    { value: "HP2", label: "HP2" },
    { value: "HP3", label: "HP3" },
  ];

  const recordsPerPageOptions = [
    { value: "25", label: "25" },
    { value: "50", label: "50" },
    { value: "100", label: "100" },
    { value: "200", label: "200" },
  ];

  const pageOptions = [
    { value: "1", label: "1" },
    { value: "2", label: "2" },
    { value: "3", label: "3" },
    { value: "4", label: "4" },
    { value: "5", label: "5" },
  ];

  const sortedByOptions = [
    { value: "Loan Amount", label: "Loan Amount" },
    { value: "Customer Name", label: "Customer Name" },
    { value: "Date", label: "Date" },
    { value: "Status", label: "Status" },
  ];

  const orderByOptions = [
    { value: "-------", label: "-------" },
    { value: "Ascending", label: "Ascending" },
    { value: "Descending", label: "Descending" },
  ];

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

  // Handle filter changes
  const handleFilterChange = (filterName, value) => {
    setFilters(prev => ({
      ...prev,
      [filterName]: value
    }));

    // Handle specific filter actions
    if (filterName === 'page') {
      setCurrentPage(parseInt(value));
    }
  };

  return (
    <DashboardLayout>
    <div className="dashboard-container">

      {/* Main Content */}
      <div
        className={`main-content ${sidebarActive && isMobile ? "sidebar-open" : ""}`}
      >
        {/* Top Bar */}
         <div className="top-bar">
          <div className="top-bar-content">
             <h1 className="page-title">Cheques In Clearing</h1>
             <div className="filter-controls">
              <div className="filter-row">
              <div className="filter-group">
                <span className="filter-label">Loan Type:</span>
                <select className="filter-select">
                  <option>All</option>
                </select>
              </div>
              <div className="filter-group">
                <span className="filter-label">Select HP:</span>
                <select className="filter-select">
                  <option>All</option>
                </select>
              </div>
              <div className="filter-group">
                <span className="filter-label">Records Per Page:</span>
                <select className="filter-select">
                  <option>50</option>
                </select>
              </div>
              <div className="filter-group">
                <span className="filter-label">Page:</span>
                <select className="filter-select">
                  <option>1</option>
                </select>
              </div>
              </div>
              <div className="filter-row">
              <div className="records-info">Showing Records 1 - 50 of 1638</div>
              <div className="filter-group">
                <span className="filter-label">Sorted By:</span>
                <select className="filter-select">
                  <option>Loan Amount</option>
                </select>
              </div>
              <div className="filter-group">
                <span className="filter-label">Order By:</span>
                <select className="filter-select">
                  <option>-------</option>
                </select>
              </div>
              </div>
            </div>
          </div>
        </div>

        {/* Data Table */}
        <div className="table-container">
          <div className="table-wrapper">
            <div className="table-scroll">
              <table className="data-table">
                <thead>
                  <tr className="table-header">
                    {tableHeaders.map((header, index) => (
                      <th key={index} className="table-header-cell">
                        {header}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {emptyRows.map((row) => (
                    <tr key={row} className="table-row">
                      {tableHeaders.map((_, colIndex) => (
                        <td key={colIndex} className="table-cell">
                          &nbsp;
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Pagination */}
          <div className="pagination">
            <div className="pagination-wrapper">
              <button className="pagination-btn pagination-btn-text">
                First
              </button>

              <button
                className="pagination-btn pagination-btn-nav"
                disabled={currentPage === 1}
              >
                ‹
              </button>

              <div className="pagination-numbers">
                {[1, 2, 3, 4, 5].map((page) => (
                  <button
                    key={page}
                    className={`pagination-btn pagination-btn-number ${
                      currentPage === page ? "pagination-btn-active" : ""
                    }`}
                    onClick={() => setCurrentPage(page)}
                  >
                    {page}
                  </button>
                ))}
              </div>

              <span className="pagination-dots">...</span>

              <button className="pagination-btn pagination-btn-nav">›</button>

              <button className="pagination-btn pagination-btn-text">
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    </DashboardLayout>
  );
};

export default ChqsInClearing;
