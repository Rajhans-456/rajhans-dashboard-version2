import React, { useState } from "react";

const AddressCard = ({
  title,
  type,
  data = {},         
  presentData,
  onChange,
  onCopyFromPresent,
}) => {

  const [copyFeedback, setCopyFeedback] = useState(false);

  const cities = [
    { value: "", label: "Select City" },
    { value: "Mumbai", label: "Mumbai" },
    { value: "Delhi", label: "Delhi" },
    { value: "Bangalore", label: "Bangalore" },
    { value: "Chennai", label: "Chennai" },
    { value: "Kolkata", label: "Kolkata" },
  ];

  const handleInputChange = (field, value) => {
    onChange({
      ...data,
      [field]: value,
    });
  };

  const handleCopyFromPresent = () => {
    if (onCopyFromPresent && presentData) {
      onCopyFromPresent();
      setCopyFeedback(true);
      setTimeout(() => setCopyFeedback(false), 1500);
    }
  };

  const isRequired = type === "present" || type === "permanent";

  return (
    <div className="address-card">
      <h3>{title}</h3>

      {type === "permanent" && (
        <div
          className="same-as-present"
          onClick={handleCopyFromPresent}
          style={{
            backgroundColor: copyFeedback ? "#10b981" : "",
            color: copyFeedback ? "white" : "",
          }}
        >
          {copyFeedback ? "Copied!" : "Same as Present"}
        </div>
      )}

      <div className="form-group">
        <label className="form-label">Address Line 1 </label>
        <input
          type="text"
          className="form-input"
          value={data.addressLine1 || ""}
          onChange={(e) => handleInputChange("addressLine1", e.target.value)}
          placeholder="Enter address"
          required={isRequired}
        />
      </div>

      <div className="form-group">
        <label className="form-label">Address Line 2</label>
        <input
          type="text"
          className="form-input"
          value={data.addressLine2 || ""}
          onChange={(e) => handleInputChange("addressLine2", e.target.value)}
          placeholder="Enter address"
        />
      </div>

      <div className="form-group">
        <label className="form-label">City</label>
        <select
          className="form-select"
          value={data.city || ""}
          onChange={(e) => handleInputChange("city", e.target.value)}
          required={isRequired}
        >
          {cities.map((city) => (
            <option key={city.value} value={city.value}>
              {city.label}
            </option>
          ))}
        </select>
      </div>

      <div className="form-group">
        <label className="form-label">PIN Code</label>
        <input
          type="text"
          className="form-input"
          value={data.pinCode || ""}
          onChange={(e) => handleInputChange("pinCode", e.target.value)}
          placeholder="Enter PIN code"
          pattern="[0-9]{6}"
          maxLength="6"
          required={isRequired}
        />
      </div>
    </div>
  );
};

export default AddressCard;
