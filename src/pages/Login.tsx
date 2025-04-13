"use client"

import type React from "react"
import { useState } from "react"
import { IonContent, IonPage, IonInput, IonButton, IonText, IonItem, IonIcon } from "@ionic/react"
import { callOutline } from "ionicons/icons"
import Logo from "../components/Logo"
import StatusBar from "../components/StatusBar"
import BackButton from "../components/BackButton"
import "../assets/styles/main.css"
import "./Login.css"
import InputBox from "../components/Input"
import {Link ,useHistory} from 'react-router-dom'
import CallOutlinedIcon from '@mui/icons-material/CallOutlined';
import Header from "../components/Header"

const Login: React.FC = () => {
  const [mobileNumber, setMobileNumber] = useState("")
  const history = useHistory<History>(); 
  const handleLogin = () => {
    history.push('/login-otp'); // Replace with your desired route
  };
  return (
    <IonPage>
      <StatusBar/>
      <Header/>
      <IonContent className="ion-padding">
        <div className="login-container">
          <div>
          <div className="title">Welcome Back</div>
          <div className="subtitle">Please enter your login credentials</div>
          </div>

          <div className="form-container">
            <div className="input-container">
              {/* <IonItem className="custom-input">
                <IonIcon icon={callOutline} slot="start" />
                <IonInput
                  placeholder="Enter Your Mobile Number"
                  type="tel"
                  value={mobileNumber}
                  onIonChange={(e) => setMobileNumber(e.detail.value!)}
                />
              </IonItem> */}
              <InputBox label="Mobile Number" 
              defaultValue="Enter Your Mobile Number" 
              icon={<CallOutlinedIcon />}
              type="text"
              inputProps={{ maxLength: 10, inputMode: "numeric", pattern: "[0-9]*" }}/>
            </div>
            <IonButton expand="block" className="continue-button" onClick={handleLogin}>
            Continue
          </IonButton>
          </div>

          {/* <div className="signup-link">
            <IonText>Don't Have An Account? </IonText>
            <Link to="/signup" className="sign-up-link">
              Sign Up
            </Link>
          </div> */}
        </div>
      </IonContent>
    </IonPage>
  )
}

export default Login

