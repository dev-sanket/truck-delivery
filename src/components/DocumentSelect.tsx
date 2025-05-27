"use client"
import type React from "react"
import './DocumentSelect.css'
import { IonIcon, useIonToast } from "@ionic/react";
import { cloudUploadOutline } from "ionicons/icons";
import { useRef } from "react";
type DocumentSelectProps = {
  label: string;
  name: string;
  setFieldValue: (field: string, value: File | null) => void;
  error?: string;
  touched?: boolean;
};
const DocumentSelect: React.FC<DocumentSelectProps> = ({
  label,
  name,
  setFieldValue,
  error,
  touched,
}) => {
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    const isValidType = file.type === "image/jpeg";
    const isValidSize = file.size <= 5 * 1024 * 1024;

    if (!isValidType) {
      presentToast("Only JPG files are allowed.","top","danger");
      return;
    }
    if (!isValidSize) {
      presentToast("File size should not exceed 5MB.","top","danger");
      return;
    }
    setFieldValue(name, file);
  };
  const [present] = useIonToast();
  const presentToast = (message: string, position: 'top' | 'middle' | 'bottom', color: 'danger' | 'success' | 'warning' = 'success') => {
    present({
      message: message,
      duration: 1500,
      position: position,
      color: color,
    });
  };
  return (
    <div className="document-section">
      <div className="document-title">{label}</div>
      <div className={`upload-box ${touched && error ? 'upload-error' : ''}`}>
        <div className="upload-icon">
          <IonIcon icon={cloudUploadOutline} />
        </div>
        <div className="upload-text">
          <div className="document-label">Select Document Upload</div>
          <div className="upload-format">Supported Format: JPG (Max 5MB)</div>
          <div className="select-document-wrapper">
            <div className="select-document">Select Document</div>
            <input
              type="file"
              accept="image/jpeg"
              onChange={handleFileChange}
               className="file-input"
            />
            {touched && error && <div className="error-text">{error}</div>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DocumentSelect

