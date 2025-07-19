import React, { useState, useRef } from "react";

const PhotoUpload = ({ onPhotoUpload, photoUrl }) => {
  const [uploadError, setUploadError] = useState("");
  const fileInputRef = useRef(null);

  const handleFileSelect = (event) => {
    const file = event.target.files[0];
    if (!file) return;

    setUploadError("");

    // Validate file size (5MB max)
    const maxSize = 5 * 1024 * 1024;
    if (file.size > maxSize) {
      setUploadError("File size must be less than 5MB");
      event.target.value = "";
      return;
    }

    // Validate file type
    const allowedTypes = ["image/jpeg", "image/png", "image/gif"];
    if (!allowedTypes.includes(file.type)) {
      setUploadError("Only JPEG, PNG, and GIF files are allowed");
      event.target.value = "";
      return;
    }

    // Create preview URL
    const reader = new FileReader();
    reader.onload = (e) => {
      onPhotoUpload(e.target.result, file);
    };
    reader.readAsDataURL(file);
  };

  const handleUploadClick = () => {
    fileInputRef.current?.click();
  };

  return (
    <div className="personal-info-section">
      <div className="photo-upload" onClick={handleUploadClick}>
        <input
          ref={fileInputRef}
          type="file"
          accept="image/jpeg,image/png,image/gif"
          onChange={handleFileSelect}
          style={{ display: "none" }}
        />

        {photoUrl ? (
          <img
            src={photoUrl}
            alt="Customer Photo"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              borderRadius: "10px",
            }}
          />
        ) : (
          <div className="photo-placeholder">
            <div
              style={{
                width: "46px",
                height: "46px",
                marginBottom: "8px",
                background: `url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="%2364748b" stroke-width="2"><path d="m9 9 3 3m0 0 3-3m-3 3V4m0 5H4m16 0v10a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h2l2-3h4l2 3h2a2 2 0 0 1 2 2Z"/></svg>') center/contain no-repeat`,
              }}
            ></div>
            <span>Upload Photo</span>
          </div>
        )}
      </div>

      <button className="upload-button" onClick={handleUploadClick}>
        Choose Photo
      </button>

      {uploadError && (
        <div style={{ color: "#ef4444", fontSize: "12px", marginTop: "8px" }}>
          {uploadError}
        </div>
      )}
    </div>
  );
};

export default PhotoUpload;
