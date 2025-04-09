"use client"

import type React from "react"
import { useState } from "react"
import {
  IonContent,
  IonPage,
  IonInput,
  IonButton,
  IonText,
  IonSelect,
  IonSelectOption,
  IonItem,
  IonLabel,
  IonIcon,
} from "@ionic/react"
import { personOutline, callOutline } from "ionicons/icons"
import Logo from "../components/Logo"
import StatusBar from "../components/StatusBar"
import BackButton from "../components/BackButton"
import "./SignUp.css"
import InputBox from "../components/Input"
import SelectBox from "../components/selectBox"
import {Link ,useHistory} from 'react-router-dom'
import AccountCircle from "@mui/icons-material/AccountCircle"
import CallOutlinedIcon from '@mui/icons-material/CallOutlined';
const SignUp: React.FC = () => {
  const [fullName, setFullName] = useState("")
  const [mobileNumber, setMobileNumber] = useState("")
  const [signupOption, setSignupOption] = useState("")
  const history = useHistory<History>(); 
  const handleSignup = () => {
    history.push('/login'); // Replace with your desired route
  };
  return (
    <IonPage>
      {/* <StatusBar /> */}
      <div className="header">
        <BackButton />
        <Logo />
        <div style={{ width: 40 }}></div> {/* Spacer for alignment */}
      </div>
      <IonContent className="ion-padding">
        <div className="signup-container">
          <h1 className="title">Sign up</h1>
          <p className="subtitle">Please enter your details to get started</p>

          <div className="form-container">
            <div className="input-container">
              {/* <IonLabel className="input-label">Full Name</IonLabel>
              <IonItem className="custom-input">
                <IonIcon icon={personOutline} slot="start" />
                <IonInput
                  placeholder="Enter Your Name"
                  value={fullName}
                  onIonChange={(e) => setFullName(e.detail.value!)}
                />
              </IonItem> */}
              <InputBox label="Full Name" defaultValue="Enter Your Name" icon={<AccountCircle />} ></InputBox>
            </div>

            <div className="input-container">
              {/* <IonLabel className="input-label">Mobile Number</IonLabel>
              <IonItem className="custom-input">
                <IonIcon icon={callOutline} slot="start" />
                <IonInput
                  placeholder="Enter Your Mobile Number"
                  type="tel"
                  value={mobileNumber}
                  onIonChange={(e) => setMobileNumber(e.detail.value!)}
                />
              </IonItem> */}
              <InputBox label="Mobile Number" defaultValue="Enter Your Mobile Number" icon={<CallOutlinedIcon />}/>
            </div>

            <div className="input-container">
              <SelectBox/>               
            </div>
          </div>

          <IonButton expand="block" className="signup-button" onClick={handleSignup}>
            Sign up
          </IonButton>

          {/* <div className="login-link">
            <IonText>Don't Have An Account? </IonText>
            <Link to="/login" className="sign-up-link">
              Sign Up
            </Link>
          </div> */}
        </div>
      </IonContent>
    </IonPage>
  )
}

export default SignUp

