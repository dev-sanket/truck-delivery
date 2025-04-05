import type React from "react"
import { IonContent, IonPage, IonButton, IonIcon } from "@ionic/react"
import { cloudUploadOutline } from "ionicons/icons"
import Logo from "../components/Logo"
import StatusBar from "../components/StatusBar"
import BackButton from "../components/BackButton"
import "./KycVerification.css"

const KycVerification: React.FC = () => {
  return (
    <IonPage>
      <StatusBar />
      <div className="header">
        <BackButton />
        <Logo />
        <div style={{ width: 40 }}></div> {/* Spacer for alignment */}
      </div>
      <IonContent className="ion-padding">
        <div className="kyc-container">
          <h1 className="title">KYC Verification</h1>
          <p className="subtitle">Upload your documents to verify your account</p>

          <div className="documents-container">
            <div className="document-section">
              <div className="document-title">Aadhar Document</div>
              <div className="upload-box">
                <div className="upload-icon">
                  <IonIcon icon={cloudUploadOutline} />
                </div>
                <div className="upload-text">
                  <div>Select Document Upload</div>
                  <div className="upload-format">Supported Format: jpg/pdf (2mb)</div>
                </div>
              </div>
              <div className="select-document">Select Document</div>
            </div>

            <div className="document-section">
              <div className="document-title">Pan Document</div>
              <div className="upload-box">
                <div className="upload-icon">
                  <IonIcon icon={cloudUploadOutline} />
                </div>
                <div className="upload-text">
                  <div>Select Document Upload</div>
                  <div className="upload-format">Supported Format: jpg/pdf (2mb)</div>
                </div>
              </div>
              <div className="select-document">Select Document</div>
            </div>

            <div className="document-section">
              <div className="document-title">RC Document</div>
              <div className="upload-box">
                <div className="upload-icon">
                  <IonIcon icon={cloudUploadOutline} />
                </div>
                <div className="upload-text">
                  <div>Select Document Upload</div>
                  <div className="upload-format">Supported Format: jpg/pdf (2mb)</div>
                </div>
              </div>
              <IonButton expand="block" className="upload-button">
                upload
              </IonButton>
            </div>
          </div>
        </div>
      </IonContent>
    </IonPage>
  )
}

export default KycVerification

