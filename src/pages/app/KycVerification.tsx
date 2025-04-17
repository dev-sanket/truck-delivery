import type React from "react"
import { IonContent, IonPage, IonButton, IonIcon, IonGrid, IonCol, IonRow, IonInput, useIonRouter } from "@ionic/react"
import { cloudUploadOutline, lockClosed, personCircleOutline } from "ionicons/icons"
import "./KycVerification.css"
import Header from "../../components/Header"
import DocumentSelect from "../../components/DocumentSelect"

const KycVerification: React.FC = () => {
  const router = useIonRouter();
  const handleSkip = () => {
    router.push('/app/dashboard');
  };
  return (
    <IonPage>
      <Header showBackButton={false} showSkipIcon={true} handleSkip={handleSkip} />
      <IonContent className="ion-padding">
        <IonGrid className="ion-no-margin">
          <IonRow>
            <IonCol size="12">
              <div className="title">KYC Verification</div>
              <div className="subtitle">Upload your documents to verify your account</div>
            </IonCol>
            <IonCol size="12" className="mt-3x">
              <IonInput
                // className={`${isValid && 'ion-valid'} ${isValid === false && 'ion-invalid'} ${isTouched && 'ion-touched'}`}
                type="text"
                fill="outline"
                label="Full Name"
                labelPlacement="floating"
                helperText=""
                errorText="Invalid name"
                className="custom-input"
                placeholder="Enter a valid name"
                mode="md"
              >
                <IonIcon slot="start" icon={personCircleOutline} aria-hidden="true" size="large"></IonIcon>

              </IonInput>

            </IonCol>
            <IonCol size="12" className="mt-2.5x">
              <DocumentSelect label="Aadhar Document" />

            </IonCol>
            <IonCol size="12" className="mt-2.5x">
              <DocumentSelect label="Pan Document" />

            </IonCol>
            <IonCol size="12" className="mt-2.5x">
              <DocumentSelect label="RC Document" />

            </IonCol>
            <IonCol size="12" className="mt-2.5x">
              <IonButton expand="block" className="upload-button" routerLink="/app/dashboard">
                upload
              </IonButton>
            </IonCol>
          </IonRow>
        </IonGrid>

      </IonContent>
    </IonPage>
  )
}

export default KycVerification

