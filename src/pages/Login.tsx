"use client"

import type React from "react"
import { useState } from "react"
import { IonContent, IonPage, IonInput, IonButton, IonText, IonItem, IonIcon, IonCol, IonGrid, IonRow } from "@ionic/react"

import "../assets/styles/main.css"
import "./Login.css"
import InputBox from "../components/Input"
import { Link, useHistory } from 'react-router-dom'
import Header from "../components/Header"

const Login: React.FC = () => {
  const [mobileNumber, setMobileNumber] = useState("")
  const history = useHistory<History>();

  const handleLogin = () => {
    history.push('/login-otp'); // Replace with your desired route
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
                type="tel"
                fill="outline"
                label="Mobile Number"
                labelPlacement="floating"
                helperText="Enter a valid email"
                errorText="Invalid email"
                className="custom-input"
                placeholder=""
              />

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

