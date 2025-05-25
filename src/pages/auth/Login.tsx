"use client"

import type React from "react"
import { useState } from "react"
import { IonContent, IonPage, IonInput, IonButton, IonText, IonItem, IonIcon, IonCol, IonGrid, IonRow, IonLabel, useIonToast } from "@ionic/react"
import "../../assets/styles/main.css"
import "./Login.css"
import { Link, useHistory } from 'react-router-dom'
import Header from "../../components/Header"
import {callOutline} from "ionicons/icons"
import { postApiCall } from "../api/api"

const Login: React.FC = () => {
  const [present] = useIonToast();
  const presentToast = (message: string,position: 'top' | 'middle' | 'bottom') => {
  present({
    message: message,
    duration: 1500,
    position: position,
  });
  };
  const [mobileNumber, setMobileNumber] = useState("")
    const [error, setError] = useState<string | null>(null)
  const [touched, setTouched] = useState(false)
  // const history = useHistory<History>();
  const history = useHistory();
 const validateMobile = (number: string) => {
    const mobileRegex = /^[6-9]\d{9}$/
    return mobileRegex.test(number)
  }
    const handleChange = (e: CustomEvent) => {
    const value = e.detail.value
    setMobileNumber(value)

    if (!validateMobile(value)) {
      setError("Please enter a valid 10-digit mobile number")
    } else {
      setError(null)
    }
  }
  const handleLogin = async () => {
    setTouched(true)
    if (!validateMobile(mobileNumber)) {
      setError("Please enter a valid 10-digit mobile number")
      return
    }
    try {
      const response = await postApiCall({
      "MobileNumber": mobileNumber
      },'sendOTP');
      if(response?.status){
        presentToast(response?.message,'middle')
        console.log('User created:', response);
        history.push({
        pathname: '/auth/login-otp',
        state: { mobileNumber },
});
      }
    } catch (error:any) {
      presentToast(error?.message,'middle')
      console.error('Error creating user:', error);
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
          <IonRow className="mt-3x">
            <IonCol>

              <IonInput
                // className={`${isValid && 'ion-valid'} ${isValid === false && 'ion-invalid'} ${isTouched && 'ion-touched'}`}
                type="number"
                fill="outline"
                label="Mobile Number"
                labelPlacement="floating"
                errorText="Invalid number"
                className="custom-input"
                placeholder="Enter a valid mobile number"
                helperText=""
                mode="md"
                inputmode="numeric"
                maxlength={10}
                pattern="^[6-9][0-9]{9}$"
                 onIonInput={handleChange}
                 value={mobileNumber}
                  onIonBlur={() => setTouched(true)}
              >
                <IonIcon slot="start" icon={callOutline} size="large" aria-hidden="true"></IonIcon>
              </IonInput>
              {touched && error && (
                <IonText color="danger">
                  <p className="ion-padding-start">{error}</p>
                </IonText>
              )}
            </IonCol>
          </IonRow>
          <IonRow className="ion-margin-top">
            <IonCol>
              <IonButton expand="block" className="continue-button" onClick={handleLogin}>
                Continue
              </IonButton>

            </IonCol>
          </IonRow>
        </IonGrid>

      </IonContent>
    </IonPage>
  )
}

export default Login

