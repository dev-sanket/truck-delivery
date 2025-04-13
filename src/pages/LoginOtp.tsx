"use client"

import type React from "react"
import { useState } from "react"
import { IonContent, IonPage, IonInput, IonButton, IonGrid, IonRow, IonCol } from "@ionic/react"
import Logo from "../components/Logo"
import StatusBar from "../components/StatusBar"
import BackButton from "../components/BackButton"
import "./LoginOtp.css"
import Header from "../components/Header"

const LoginOtp: React.FC = () => {
  const [otp, setOtp] = useState("")

  return (
    <IonPage>
      <StatusBar/>
      <Header/>
      <IonContent>
        <div className="otp-container">
          <div>
          <div className="title">Login with OTP</div>
          <div className="subtitle">please enter the OTP we sent to 0000 111 222</div>
          </div>
          
          <div className="otp-input-container">
            {/* <IonGrid>
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
                <IonCol>
                  <IonInput type="number" maxlength={1} className="otp-input"></IonInput>
                </IonCol>
                <IonCol>
                  <IonInput type="number" maxlength={1} className="otp-input"></IonInput>
                </IonCol>
              </IonRow>
            </IonGrid> */}
            <IonGrid>
            <IonRow>
            {[...Array(6)].map((_, index) => (
            <IonCol key={index}>
        <IonInput
          type="text"
          inputmode="numeric"
          pattern="[0-9]*"
          maxlength={1}
          className="otp-input"
          onIonInput={(e) => {
            const input:any = e.target;
            if (input.value.length > 1) {
              input.value = input.value.slice(0, 1);
            }
          }}
        ></IonInput>
            </IonCol>
            ))}
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

