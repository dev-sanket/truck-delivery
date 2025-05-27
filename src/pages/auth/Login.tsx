"use client"

import type React from "react"
import { useState } from "react"
import { IonContent, IonPage, IonInput, IonButton, IonText, IonItem, IonIcon, IonCol, IonGrid, IonRow, IonLabel, useIonToast, IonSpinner } from "@ionic/react"
import "../../assets/styles/main.css"
import "./Login.css"
import { Link, useHistory } from 'react-router-dom'
import Header from "../../components/Header"
import { callOutline } from "ionicons/icons"
import { postApiCall } from "../../utils/api/api"
import { LoginFormValidation } from "../../utils/validator"
import { Formik, useFormik } from "formik"

const Login: React.FC = () => {
  const [present] = useIonToast();
  const presentToast = (message: string, position: 'top' | 'middle' | 'bottom', color: 'danger' | 'success' | 'warning' = 'success') => {
    present({
      message: message,
      duration: 1500,
      position: position,
      color: color,
    });
  };
  const initialValues = {
    mobileNumber: "",
  }

  // const [mobileNumber, setMobileNumber] = useState("")
  const [error, setError] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState(false)

  // const history = useHistory<History>();
  const history = useHistory();


  const handleLogin = async (values: any) => {
    console.log("Pressed Continue button", values);
    const { mobileNumber } = values;
    try {
      setIsLoading(true)
      const response = await postApiCall({
        "MobileNumber": mobileNumber
      }, 'sendOTP');
      if (response?.status) {
        presentToast(response?.message, 'top')
        console.log('User created:', response);
        history.push({
          pathname: '/auth/login-otp',
          state: { mobileNumber },
        });
      } else {
        const errorMessage = response?.errors?.errorMessage || response?.message || "Something went wrong";
        presentToast(errorMessage, 'top', 'danger')
      }
    } catch (error: any) {
      presentToast(error?.message, 'top', 'danger')
      console.error('Error creating user:', error);
    } finally {
      setIsLoading(false)
    }
  };

  return (
    <IonPage>
      {/* <StatusBar/> */}
      <Header showBackButton={false} />
      <IonContent className="ion-padding">

        <IonGrid className="ion-no-margin">
          <IonRow>
            <IonCol>
              <div className="title">Welcome Back</div>
              <div className="subtitle">Please enter your login credentials</div>
            </IonCol>
          </IonRow>
          <Formik initialValues={initialValues} validationSchema={LoginFormValidation} onSubmit={handleLogin}>
            {({ values, errors, touched, handleChange, handleBlur, setFieldValue }) => (
              <>
                <IonRow className="mt-3x">

                  <IonCol>

                    <IonInput
                      className={`custom-input ${errors.mobileNumber && 'ion-invalid'} ${touched.mobileNumber && 'ion-touched'}`}
                      fill="outline"
                      name="mobileNumber"
                      type="number"
                      inputmode="numeric"
                      label="Mobile Number"
                      labelPlacement="floating"
                      errorText={errors.mobileNumber}
                      placeholder="Enter a valid mobile number"
                      mode="md"
                      pattern="^[6-9][0-9]{9}$"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.mobileNumber}
                    >
                      <IonIcon slot="start" icon={callOutline} size="large" aria-hidden="true"></IonIcon>
                    </IonInput>
                  </IonCol>
                </IonRow>
                <IonRow className="ion-margin-top">
                  <IonCol>
                    <IonButton expand="block" className="continue-button"
                      type="submit"

                      onClick={(e) => {
                        e.preventDefault();
                        handleLogin(values);
                      }}
                      disabled={Boolean(!values.mobileNumber || errors.mobileNumber || !touched.mobileNumber || isLoading)}
                    >
                      {isLoading ? <IonSpinner slot="end" name="crescent" /> : "Continue"}
                    </IonButton>

                  </IonCol>
                </IonRow>
              </>
            )}
          </Formik>
        </IonGrid>

      </IonContent>
    </IonPage >
  )
}

export default Login

