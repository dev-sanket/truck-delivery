"use client"

import type React from "react"
import { useState } from "react"
import { IonContent, IonPage, IonInput, IonButton, IonGrid, IonRow, IonCol } from "@ionic/react"
import "../assets/styles/main.css"
import "./LoginOtp.css"

import Header from "../components/Header"

const LoginOtp: React.FC = () => {
  const [otp, setOtp] = useState("")

  return (
    <IonPage>
      <Header showBackButton={true} />
      <IonContent className="ion-padding">

        <IonGrid className="ion-no-margin">
          <IonRow>
            <IonCol>
              <div className="title">Login with OTP</div>
              <div className="subtitle">please enter the OTP we sent to 0000 111 222</div>
            </IonCol>
          </IonRow>
          <IonRow className="mt-3x">
            {[...Array(4)].map((_, index) => (
              <IonCol key={index}>
                <IonInput
                  type="text"
                  inputmode="numeric"
                  pattern="[0-9]*"
                  maxlength={1}
                  className="otp-input"
                  onIonInput={(e) => {
                    const input: any = e.target;
                    if (input.value.length > 1) {
                      input.value = input.value.slice(0, 1);
                    }
                  }}
                ></IonInput>
              </IonCol>
            ))}
          </IonRow>
          <IonRow className="ion-margin-top">
            <IonCol>
              <IonButton expand="block" className="confirm-button" routerLink="/dashboard">
                Confirm
              </IonButton>
            </IonCol>
          </IonRow>
        </IonGrid>

        {/* <IonGrid>
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
                    const input: any = e.target;
                    if (input.value.length > 1) {
                      input.value = input.value.slice(0, 1);
                    }
                  }}
                ></IonInput>
              </IonCol>
            ))}
          </IonRow>
        </IonGrid> */}

        {/* <IonButton expand="block" className="confirm-button" routerLink="/dashboard">
        Confirm
      </IonButton> */}

      </IonContent >
    </IonPage >
  )
}

export default LoginOtp

