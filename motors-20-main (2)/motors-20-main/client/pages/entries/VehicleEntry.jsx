import React, { useState, useEffect } from "react";
import DashboardLayout from "@/components/layout/DashboardLayout";
import "../../style/VehicleEntry.css";

const VehicleEntry = () => {
  // Customer Information state
  const [customerName, setCustomerName] = useState("");
  const [customerId, setCustomerId] = useState("");
  const [dealerName, setDealerName] = useState("");

  // Loan & Entry Details state
  const [loanAccountNo, setLoanAccountNo] = useState("");
  const [externalAccountNo, setExternalAccountNo] = useState("");
  const [entryType, setEntryType] = useState("");
  const [deliveryDate, setDeliveryDate] = useState("");

  // Vehicle Information state
  const [registrationNo, setRegistrationNo] = useState("");
  const [registrationAuthority, setRegistrationAuthority] = useState("");
  const [vehicleColor, setVehicleColor] = useState("");
  const [vehicleType, setVehicleType] = useState("");
  const [manufacturer, setManufacturer] = useState("");
  const [vehicleMake, setVehicleMake] = useState("");
  const [modelMm, setModelMm] = useState("");
  const [modelYear, setModelYear] = useState("");

  // Technical Details state
  const [engineNumber, setEngineNumber] = useState("");
  const [chassisNumber, setChassisNumber] = useState("");
  const [exShowroomPrice, setExShowroomPrice] = useState("");
  const [bookingNumber, setBookingNumber] = useState("");
  const [tempRegistrationNo, setTempRegistrationNo] = useState("");

  // Insurance & Policy state
  const [insuranceValidUntil, setInsuranceValidUntil] = useState("");
  const [insuranceCompany, setInsuranceCompany] = useState("");
  const [policyNumber, setPolicyNumber] = useState("");
  const [inOut, setInOut] = useState("");
  const [registeredBy, setRegisteredBy] = useState("");
  const [documentStatus, setDocumentStatus] = useState("");

  // Form data storage
  const [formData, setFormData] = useState({});

  // Auto-save form data on input changes
  useEffect(() => {
    const currentFormData = {
      customerName,
      customerId,
      dealerName,
      loanAccountNo,
      externalAccountNo,
      entryType,
      deliveryDate,
      registrationNo,
      registrationAuthority,
      vehicleColor,
      vehicleType,
      manufacturer,
      vehicleMake,
      modelMm,
      modelYear,
      engineNumber,
      chassisNumber,
      exShowroomPrice,
      bookingNumber,
      tempRegistrationNo,
      insuranceValidUntil,
      insuranceCompany,
      policyNumber,
      inOut,
      registeredBy,
      documentStatus,
    };
    setFormData(currentFormData);
  }, [
    customerName,
    customerId,
    dealerName,
    loanAccountNo,
    externalAccountNo,
    entryType,
    deliveryDate,
    registrationNo,
    registrationAuthority,
    vehicleColor,
    vehicleType,
    manufacturer,
    vehicleMake,
    modelMm,
    modelYear,
    engineNumber,
    chassisNumber,
    exShowroomPrice,
    bookingNumber,
    tempRegistrationNo,
    insuranceValidUntil,
    insuranceCompany,
    policyNumber,
    inOut,
    registeredBy,
    documentStatus,
  ]);

  // Validation function
  const validateForm = () => {
    const requiredFields = [
      { value: customerName, name: "Customer Name" },
      { value: customerId, name: "Customer ID" },
      { value: dealerName, name: "Dealer Name" },
      { value: entryType, name: "Entry Type" },
      { value: deliveryDate, name: "Delivery Date" },
      { value: registrationNo, name: "Registration No" },
      { value: vehicleType, name: "Vehicle Type" },
      { value: manufacturer, name: "Manufacturer" },
      { value: vehicleMake, name: "Vehicle Make" },
    ];

    const errors = requiredFields.filter((field) => !field.value.trim());

    if (errors.length > 0) {
      const errorMessages = errors.map((field) => `${field.name} is required`);
      alert("Please fill in all required fields:\n" + errorMessages.join("\n"));
      return false;
    }
    return true;
  };

  // Save form data
  const saveForm = () => {
    console.log("Form saved:", formData);
    alert("Form data saved successfully!");
  };

  // Save and go to document entry
  const saveAndGoToDocument = () => {
    if (!validateForm()) {
      return;
    }

    saveForm();
    alert("Form saved! Redirecting to Document Entry...");
    // Here you would typically redirect to the document entry page
    // window.location.href = '/document-entry';
  };

  // Clear all form data
  const clearForm = () => {
    if (window.confirm("Are you sure you want to clear all data?")) {
      setCustomerName("");
      setCustomerId("");
      setDealerName("");
      setLoanAccountNo("");
      setExternalAccountNo("");
      setEntryType("");
      setDeliveryDate("");
      setRegistrationNo("");
      setRegistrationAuthority("");
      setVehicleColor("");
      setVehicleType("");
      setManufacturer("");
      setVehicleMake("");
      setModelMm("");
      setModelYear("");
      setEngineNumber("");
      setChassisNumber("");
      setExShowroomPrice("");
      setBookingNumber("");
      setTempRegistrationNo("");
      setInsuranceValidUntil("");
      setInsuranceCompany("");
      setPolicyNumber("");
      setInOut("");
      setRegisteredBy("");
      setDocumentStatus("");
      console.log("Form cleared");
    }
  };

  return (
    <DashboardLayout>
    <div className="main-container">
      {/* Header */}
      <div className="vehicleheader">
        <h1>🚗Vehicle Entry</h1>
        <p>Add new vehicle information to the system</p>
      </div>

      {/* Form Container */}
      <div className="container">
        <div className="form-card">
          <form id="vehicleForm">
            {/* Customer Information Section */}
            <div className="section">
              <div className="section-header">
                <div className="section-icon">i</div>
                <h2>Customer Information</h2>
              </div>
              <div className="grid grid-3">
                <div className="field">
                  <label className="label" htmlFor="customerName">
                    Customer Name *
                  </label>
                  <input
                    type="text"
                    id="customerName"
                    name="customerName"
                    className="input"
                    placeholder="Enter customer name"
                    value={customerName}
                    onChange={(e) => setCustomerName(e.target.value)}
                    required
                  />
                </div>
                <div className="field">
                  <label className="label" htmlFor="customerId">
                    Customer ID *
                  </label>
                  <input
                    type="text"
                    id="customerId"
                    name="customerId"
                    className="input"
                    placeholder="Enter customer ID"
                    value={customerId}
                    onChange={(e) => setCustomerId(e.target.value)}
                    required
                  />
                </div>
                <div className="field">
                  <label className="label" htmlFor="dealerName">
                    Dealer Name *
                  </label>
                  <select
                    id="dealerName"
                    name="dealerName"
                    className="select"
                    value={dealerName}
                    onChange={(e) => setDealerName(e.target.value)}
                    required
                  >
                    <option value="">Select Dealer</option>
                    <option value="dealer1">Dealer 1</option>
                    <option value="dealer2">Dealer 2</option>
                    <option value="dealer3">Dealer 3</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Loan & Entry Details Section */}
            <div className="section">
              <div className="section-header">
                <div className="section-icon">📄</div>
                <h2>Loan & Entry Details</h2>
              </div>
              <div className="grid grid-3">
                <div className="field">
                  <label className="label" htmlFor="loanAccountNo">
                    Loan Account No
                  </label>
                  <select
                    id="loanAccountNo"
                    name="loanAccountNo"
                    className="select"
                    value={loanAccountNo}
                    onChange={(e) => setLoanAccountNo(e.target.value)}
                  >
                    <option value="">Select Loan Account</option>
                    <option value="loan1">Loan Account 1</option>
                    <option value="loan2">Loan Account 2</option>
                  </select>
                </div>
                <div className="field">
                  <label className="label" htmlFor="externalAccountNo">
                    External Account No
                  </label>
                  <input
                    type="text"
                    id="externalAccountNo"
                    name="externalAccountNo"
                    className="input"
                    placeholder="Enter external account no"
                    value={externalAccountNo}
                    onChange={(e) => setExternalAccountNo(e.target.value)}
                  />
                </div>
                <div className="field">
                  <label className="label" htmlFor="entryType">
                    Entry Type *
                  </label>
                  <select
                    id="entryType"
                    name="entryType"
                    className="select"
                    value={entryType}
                    onChange={(e) => setEntryType(e.target.value)}
                    required
                  >
                    <option value="">Select Entry Type</option>
                    <option value="type1">Entry Type 1</option>
                    <option value="type2">Entry Type 2</option>
                  </select>
                </div>
              </div>
              <div className="grid grid-3" style={{ marginTop: "16px" }}>
                <div className="field">
                  <label className="label" htmlFor="deliveryDate">
                    Delivery Date *
                  </label>
                  <input
                    type="date"
                    id="deliveryDate"
                    name="deliveryDate"
                    className="input"
                    value={deliveryDate}
                    onChange={(e) => setDeliveryDate(e.target.value)}
                    required
                  />
                </div>
              </div>
            </div>

            {/* Vehicle Information Section */}
            <div className="section">
              <div className="section-header">
                <div className="section-icon">🚗</div>
                <h2>Vehicle Information</h2>
              </div>
              <div className="grid grid-3">
                <div className="field">
                  <label className="label" htmlFor="registrationNo">
                    Registration No *
                  </label>
                  <input
                    type="text"
                    id="registrationNo"
                    name="registrationNo"
                    className="input"
                    placeholder="Enter registration number"
                    value={registrationNo}
                    onChange={(e) => setRegistrationNo(e.target.value)}
                    required
                  />
                </div>
                <div className="field">
                  <label className="label" htmlFor="registrationAuthority">
                    Registration Authority
                  </label>
                  <input
                    type="text"
                    id="registrationAuthority"
                    name="registrationAuthority"
                    className="input"
                    placeholder="Enter registration authority"
                    value={registrationAuthority}
                    onChange={(e) => setRegistrationAuthority(e.target.value)}
                  />
                </div>
                <div className="field">
                  <label className="label" htmlFor="vehicleColor">
                    Vehicle Color
                  </label>
                  <input
                    type="text"
                    id="vehicleColor"
                    name="vehicleColor"
                    className="input"
                    placeholder="Enter vehicle color"
                    value={vehicleColor}
                    onChange={(e) => setVehicleColor(e.target.value)}
                  />
                </div>
              </div>
              <div className="grid grid-3" style={{ marginTop: "16px" }}>
                <div className="field">
                  <label className="label" htmlFor="vehicleType">
                    Vehicle Type *
                  </label>
                  <select
                    id="vehicleType"
                    name="vehicleType"
                    className="select"
                    value={vehicleType}
                    onChange={(e) => setVehicleType(e.target.value)}
                    required
                  >
                    <option value="">Select Vehicle Type</option>
                    <option value="type1">Type 1</option>
                    <option value="type2">Type 2</option>
                  </select>
                </div>
                <div className="field">
                  <label className="label" htmlFor="manufacturer">
                    Manufacturer *
                  </label>
                  <select
                    id="manufacturer"
                    name="manufacturer"
                    className="select"
                    value={manufacturer}
                    onChange={(e) => setManufacturer(e.target.value)}
                    required
                  >
                    <option value="">Select Manufacturer</option>
                    <option value="manufacturer1">Manufacturer 1</option>
                    <option value="manufacturer2">Manufacturer 2</option>
                  </select>
                </div>
                <div className="field">
                  <label className="label" htmlFor="vehicleMake">
                    Vehicle Make *
                  </label>
                  <select
                    id="vehicleMake"
                    name="vehicleMake"
                    className="select"
                    value={vehicleMake}
                    onChange={(e) => setVehicleMake(e.target.value)}
                    required
                  >
                    <option value="">Select Make</option>
                    <option value="make1">Make 1</option>
                    <option value="make2">Make 2</option>
                  </select>
                </div>
              </div>
              <div className="grid grid-3" style={{ marginTop: "16px" }}>
                <div className="field">
                  <label className="label" htmlFor="modelMm">
                    Model MM
                  </label>
                  <input
                    type="text"
                    id="modelMm"
                    name="modelMm"
                    className="input"
                    placeholder="Enter model MM"
                    value={modelMm}
                    onChange={(e) => setModelMm(e.target.value)}
                  />
                </div>
                <div className="field">
                  <label className="label" htmlFor="modelYear">
                    Model Year
                  </label>
                  <input
                    type="text"
                    id="modelYear"
                    name="modelYear"
                    className="input"
                    placeholder="Enter model year"
                    value={modelYear}
                    onChange={(e) => setModelYear(e.target.value)}
                  />
                </div>
              </div>
            </div>

            {/* Technical Details Section */}
            <div className="section">
              <div className="section-header">
                <div className="section-icon">🔧</div>
                <h2>Technical Details</h2>
              </div>
              <div className="grid grid-3">
                <div className="field">
                  <label className="label" htmlFor="engineNumber">
                    Engine Number
                  </label>
                  <input
                    type="text"
                    id="engineNumber"
                    name="engineNumber"
                    className="input"
                    placeholder="Enter engine number"
                    value={engineNumber}
                    onChange={(e) => setEngineNumber(e.target.value)}
                  />
                </div>
                <div className="field">
                  <label className="label" htmlFor="chassisNumber">
                    Chassis Number
                  </label>
                  <input
                    type="text"
                    id="chassisNumber"
                    name="chassisNumber"
                    className="input"
                    placeholder="Enter chassis number"
                    value={chassisNumber}
                    onChange={(e) => setChassisNumber(e.target.value)}
                  />
                </div>
                <div className="field">
                  <label className="label" htmlFor="exShowroomPrice">
                    Ex-Showroom Price
                  </label>
                  <input
                    type="text"
                    id="exShowroomPrice"
                    name="exShowroomPrice"
                    className="input"
                    placeholder="Enter price"
                    value={exShowroomPrice}
                    onChange={(e) => setExShowroomPrice(e.target.value)}
                  />
                </div>
              </div>
              <div className="grid grid-3" style={{ marginTop: "16px" }}>
                <div className="field">
                  <label className="label" htmlFor="bookingNumber">
                    Booking Number
                  </label>
                  <input
                    type="text"
                    id="bookingNumber"
                    name="bookingNumber"
                    className="input"
                    placeholder="Enter booking number"
                    value={bookingNumber}
                    onChange={(e) => setBookingNumber(e.target.value)}
                  />
                </div>
                <div className="field">
                  <label className="label" htmlFor="tempRegistrationNo">
                    Temp Registration No
                  </label>
                  <input
                    type="text"
                    id="tempRegistrationNo"
                    name="tempRegistrationNo"
                    className="input"
                    placeholder="Enter temp registration"
                    value={tempRegistrationNo}
                    onChange={(e) => setTempRegistrationNo(e.target.value)}
                  />
                </div>
              </div>
            </div>

            {/* Insurance & Policy Section */}
            <div className="section">
              <div className="section-header">
                <div className="section-icon">🛡️</div>
                <h2>Insurance & Policy</h2>
              </div>
              <div className="grid grid-3">
                <div className="field">
                  <label className="label" htmlFor="insuranceValidUntil">
                    Insurance Valid Until
                  </label>
                  <input
                    type="date"
                    id="insuranceValidUntil"
                    name="insuranceValidUntil"
                    className="input"
                    value={insuranceValidUntil}
                    onChange={(e) => setInsuranceValidUntil(e.target.value)}
                  />
                </div>
                <div className="field">
                  <label className="label" htmlFor="insuranceCompany">
                    Insurance Company
                  </label>
                  <input
                    type="text"
                    id="insuranceCompany"
                    name="insuranceCompany"
                    className="input"
                    placeholder="Enter insurance company"
                    value={insuranceCompany}
                    onChange={(e) => setInsuranceCompany(e.target.value)}
                  />
                </div>
                <div className="field">
                  <label className="label" htmlFor="policyNumber">
                    Policy Number
                  </label>
                  <input
                    type="text"
                    id="policyNumber"
                    name="policyNumber"
                    className="input"
                    placeholder="Enter policy number"
                    value={policyNumber}
                    onChange={(e) => setPolicyNumber(e.target.value)}
                  />
                </div>
              </div>
              <div className="grid grid-3" style={{ marginTop: "16px" }}>
                <div className="field">
                  <label className="label" htmlFor="inOut">
                    In / Out
                  </label>
                  <select
                    id="inOut"
                    name="inOut"
                    className="select"
                    value={inOut}
                    onChange={(e) => setInOut(e.target.value)}
                  >
                    <option value="">Select Status</option>
                    <option value="in">In</option>
                    <option value="out">Out</option>
                  </select>
                </div>
                <div className="field">
                  <label className="label" htmlFor="registeredBy">
                    Registered By
                  </label>
                  <select
                    id="registeredBy"
                    name="registeredBy"
                    className="select"
                    value={registeredBy}
                    onChange={(e) => setRegisteredBy(e.target.value)}
                  >
                    <option value="">Select</option>
                    <option value="direct">Direct</option>
                    <option value="agent">Agent</option>
                  </select>
                </div>
                <div className="field">
                  <label className="label" htmlFor="documentStatus">
                    Document Status
                  </label>
                  <select
                    id="documentStatus"
                    name="documentStatus"
                    className="select"
                    value={documentStatus}
                    onChange={(e) => setDocumentStatus(e.target.value)}
                  >
                    <option value="">Select Status</option>
                    <option value="Not Received from DLR">
                      Not Received from DLR
                    </option>
                    <option value="Received">Received</option>
                  </select>
                </div>
              </div>
            </div>
          </form>
        </div>

        {/* Action Buttons */}
        <div className="actions">
          <button
            type="button"
            className="btn btn-primary"
            onClick={saveAndGoToDocument}
          >
            Save and Go To Document Entry
          </button>
          <button type="button" className="btn btn-outline" onClick={saveForm}>
            Save
          </button>
          <button
            type="button"
            className="btn btn-secondary"
            onClick={clearForm}
          >
            Clear All
          </button>
        </div>
      </div>
    </div>
    </DashboardLayout>
  );
};

export default VehicleEntry;
