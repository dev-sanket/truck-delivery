import type React from "react"
import { IonContent, IonPage, IonButton, IonIcon, IonGrid, IonCol, IonRow, IonInput, useIonRouter, useIonToast } from "@ionic/react"
import { cloudUploadOutline, lockClosed, personCircleOutline } from "ionicons/icons"
import "./KycVerification.css"
import "../../assets/styles/main.css"
import Header from "../../components/Header"
import DocumentSelect from "../../components/DocumentSelect"
import { useAuth } from "../../store/AuthContext";
import { getApiCall, postApiCall, uploadFileAPI } from "../../utils/api/api";
import { KycFormValidation } from "../../utils/validator"
import { Formik } from "formik";
import * as Yup from "yup";
import { useEffect, useState } from "react"
interface UserData {
  KYCVerification: boolean;
  UserDetails: {
    UsersID: string;
    FullName: string;
    MobileNumber: string;
    AadharDocument: string;
    PanDocument: string;
    RCDocument: string;
  }
}
const KycVerification: React.FC = () => {
    const [userData, setUserData] = useState<UserData>();
  const router = useIonRouter();
  const handleSkip = () => {
    if(userData?.KYCVerification){
      router.push('/app/dashboard');
    }else{
      presentToast('Please verify your KYC!','top','danger')
    }
  };
    const [present] = useIonToast();
    const { user } = useAuth();
    console.log("USER --- ",user)
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
    useEffect(() => {
      getUserData()
    },[])
    const getUserData = async () => {
      const response = await postApiCall({
        "UsersID": user?.UsersID
      }, "dashboard");
      console.log(response);
      if (response?.status) {
        setUserData(response.data);
      }
    };
    const handleSubmit = async (values: any) => {
      let PostFileName = new FormData();
      // let PostFileName:any=[]
      PostFileName.append("PostFileName", values['AadharDocument']);
      PostFileName.append("PostFileName", values['PanDocument']);
      PostFileName.append("PostFileName", values['RCDocument']);
      let kycData = {
        UsersID: Number  (user?.UsersID),
        FullName: values.FullName,
        AadharDocument:values['AadharDocument']['name'],
        PanDocument: values['PanDocument']['name'],
        RCDocument:values['RCDocument']['name'],
      };
      console.log(PostFileName,"PostFileName")
      console.log(kycData,"kycData")
try {
  const response1 = await uploadFileAPI(PostFileName, 'uploadfileinserver');
  if (response1?.status) {
    // Only call KYCVerification if uploadfileinserver succeeded
    const response2 = await postApiCall({ kycData }, 'KYCVerification');
    if (response2?.status) {
      // Both calls succeeded
      presentToast("KYC verification successful","top","success");
      console.log('KYC verification successful', response2);
    } else {
      // Handle failure in KYCVerification
      presentToast("KYC verification failed!","top","danger");
      console.error('KYC verification failed', response2);
    }
  } else {
    // Handle failure in file upload
    presentToast("File upload failed!","top","danger");
    console.error('File upload failed', response1);
  }
} catch (error) {
  // Handle unexpected errors
  presentToast("OOps something is wrong!","top","danger");
  console.error('API call error:', error);
}


    // router.push("/app/dashboard");
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
                      setFieldValue={setFieldValue}
                      error={errors.AadharDocument as string}
                      touched={touched.AadharDocument}
                    />
                  </IonCol>
                  <IonCol size="12" className="mt-2.5x">
                    <DocumentSelect
                      label="Pan Document"
                      name="PanDocument"
                      setFieldValue={setFieldValue}
                      error={errors.PanDocument as string}
                      touched={touched.PanDocument}
                    />
                  </IonCol>
                  <IonCol size="12" className="mt-2.5x">
                    <DocumentSelect
                      label="RC Document"
                      name="RCDocument"
                      setFieldValue={setFieldValue}
                      error={errors.RCDocument as string}
                      touched={touched.RCDocument}
                    />
                  </IonCol>
                  <IonCol size="12" className="mt-2.5x">
                    <IonButton expand="block" type="submit" className="upload-button">
                      Upload
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

