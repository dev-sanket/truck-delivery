"use client"
import type React from "react"
import './DocumentSelect.css'
import { IonIcon } from "@ionic/react";
import { cloudUploadOutline } from "ionicons/icons";
type DocumentSelectProps = {
    label: string;
  };
const DocumentSelect: React.FC <DocumentSelectProps> = ({ label })  => {
  return (
    <>
            <div className="document-section">
              <div className="document-title">{label}</div>
              <div className="upload-box">
                <div className="upload-icon">
                  <IonIcon icon={cloudUploadOutline} />
                </div>
                <div className="upload-text">
                  <div className="document-label">Select Document Upload</div>
                  <div className="upload-format">Supported Format: jpg/pdf (2mb)</div>
                <div className="select-document">Select Document</div>
                </div>
              </div>
            </div>
    </>
  )
}

export default DocumentSelect

