import type React from "react"
import { IonContent, IonPage, IonButton, IonIcon } from "@ionic/react"
import { cloudUploadOutline } from "ionicons/icons"
import Logo from "../components/Logo"
import StatusBar from "../components/StatusBar"
import BackButton from "../components/BackButton"
import "./KycVerification.css"
import Header from "../components/Header"
import InputBox from "../components/Input"
import AccountCircle from "@mui/icons-material/AccountCircle"
import DocumentSelect from "../components/DocumentSelect"

const KycVerification: React.FC = () => {
  return (
    <IonPage>
      <StatusBar/>
      <Header/>
      <IonContent >
        <div className="kyc-container">
          <div>
            <div className="title">KYC Verification</div>
            <div className="subtitle">Upload your documents to verify your account</div>
          </div>

          <div className="input-container">
                  <InputBox label="Full Name" defaultValue="Enter Your Name" icon={<AccountCircle />} ></InputBox>
          </div>

          <div className="documents-container">
            
            {/* <div className="document-section">
              <div className="document-title">Aadhar Document</div>
              <div className="upload-box">
                <div className="upload-icon">
                  <IonIcon icon={cloudUploadOutline} />
                </div>
                <div className="upload-text">
                  <div>Select Document Upload</div>
                  <div className="upload-format">Supported Format: jpg/pdf (2mb)</div>
                <div className="select-document">Select Document</div>
                </div>
              </div>
            </div> */}

              <DocumentSelect label="Aadhar Document"/>

            {/* <div className="document-section">
              <div className="document-title">Pan Document</div>
              <div className="upload-box">
                <div className="upload-icon">
                  <IonIcon icon={cloudUploadOutline} />
                </div>
                <div className="upload-text">
                  <div>Select Document Upload</div>
                  <div className="upload-format">Supported Format: jpg/pdf (2mb)</div>
                  <div className="select-document">Select Document</div>
                </div>
              </div>
            </div> */}

              <DocumentSelect label="Pan Document"/>

            {/* <div className="document-section">
              <div className="document-title">RC Document</div>
              <div className="upload-box">
                <div className="upload-icon">
                  <IonIcon icon={cloudUploadOutline} />
                </div>
                <div className="upload-text">
                  <div>Select Document Upload</div>
                  <div className="upload-format">Supported Format: jpg/pdf (2mb)</div>
                <div className="select-document">Select Document</div>
                </div>
              </div>
            </div> */}

              <DocumentSelect label="RC Document"/>

            <IonButton expand="block" className="upload-button">
                upload
              </IonButton>
          </div>
        </div>
      </IonContent>
    </IonPage>
  )
}

export default KycVerification

