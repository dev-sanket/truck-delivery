"use client"

import type React from "react"
import { useState } from "react"
import { IonContent, IonPage, IonInput, IonButton, IonText, IonItem, IonIcon, IonCol, IonGrid, IonRow, IonLabel } from "@ionic/react"

import "../../assets/styles/main.css"
import "./Login.css"
import { Link, useHistory } from 'react-router-dom'
import Header from "../../components/Header"
import { call, callOutline, phoneLandscape } from "ionicons/icons"
import InputBox from "../../components/Input"

const Login: React.FC = () => {
  const [mobileNumber, setMobileNumber] = useState("")
  const history = useHistory<History>();

  const handleLogin = () => {
    history.push('/auth/login-otp');
  };

  const [solidValue, setSolidValue] = useState('');
  const [outlineValue, setOutlineValue] = useState('');


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
                type="text"
                fill="outline"
                label="Mobile Number"
                labelPlacement="floating"
                helperText="Enter a valid number"
                errorText="Invalid number"
                className="custom-input"
                placeholder=""
                mode="md"
              >
                <IonIcon slot="start" icon={callOutline} size="large" aria-hidden="true"></IonIcon>

              </IonInput>
              {/* <InputBox label="Mobile Number"
                defaultValue="Enter Your Mobile Number"
                type="text" icon={<img
                  src={call}
                  alt="phone"
                  style={{ width: 24, height: 24 }}
                />}
                inputProps={{ maxLength: 10, inputMode: "numeric", pattern: "^[6-9][0-9]{9}$" }} /> */}

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

