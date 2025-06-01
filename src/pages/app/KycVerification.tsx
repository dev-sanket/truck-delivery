import React, { useState } from "react"
import { IonContent, IonPage, IonButton, IonGrid, IonCol, IonRow, IonInput, useIonRouter, useIonToast, IonSpinner } from "@ionic/react"
import "./KycVerification.css"
import "../../assets/styles/main.css"
import Header from "../../components/Header"
import DocumentSelect from "../../components/DocumentSelect"
import { useAuth } from "../../store/AuthContext";
import { postApiCall, uploadFileAPI } from "../../utils/api/api";
import { KycFormValidation } from "../../utils/validator"
import { Formik, FormikValues } from "formik";

const KycVerification: React.FC = () => {
  const router = useIonRouter();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [present] = useIonToast();
  const { user } = useAuth();

  const presentToast = (message: string, position: 'top' | 'middle' | 'bottom', color: 'danger' | 'success' | 'warning' = 'success') => {
    present({
      message: message,
      duration: 1500,
      position: position,
      color: color,
    });
  };
  const initialValues = {
    FullName: "",
    AadharDocument: null,
    PanDocument: null,
    RCDocument: null,
  }

  const handleSkip = () => {
    router.push('/app/dashboard');
  };

  const handleSubmit = async (values: FormikValues) => {
    setIsLoading(true);
    const postFileName = new FormData();
    // let PostFileName:any=[]
    postFileName.append("PostFileName", values['AadharDocument']);
    postFileName.append("PostFileName", values['PanDocument']);
    postFileName.append("PostFileName", values['RCDocument']);
    const kycData = {
      UsersID: Number(user?.UsersID),
      FullName: values.FullName,
      AadharDocument: values['AadharDocument']['name'],
      PanDocument: values['PanDocument']['name'],
      RCDocument: values['RCDocument']['name'],
    };

    try {
      const fileUploadResponse = await uploadFileAPI(postFileName, 'uploadfileinserver');
      if (fileUploadResponse?.status) {
        // Only call KYCVerification if uploadfileinserver succeeded
        const kycVerificationResponse = await postApiCall({ ...kycData, UsersID: user?.UsersID }, 'KYCVerification');
        if (kycVerificationResponse?.status) {
          // Both calls succeeded
          console.log('KYC verification successful', kycVerificationResponse);
          presentToast("KYC verification successful", "top", "success");
          router.push('/app/dashboard');
        } else {
          // Handle failure in KYCVerification
          presentToast("KYC verification failed!", "top", "danger");
          console.error('KYC verification failed', kycVerificationResponse);
        }
      } else {
        // Handle failure in file upload
        presentToast("File upload failed!", "top", "danger");
        console.error('File upload failed', fileUploadResponse);
      }
    } catch (error) {
      // Handle unexpected errors
      presentToast("OOps something is wrong!", "top", "danger");
      console.error('API call error:', error);
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <IonPage>
      <Header showBackButton={false} showSkipIcon={true} handleSkip={handleSkip} />
      <IonContent className="ion-padding">
        <Formik
          initialValues={initialValues}
          validationSchema={KycFormValidation}
          onSubmit={handleSubmit}
        >
          {({ values, errors, touched, setFieldValue, handleChange, handleSubmit }) => (
            <form onSubmit={handleSubmit}>
              <IonGrid className="ion-no-margin">
                <IonRow>
                  <IonCol size="12">
                    <div className="title">KYC Verification</div>
                    <div className="subtitle">Upload your documents to verify your account</div>
                  </IonCol>
                  <IonCol size="12" className="mt-3x">
                    <IonInput
                      className={`custom-input ${errors.FullName && 'ion-invalid'} ${touched.FullName && 'ion-touched'}`}
                      type="text"
                      fill="outline"
                      label="Full Name"
                      labelPlacement="floating"
                      placeholder="Enter your full name"
                      mode="md"
                      errorText={errors.FullName}
                      value={values.FullName}
                      onIonInput={(e: any) => setFieldValue("FullName", e.detail.value)}
                    />
                    {/* {touched.FullName && errors.FullName && (
                      <div className="error-text">{errors.FullName}</div>
                    )} */}
                  </IonCol>

                  <IonCol size="12" className="mt-2.5x">
                    <DocumentSelect
                      label="Aadhar Document"
                      name="AadharDocument"
                      selectedDocument={values.AadharDocument as File | null}
                      setFieldValue={setFieldValue}
                      error={errors.AadharDocument as string}
                      touched={touched.AadharDocument}
                    />
                  </IonCol>
                  <IonCol size="12" className="mt-2.5x">
                    <DocumentSelect
                      label="Pan Document"
                      name="PanDocument"
                      selectedDocument={values.PanDocument as File | null}
                      setFieldValue={setFieldValue}
                      error={errors.PanDocument as string}
                      touched={touched.PanDocument}
                    />
                  </IonCol>
                  <IonCol size="12" className="mt-2.5x">
                    <DocumentSelect
                      label="RC Document"
                      name="RCDocument"
                      selectedDocument={values.RCDocument as File | null}
                      setFieldValue={setFieldValue}
                      error={errors.RCDocument as string}
                      touched={touched.RCDocument}
                    />
                  </IonCol>
                  <IonCol size="12" className="mt-2.5x">
                    <IonButton expand="block" type="submit" className="upload-button" disabled={!values.AadharDocument || !values.PanDocument || !values.RCDocument || isLoading}>
                      {isLoading && <IonSpinner name="crescent" slot="start" />}
                      {isLoading ? 'Uploading...' : 'Upload'}
                    </IonButton>
                  </IonCol>
                </IonRow>
              </IonGrid>
            </form>
          )}
        </Formik>
      </IonContent>
    </IonPage>
  );
}

export default KycVerification

