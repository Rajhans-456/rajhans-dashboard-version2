import React, { useState, useRef } from "react";
import DashboardLayout from "@/components/layout/DashboardLayout";
import "../../style/LoanEntry.css";


const LoanEntry = () => {
  const [customerName, setCustomerName] = useState("");
  const [customerId, setCustomerId] = useState("");
  const [guarantorName, setGuarantorName] = useState("");
  const [guarantorId, setGuarantorId] = useState("");
  const [fileLoanNo, setFileLoanNo] = useState("");
  const [disbursalDate, setDisbursalDate] = useState("");
  const [chqDate, setChqDate] = useState("");
  const [branchName, setBranchName] = useState("");
  const [salesAgent, setSalesAgent] = useState("");
  const [callAgent, setCallAgent] = useState("");
  const [vehicleUse, setVehicleUse] = useState("Commercial");
  const [yourChqNo, setYourChqNo] = useState("");
  const [ledgerFile, setLedgerFile] = useState("");
  const [estChqNo, setEstChqNo] = useState("");
  const [estChqDate, setEstChqDate] = useState("");
  const [hpTo, setHpTo] = useState("");
  const [location, setLocation] = useState("");
  const [codeType, setCodeType] = useState("Fixed Code");
  const [fileStatus, setFileStatus] = useState("No File Chosen");
  const [searchButtonText, setSearchButtonText] = useState("Search Customer");
  const [searchButtonClass, setSearchButtonClass] = useState("");
  const [dpBal, setDpBal] = useState("₹ 0.00");
  const [dpAmount, setDpAmount] = useState("₹ 0.00");
  const [dpBalAtDealer, setDpBalAtDealer] = useState("");
  const [dpAtDealerDetails, setDpAtDealerDetails] = useState("");
  const [dpAmtReqd, setDpAmtReqd] = useState("");
  const [dpAmtPaid, setDpAmtPaid] = useState("");
  const [loanAmount, setLoanAmount] = useState("");
  const [tenure, setTenure] = useState("");
  const [estAmount, setEstAmount] = useState("");
  const [interestRate, setInterestRate] = useState("");
  const [fiaCharges, setFiaCharges] = useState("");
  const [intPeriod, setIntPeriod] = useState("");
  const [perIntAmount, setPerIntAmount] = useState("");
  const [fiCharges, setFiCharges] = useState("");
  const [pdcGiven, setPdcGiven] = useState(false);
  const [bankName, setBankName] = useState("");
  const [bankAccountNo, setBankAccountNo] = useState("");

  const hiddenFileInputRef = useRef(null);

  const handleFileUpload = () => {
    hiddenFileInputRef.current?.click();
  };

  const handleFileChange = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      setFileStatus(file.name);
    }
  };

  const searchCustomer = () => {
    if (customerName.trim()) {
      setCustomerId("CU-" + Math.floor(Math.random() * 10000));
      setGuarantorName("Sample Guarantor");
      setGuarantorId("GR-" + Math.floor(Math.random() * 10000));

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

  const calculateAndSave = () => {
    alert("Calculate & Save functionality would be implemented here");
  };

  const clearAll = () => {
    setCustomerName("");
    setCustomerId("");
    setGuarantorName("");
    setGuarantorId("");
    setFileLoanNo("");
    setDisbursalDate("");
    setChqDate("");
    setBranchName("");
    setSalesAgent("");
    setCallAgent("");
    setVehicleUse("Commercial");
    setYourChqNo("");
    setLedgerFile("");
    setEstChqNo("");
    setEstChqDate("");
    setHpTo("");
    setLocation("");
    setCodeType("Fixed Code");
    setFileStatus("No File Chosen");
    setDpBal("₹ 0.00");
    setDpAmount("₹ 0.00");
    setDpBalAtDealer("");
    setDpAtDealerDetails("");
    setDpAmtReqd("");
    setDpAmtPaid("");
    setLoanAmount("");
    setTenure("");
    setEstAmount("");
    setInterestRate("");
    setFiaCharges("");
    setIntPeriod("");
    setPerIntAmount("");
    setFiCharges("");
    setPdcGiven(false);
    setBankName("");
    setBankAccountNo("");
  };

  return (
    <DashboardLayout>
    <div className="loan-entry-wrapper">
      {/* Header */}
      <div className="header">
        <h1 className="header-title">Loan Entry</h1>
        <p className="header-subtitle">New Vehicle Application</p>
      </div>

      {/* Main Container */}
      <div className="container">
        {/* Top Section - 3 Column Grid */}
        <div className="top-grid">
          {/* Customer Information */}
          <div className="section customer-info">
            <div className="section-header">
              <div className="section-icon">•</div>
              <span className="section-title">Customer Information</span>
            </div>
            <div className="form-group">
              <label className="form-label">Customer Name</label>
              <input
                type="text"
                value={customerName}
                onChange={(e) => setCustomerName(e.target.value)}
                placeholder="Enter customer name"
                className="form-input"
              />
            </div>
            <div className="form-group">
              <label className="form-label">Customer ID</label>
              <input
                type="text"
                value={customerId}
                onChange={(e) => setCustomerId(e.target.value)}
                placeholder="Customer ID"
                className="form-input"
              />
            </div>
            <div className="form-group">
              <label className="form-label">Guarantor Name</label>
              <input
                type="text"
                value={guarantorName}
                onChange={(e) => setGuarantorName(e.target.value)}
                placeholder="Guarantor name"
                className="form-input"
              />
            </div>
            <div className="form-group">
              <label className="form-label">Guarantor ID</label>
              <input
                type="text"
                value={guarantorId}
                onChange={(e) => setGuarantorId(e.target.value)}
                placeholder="Guarantor ID"
                className="form-input"
              />
            </div>
          </div>

          {/* Loan Details */}
          <div className="section loan-details">
            <div className="section-header">
              <div className="section-icon">•</div>
              <span className="section-title">Loan Details</span>
            </div>
            <div className="form-group">
              <label className="form-label">Loan No.</label>
              <input
                type="text"
                value="RMC 2024/2AC 005589"
                readOnly
                className="form-input readonly"
              />
            </div>
            <div className="form-group">
              <label className="form-label">File Loan No.</label>
              <input
                type="text"
                value={fileLoanNo}
                onChange={(e) => setFileLoanNo(e.target.value)}
                placeholder="File loan number"
                className="form-input"
              />
            </div>
            <div className="date-grid">
              <div className="form-group">
                <label className="form-label">Disbursal Date</label>
                <input
                  type="date"
                  value={disbursalDate}
                  onChange={(e) => setDisbursalDate(e.target.value)}
                  className="form-input"
                />
              </div>
              <div className="form-group">
                <label className="form-label">Chq Date</label>
                <input
                  type="date"
                  value={chqDate}
                  onChange={(e) => setChqDate(e.target.value)}
                  className="form-input"
                />
              </div>
            </div>
            <div className="form-group">
              <label className="form-label">Branch Name</label>
              <select
                value={branchName}
                onChange={(e) => setBranchName(e.target.value)}
                className="form-select"
              >
                <option value="">Select Branch</option>
                <option value="Mumbai Central">Mumbai Central</option>
                <option value="Delhi Main">Delhi Main</option>
                <option value="Bangalore South">Bangalore South</option>
              </select>
            </div>
          </div>

          {/* Quick Search */}
          <div className="section quick-search">
            <div className="section-header">
              <span className="section-title">Quick Search</span>
            </div>

            {/* Photo Upload */}
            <div className="photo-upload" onClick={handleFileUpload}>
              <div className="camera-icon">📷</div>
              <div className="upload-controls">
                <button type="button" className="file-button">
                  Choose File
                </button>
                <div
                  className={`file-status ${fileStatus !== "No File Chosen" ? "selected" : ""}`}
                >
                  {fileStatus}
                </div>
              </div>
            </div>

            <button
              onClick={searchCustomer}
              className={`search-button1 ${searchButtonClass}`}
            >
              {searchButtonText}
            </button>

            {/* DP Fields */}
            <div className="dp-field">
              <label className="dp-label">DP Bal</label>
              <input
                type="text"
                value={dpBal}
                onChange={(e) => setDpBal(e.target.value)}
                readOnly
                className="dp-input"
              />
              <div className="dp-subtitle">Loan Period</div>
            </div>

            <div className="dp-field">
              <label className="dp-label">DP Amount</label>
              <input
                type="text"
                value={dpAmount}
                onChange={(e) => setDpAmount(e.target.value)}
                className="dp-input"
              />
              <div className="dp-subtitle">Down Payment</div>
            </div>

            <div className="dp-field">
              <label className="dp-label">DP Bal at Dealer</label>
              <input
                type="text"
                value={dpBalAtDealer}
                onChange={(e) => setDpBalAtDealer(e.target.value)}
                className="dp-input"
              />
              <div className="dp-subtitle">Loan Period</div>
            </div>

            <div className="dp-field">
              <label className="dp-label">DP at Dealer Details</label>
              <input
                type="text"
                value={dpAtDealerDetails}
                onChange={(e) => setDpAtDealerDetails(e.target.value)}
                className="dp-input"
              />
            </div>

            <div className="dp-field">
              <label className="dp-label">DP Amt Reqd</label>
              <input
                type="text"
                value={dpAmtReqd}
                onChange={(e) => setDpAmtReqd(e.target.value)}
                className="dp-input"
              />
              <div className="dp-subtitle">Loan Period</div>
            </div>

            <div className="dp-field">
              <label className="dp-label">DP Amt Paid</label>
              <input
                type="text"
                value={dpAmtPaid}
                onChange={(e) => setDpAmtPaid(e.target.value)}
                className="dp-input"
              />
              <div className="dp-subtitle">Loan Period</div>
            </div>
          </div>
        </div>

        {/* Middle Section - 3 Column Grid */}
        <div className="middle-grid">
          {/* Vehicle Information */}
          <div className="section vehicle-info">
            <div className="section-header">
              <div className="section-icon">•</div>
              <span className="section-title">Vehicle Information</span>
            </div>
            <div className="form-group">
              <label className="form-label">Sales Agent</label>
              <select
                value={salesAgent}
                onChange={(e) => setSalesAgent(e.target.value)}
                className="form-select"
              >
                <option value="">Select Agent</option>
                <option value="Agent 1">Agent 1</option>
                <option value="Agent 2">Agent 2</option>
                <option value="Agent 3">Agent 3</option>
              </select>
            </div>
            <div className="form-group">
              <label className="form-label">Call Agent</label>
              <select
                value={callAgent}
                onChange={(e) => setCallAgent(e.target.value)}
                className="form-select"
              >
                <option value="">Select Call Agent</option>
                <option value="Call Agent 1">Call Agent 1</option>
                <option value="Call Agent 2">Call Agent 2</option>
              </select>
            </div>
            <div className="form-group">
              <label className="form-label">Vehicle Use</label>
              <select
                value={vehicleUse}
                onChange={(e) => setVehicleUse(e.target.value)}
                className="form-select"
              >
                <option value="Commercial">Commercial</option>
                <option value="Personal">Personal</option>
              </select>
            </div>
            <div className="form-group">
              <label className="form-label">Your Chq No.</label>
              <input
                type="text"
                value={yourChqNo}
                onChange={(e) => setYourChqNo(e.target.value)}
                placeholder="Cheque number"
                className="form-input"
              />
            </div>
          </div>

          {/* Additional Details */}
          <div className="section additional-details">
            <div className="section-header">
              <div className="section-icon">•</div>
              <span className="section-title">Additional Details</span>
            </div>
            <div className="form-group">
              <label className="form-label">Ledger File</label>
              <input
                type="text"
                value={ledgerFile}
                onChange={(e) => setLedgerFile(e.target.value)}
                placeholder="Ledger file"
                className="form-input"
              />
            </div>
            <div className="form-group">
              <label className="form-label">Est. Chq No.</label>
              <input
                type="text"
                value={estChqNo}
                onChange={(e) => setEstChqNo(e.target.value)}
                placeholder="Estimated cheque number"
                className="form-input"
              />
            </div>
            <div className="form-group">
              <label className="form-label">Est. Chq Date</label>
              <input
                type="date"
                value={estChqDate}
                onChange={(e) => setEstChqDate(e.target.value)}
                className="form-input"
              />
            </div>
            <div className="form-group">
              <label className="form-label">HP To</label>
              <input
                type="text"
                value={hpTo}
                onChange={(e) => setHpTo(e.target.value)}
                placeholder="HP To"
                className="form-input"
              />
            </div>
            <div className="location-grid">
              <div className="form-group">
                <label className="form-label">Location</label>
                <input
                  type="text"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  placeholder="Location"
                  className="form-input"
                />
              </div>
              <div className="form-group">
                <label className="form-label">Code Type</label>
                <select
                  value={codeType}
                  onChange={(e) => setCodeType(e.target.value)}
                  className="form-select"
                >
                  <option value="Fixed Code">Fixed Code</option>
                  <option value="Variable Code">Variable Code</option>
                </select>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section - Financial Grid */}
        <div className="bottom-section">
          <div className="bottom-grid">
            {/* Left Section - Calculation Grid */}
            <div>
              <div className="calculation-grid">
                <div className="calc-field">
                  <label className="calc-label">Loan Amount</label>
                  <input
                    type="text"
                    value={loanAmount}
                    onChange={(e) => setLoanAmount(e.target.value)}
                    placeholder="₹ 0.00"
                    className="calc-input"
                  />
                  <div className="calc-subtitle">Principal Amount</div>
                </div>
                <div className="calc-field">
                  <label className="calc-label">Tenure</label>
                  <input
                    type="text"
                    value={tenure}
                    onChange={(e) => setTenure(e.target.value)}
                    placeholder="0 Months"
                    className="calc-input"
                  />
                  <div className="calc-subtitle">Loan Period</div>
                </div>
                <div className="calc-field">
                  <label className="calc-label">Est. Amount</label>
                  <input
                    type="text"
                    value={estAmount}
                    onChange={(e) => setEstAmount(e.target.value)}
                    placeholder="₹ 0.00"
                    className="calc-input"
                  />
                  <div className="calc-subtitle">Estimated Value</div>
                </div>
                <div className="calc-field">
                  <label className="calc-label">Interest Rate</label>
                  <input
                    type="text"
                    value={interestRate}
                    onChange={(e) => setInterestRate(e.target.value)}
                    placeholder="0.00%"
                    className="calc-input"
                  />
                  <div className="calc-subtitle">Annual Percentage</div>
                </div>
                <div className="calc-field">
                  <label className="calc-label">FIA Charges</label>
                  <input
                    type="text"
                    value={fiaCharges}
                    onChange={(e) => setFiaCharges(e.target.value)}
                    placeholder=""
                    className="calc-input"
                  />
                </div>
                <div className="calc-field">
                  <label className="calc-label">Int. Period</label>
                  <input
                    type="text"
                    value={intPeriod}
                    onChange={(e) => setIntPeriod(e.target.value)}
                    placeholder="0 Months"
                    className="calc-input"
                  />
                </div>
                <div className="calc-field">
                  <label className="calc-label">Per Int. Amount</label>
                  <input
                    type="text"
                    value={perIntAmount}
                    onChange={(e) => setPerIntAmount(e.target.value)}
                    placeholder=""
                    className="calc-input"
                  />
                </div>
                <div className="calc-field">
                  <label className="calc-label">FI Charges</label>
                  <input
                    type="text"
                    value={fiCharges}
                    onChange={(e) => setFiCharges(e.target.value)}
                    placeholder=""
                    className="calc-input"
                  />
                </div>
              </div>

              {/* PDC Given Checkbox */}
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

            {/* Right Section - Bank Information */}
            <div className="bank-section">
              <div className="bank-field">
                <label className="bank-label">Bank Name</label>
                <input
                  type="text"
                  value={bankName}
                  onChange={(e) => setBankName(e.target.value)}
                  placeholder=""
                  className="bank-input"
                />
              </div>
              <div className="bank-field">
                <label className="bank-label">Bank Account No.</label>
                <input
                  type="text"
                  value={bankAccountNo}
                  onChange={(e) => setBankAccountNo(e.target.value)}
                  placeholder=""
                  className="bank-input"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="action-buttons">
          <button onClick={calculateAndSave} className="action-button primary">
            Calculate & Save
          </button>
          <button onClick={clearAll} className="action-button outline">
            Clear All
          </button>
        </div>
      </div>

      {/* Hidden file input */}
      <input
        type="file"
        ref={hiddenFileInputRef}
        onChange={handleFileChange}
        className="hidden-file-input"
        accept="image/*"
      />
    </div>
    </DashboardLayout>
  );
};

export default LoanEntry;
