"use client"

import type React from "react"
import { useState } from "react"
import { IonContent, IonPage, IonInput, IonButton, IonText, IonItem, IonIcon, IonCol, IonGrid, IonRow, IonLabel } from "@ionic/react"
import "../../assets/styles/main.css"
import "./Login.css"
import { Link, useHistory } from 'react-router-dom'
import Header from "../../components/Header"
import {callOutline} from "ionicons/icons"
import { postApiCall } from "../api/api"

const Login: React.FC = () => {
  const [mobileNumber, setMobileNumber] = useState("")
  const history = useHistory<History>();

  const handleLogin = async () => {
    history.push('/auth/login-otp');
        try {
      const response = await postApiCall({
      "MobileNumber": "8527426845"
      },'sendOTP');
      console.log('User created:', response);
    } catch (error) {
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
              >
                <IonIcon slot="start" icon={callOutline} size="large" aria-hidden="true"></IonIcon>
              </IonInput>

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

