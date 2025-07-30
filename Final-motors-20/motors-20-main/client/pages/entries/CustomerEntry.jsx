import React, { useState, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import DashboardLayout from "@/components/layout/DashboardLayout";
import "../../style/CustomerEntry.css";
import AddressCard from "@/components/AddressCard";
import PhotoUpload from "@/components/PhotoUpload";

const CustomerEntry = () => {
  const navigate = useNavigate();
  const [sidebarActive, setSidebarActive] = useState(false);
  const [activeMenu, setActiveMenu] = useState("customer-entry");
  const [loading, setLoading] = useState(false);
  const [autoSaveTimeout, setAutoSaveTimeout] = useState(null);

  const [formData, setFormData] = useState({
    customerId: "101-CU-004837",
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
    mobile: "",
    alternateMobile: "",
    email: "",
    reference1Name: "",
    reference1Phone: "",
    reference2Name: "",
    reference2Phone: "",
    collectionarea: "",
  });

  const autoSave = useCallback(() => {
    localStorage.setItem("customerFormData", JSON.stringify(formData));
  }, [formData]);

  useEffect(() => {
    if (autoSaveTimeout) clearTimeout(autoSaveTimeout);
    const timeout = setTimeout(autoSave, 3000);
    setAutoSaveTimeout(timeout);
    return () => clearTimeout(timeout);
  }, [formData, autoSave]);

  useEffect(() => {
    const saved = localStorage.getItem("customerFormData");
    if (saved) {
      try {
        setFormData({ ...formData, ...JSON.parse(saved) });
      } catch (e) {
        console.error("Invalid saved data:", e);
      }
    }
  }, []);

  useEffect(() => {
    const keyListener = (e) => {
      if (e.ctrlKey && e.key === "s") {
        e.preventDefault();
        handleSave();
      }
      if (e.key === "Escape") setSidebarActive(false);
    };
    document.addEventListener("keydown", keyListener);
    return () => document.removeEventListener("keydown", keyListener);
  }, []);

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleAddressChange = (type, address) => {
    setFormData((prev) => ({
      ...prev,
      [type]: address,
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

  const validateForm = () => {
    const requiredFields = ["title", "customerName", "fatherName", "motherName", "dateOfBirth"];
    const addressFields = [
      "presentAddress.addressLine1",
      "presentAddress.city",
      "presentAddress.pinCode",
      "permanentAddress.addressLine1",
      "permanentAddress.city",
      "permanentAddress.pinCode",
    ];

    for (const field of [...requiredFields, ...addressFields]) {
      const value = field.includes(".")
        ? field.split(".").reduce((obj, key) => obj?.[key], formData)
        : formData[field];
      if (!value || value.trim() === "") return false;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) return false;
    if (!/^[0-9]{10}$/.test(formData.mobile)) return false;

    return true;
  };

  const handleSave = async () => {
    if (!validateForm()) {
      alert("Please fill all required fields correctly.");
      return;
    }

    setLoading(true);
    try {
      await new Promise((res) => setTimeout(res, 2000));
      alert("Customer saved successfully!");
      localStorage.removeItem("customerFormData");
    } catch (e) {
      alert("Error saving customer.");
    } finally {
      setLoading(false);
    }
  };

  const handleClear = () => {
    if (window.confirm("Clear all form data?")) {
      setFormData({
        ...formData,
        title: "",
        customerName: "",
        fatherName: "",
        motherName: "",
        dateOfBirth: "",
        presentAddress: { addressLine1: "", addressLine2: "", city: "", pinCode: "" },
        permanentAddress: { addressLine1: "", addressLine2: "", city: "", pinCode: "" },
        officeAddress: { addressLine1: "", addressLine2: "", city: "", pinCode: "" },
        mobile: "",
        alternateMobile: "",
        email: "",
        reference1Name: "",
        reference1Phone: "",
        reference2Name: "",
        reference2Phone: "",
        collectionarea: "",
        photoUrl: "",
        photo: null,
      });
      localStorage.removeItem("customerFormData");
    }
  };

  const handleSaveAndGoto = async (path) => {
    await handleSave();
    if (!loading) navigate(path);
  };

  return (
    <DashboardLayout>
      <div className="main-container1">
        <div className="main-content">
          <div className="page-header1">
            <h1 className="page-title1">New Customer Entry</h1>
            <div className="breadcrumb">
              <span>Entries</span>
              <span>Customer Entry</span>
              <span>New</span>
            </div>
          </div>

          <div className="customerform-container">
            <div className="customer-id-section">
              <div className="form-group">
                <label className="form-label">Customer ID</label>
                <input type="text" className="form-input" value={formData.customerId} readOnly />
              </div>
              <div className="form-group">
                <label className="form-label">Customer Type</label>
                <input type="text" className="form-input" value={formData.customertype} readOnly />
              </div>
            </div>

            <div className="personal-info-section">
              <PhotoUpload
            onPhotoUpload={handlePhotoUpload}
            photoUrl={formData.photoUrl}
          />
              <div class="form-group" >
              <label class="form-label">Title</label>
              <select class="form-select1" id="title">
                <option value="Mr.">Mr.</option>
                <option value="Mrs.">Mrs.</option>
                <option value="Ms.">Ms.</option>
                <option value="Dr.">Dr.</option>
              </select>
            </div>
          </div>

          <div className="form-row">
            
            <div className="form-group">
              <label className="form-label">Customer Name</label>
              <input
                type="text"
                className="form-input"
                value={formData.customerName}
                onChange={(e) => handleInputChange("customerName", e.target.value)}
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

            {/* Continue with customerName, fatherName, etc. */}
            {/* AddressCard sections */}
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
            {/* Additional Information */}
          <h2 className="section-header">Additional Information</h2>

          <div className="form-row">
            <div className="form-group">
              <label className="form-label">Reference 1 Name</label>
              <input
                type="text"
                className="form-input"
                value={formData.pan}
                onChange={(e) =>
                  handleInputChange("Reference1Name", e.target.value.toUpperCase())}
                placeholder="reference name"
               />
            </div>
            <div className="form-group">
              <label className="form-label">Reference 1 Phone</label>
              <input
                type="text"
                className="form-input"
                value={formData.aadhar}
                onChange={(e) => handleInputChange("Reference1Phone", e.target.value)}
                placeholder="Phone number"
              />
            </div>
           
          </div>

          

          <div className="form-row">
            <div className="form-group">
              <label className="form-label">Reference 2 Name</label>
              <input
                type="text"
                className="form-input"
                value={formData.reference2Name}
                onChange={(e) =>
                  handleInputChange("reference2Name", e.target.value)
                }
                placeholder="reference name"
              />
            </div>
            <div className="form-group">
              <label className="form-label">Reference 2 Phone</label>
              <input
                type="tel"
                className="form-input"
                value={formData.reference2Phone}
                onChange={(e) =>
                  handleInputChange("reference2Phone", e.target.value)
                }
                placeholder="phone number"
                pattern="[0-9]{10}"
                maxLength="10"
              />
            </div>
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
              <button className={`btn btn-save ${loading ? "loading" : ""}`} onClick={handleSave}>
                {loading ? "Saving..." : "Save"}
              </button>
              <button className="btn btn-clear" onClick={handleClear}>
                Clear All
              </button>
              
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default CustomerEntry;
