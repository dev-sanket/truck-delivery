"use client"

import type React from "react"
import { useState } from "react"
import { IonContent, IonPage, IonInput, IonButton, IonGrid, IonRow, IonCol } from "@ionic/react"
import Logo from "../components/Logo"
import StatusBar from "../components/StatusBar"
import BackButton from "../components/BackButton"
import "./LoginOtp.css"

const LoginOtp: React.FC = () => {
  const [otp, setOtp] = useState("")

  return (
    <IonPage>
      <StatusBar />
      <div className="header">
        <BackButton />
        <Logo />
        <div style={{ width: 40 }}></div> {/* Spacer for alignment */}
      </div>
      <IonContent className="ion-padding">
        <div className="otp-container">
          <h1 className="title">Login with OTP</h1>
          <p className="subtitle">please enter the OTP we sent to 0000 111 222</p>

          <div className="otp-input-container">
            <IonGrid>
              <IonRow>
                <IonCol>
                  <IonInput type="number" maxlength={1} className="otp-input"></IonInput>
                </IonCol>
                <IonCol>
                  <IonInput type="number" maxlength={1} className="otp-input"></IonInput>
                </IonCol>
                <IonCol>
                  <IonInput type="number" maxlength={1} className="otp-input"></IonInput>
                </IonCol>
                <IonCol>
                  <IonInput type="number" maxlength={1} className="otp-input"></IonInput>
                </IonCol>
              </IonRow>
            </IonGrid>
          </div>

          <IonButton expand="block" className="confirm-button" routerLink="/dashboard">
            Confirm
          </IonButton>
        </div>
      </IonContent>
    </IonPage>
  )
}

export default LoginOtp

