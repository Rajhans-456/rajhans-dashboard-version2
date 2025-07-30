import React, { useState, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom"; 
import DashboardLayout from "@/components/layout/DashboardLayout";
import '../../style/CoBorrowerEntry.css';
import AddressCard from "@/components/AddressCard";
import PhotoUpload from "@/components/PhotoUpload";



const CoBorrowerEntry = () => {
  const [sidebarActive, setSidebarActive] = useState(false);
  const [activeMenu, setActiveMenu] = useState("customer-entry");
  const [loading, setLoading] = useState(false);
  const [autoSaveTimeout, setAutoSaveTimeout] = useState(null);

  // Form data state
  const [formData, setFormData] = useState({
    coborrowerId: "101-CU-004837",
    entryDate: new Date().toISOString().split("T")[0],
    customertype: "New",
    photo: null,
    photoUrl: "",
    title: "",
    customerName: "",
    fatherName: "",
    motherName: "",
    dateOfBirth: "",
    presentAddress: {
      addressLine1: "",
      addressLine2: "",
      city: "",
      pinCode: "",
    },
    permanentAddress: {
      addressLine1: "",
      addressLine2: "",
      city: "",
      pinCode: "",
    },
    officeAddress: {
      addressLine1: "",
      addressLine2: "",
      city: "",
      pinCode: "",
    },
    vehicleregno : "",
  });

  // Auto-save functionality
  const autoSave = useCallback(() => {
    console.log("Auto-saving form...");
    localStorage.setItem("customerFormData", JSON.stringify(formData));
  }, [formData]);

  useEffect(() => {
    // Clear existing timeout
    if (autoSaveTimeout) {
      clearTimeout(autoSaveTimeout);
    }

    // Set new timeout
    const timeout = setTimeout(autoSave, 3000);
    setAutoSaveTimeout(timeout);

    return () => {
      if (timeout) {
        clearTimeout(timeout);
      }
    };
  }, [formData, autoSave]);

  // Load saved data on component mount
  useEffect(() => {
    const savedData = localStorage.getItem("customerFormData");
    if (savedData) {
      try {
        const parsed = JSON.parse(savedData);
        setFormData({ ...formData, ...parsed });
      } catch (error) {
        console.error("Error loading saved data:", error);
      }
    }
  }, []);

  // Keyboard shortcuts
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.ctrlKey && e.key === "s") {
        e.preventDefault();
        handleSave();
      }
      if (e.key === "Escape") {
        setSidebarActive(false);
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
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

  // Form handlers
  const handleInputChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleAddressChange = (addressType, addressData) => {
    setFormData((prev) => ({
      ...prev,
      [addressType]: addressData,
    }));
  };

  const handleCopyPresentToPermanent = () => {
    setFormData((prev) => ({
      ...prev,
      permanentAddress: { ...prev.presentAddress },
    }));
  };

  const handlePhotoUpload = (photoUrl, file) => {
    setFormData((prev) => ({
      ...prev,
      photoUrl,
      photo: file,
    }));
  };

  // Form validation
  const validateForm = () => {
    const requiredFields = [
      "title",
      "customerName",
      "fatherName",
      "motherName",
      "dateOfBirth",
    ];

    const addressFields = [
      "presentAddress.addressLine1",
      "presentAddress.city",
      "presentAddress.pinCode",
      "permanentAddress.addressLine1",
      "permanentAddress.city",
      "permanentAddress.pinCode",
    ];

    const allRequiredFields = [...requiredFields, ...addressFields];

    for (const field of allRequiredFields) {
      const value = field.includes(".")
        ? field.split(".").reduce((obj, key) => obj[key], formData)
        : formData[field];

      if (!value || value.trim() === "") {
        return false;
      }
    }

    // Email validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(formData.email)) {
      return false;
    }

    // Mobile validation
    const mobilePattern = /^[0-9]{10}$/;
    if (!mobilePattern.test(formData.mobile)) {
      return false;
    }
    return true;
  };

  // Form actions
  const handleSave = async () => {
    if (!validateForm()) {
      alert("Please fill all required fields correctly.");
      return;
    }

    setLoading(true);
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 2000));
      alert("Customer saved successfully!");
      localStorage.removeItem("customerFormData");
    } catch (error) {
      alert("Error saving customer. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleClear = () => {
    if (window.confirm("Are you sure you want to clear all form data?")) {
      const resetData = {
        guarantorId: formData.guarantorId,
        entryDate: formData.entryDate,
        customertype: formData.customertype,
        photo: null,
        photoUrl: "",
        title: "",
        guarantorName: "",
        fatherName: "",
        motherName:"",
        dateOfBirth: "",
        presentAddress: {
          addressLine1: "",
          addressLine2: "",
          city: "",
          pinCode: "",
        },
        permanentAddress: {
          addressLine1: "",
          addressLine2: "",
          city: "",
          pinCode: "",
        },
        officeAddress: {
          addressLine1: "",
          addressLine2: "",
          city: "",
          pinCode: "",
        },
        vehicleregno:"",
      };
      setFormData(resetData);
      localStorage.removeItem("customerFormData");
    }
  };

  const handleSaveAndNew = async () => {
    await handleSave();
    if (!loading) {
      setTimeout(() => {
        handleClear();
        // Generate new customer ID
        const currentId = formData.customerId;
        const idNumber = parseInt(currentId.split("-")[1]) + 1;
        setFormData((prev) => ({
          ...prev,
          customerId: `CU-${String(idNumber).padStart(3, "0")}`,
        }));
      }, 1000);
    }
  };
const navigate = useNavigate();
  const handleSaveAndGoto = async (path) => {
  await handleSave();
  if (!loading) navigate(path);
};


  return (
    <DashboardLayout>
    <div className="main-container1">

      {/* Main Content */}
      <div className="main-content">
        <div className="page-header1">
          <h1 className="page-title1">New Co-Borrower Entry</h1>
          <div className="breadcrumb">
            <span>Entries</span>
            <span>Co-Borrower Entry</span>
            <span>New</span>
          </div>
        </div>

        <div className="coborrowerform-container">
          <div className="coborrower-id-section">
            <div className="form-group">
              <label className="form-label" >Co-Borrower ID</label>
              <input
                type="text"
                className="form-input"
                value={formData.coborrowerId}
                readOnly
              />
            
            </div>
            <div className="form-group">
              <label className="form-label">Customer Type</label>
              <input
                type="text"
                className="form-input"
                value={formData.customertype}
                readOnly
              />
            </div>
          </div>

             {/* Personal Information */}
            <div class="personal-info-section">
            <PhotoUpload
            onPhotoUpload={handlePhotoUpload}
            photoUrl={formData.photoUrl}
          />

            <div class="form-group" >
              <label class="form-label">Title</label>
              <select class="form-select" id="title">
                <option value="Mr.">Mr.</option>
                <option value="Mrs.">Mrs.</option>
                <option value="Ms.">Ms.</option>
                <option value="Dr.">Dr.</option>
              </select>
            </div>
          </div>

          <div className="form-row">
            
            <div className="form-group">
              <label className="form-label">Co-Borrower Name</label>
              <input
                type="text"
                className="form-input"
                value={formData.customerName}
                onChange={(e) => handleInputChange("coborrowerName", e.target.value)}
                placeholder="Enter full name"
                required
              />
            </div>
            <div className="form-group">
              <label className="form-label">Father Name</label>
              <input
                type="text"
                className="form-input"
                value={formData.fatherName}
                onChange={(e) => handleInputChange("fatherName", e.target.value)}
                placeholder="Enter father name"
                required
              />
            </div>
          </div>

          <div className="form-row">
             <div className="form-group">
              <label className="form-label">Mother Name</label>
              <input
                type="text"
                className="form-input"
                value={formData.fatherName}
                onChange={(e) => handleInputChange("motherName", e.target.value)}
                placeholder="Enter mother name"
                required
              />
            </div>
            <div className="form-group">
              <label className="form-label">Date of Birth</label>
              <div className="date-input">
                <input
                  type="date"
                  className="form-input"
                  value={formData.dateOfBirth}
                  onChange={(e) =>
                    handleInputChange("dateOfBirth", e.target.value)
                  }
                  required
                />
              </div>
            </div>
          </div>

          {/* Address Information */}
          <h2 className="section-header">Address Information</h2>

          <div className="address-section">
            
            <AddressCard
              title="Permanent Address"
              type="permanent"
              data={formData.permanentAddress}
              presentData={formData.presentAddress}
              onChange={(data) => handleAddressChange("permanentAddress", data)}
              onCopyFromPresent={handleCopyPresentToPermanent}
            />
            <AddressCard
              title="Present Address"
              type="present"
              data={formData.presentAddress}
              onChange={(data) => handleAddressChange("presentAddress", data)}
            />
            <AddressCard
              title="Office Address"
              type="office"
              data={formData.officeAddress}
              onChange={(data) => handleAddressChange("officeAddress", data)}
            />
          </div>

          {/* Contact Information */}
          <h2 className="section-header">Contact Information</h2>

          <div className="form-row">
            <div className="form-group">
              <label className="form-label">Primary Number</label>
              <input
                type="tel"
                className="form-input"
                value={formData.mobile}
                onChange={(e) => handleInputChange("mobile", e.target.value)}
                placeholder="Enter primary number"
                pattern="[0-9]{10}"
                maxLength="10"
                required
              />
            </div>
            <div className="form-group">
              <label className="form-label">Secondary Number</label>
              <input
                type="tel"
                className="form-input"
                value={formData.alternateMobile}
                onChange={(e) =>
                  handleInputChange("alternateMobile", e.target.value)
                }
                placeholder="Enter secondary number"
                pattern="[0-9]{10}"
                maxLength="10"
              />
            </div>
            <div className="form-group">
              <label className="form-label">Email Address</label>
              <input
                type="email"
                className="form-input"
                value={formData.email}
                onChange={(e) => handleInputChange("email", e.target.value)}
                placeholder="Enter email address"
                required
              />
            </div>
            
          </div>

          {/* Additional Information */}
          <h2 className="section-header">Additional Information</h2>

          <div className="form-row">
            <div class="form-group" >
            <label class="form-label">Collection Area</label>
            <select class="form-select" id="collection-area">
              <option value>Select Area</option>
              <option value="north">North Zone</option>
              <option value="south">South Zone</option>
              <option value="east">East Zone</option>
              <option value="west">West Zone</option>
            </select>
          </div>
          </div>


          {/* Form Actions */}
          <div className="form-actions">
  <div className="action-row">
    <button className={`btn btn-save ${loading ? "loading" : ""}`} onClick={handleSave} disabled={loading}>
      {loading ? "Saving..." : "Save"}
    </button>
    <button className="btn btn-clear" onClick={handleClear}>Clear All</button>
  </div>
  <div className="action-row">
    <button className="btn btn-primary" onClick={() => handleSaveAndGoto("/document-entry")}>
      Save and Go to Document Entry
    </button>
    <button className="btn btn-primary" onClick={() => handleSaveAndGoto("/customer-entry")}>
      Save and Go to Customer Entry
    </button>
  </div>
</div>

        </div>
      </div>
    </div>
    </DashboardLayout>
  );
};

export default CoBorrowerEntry;
