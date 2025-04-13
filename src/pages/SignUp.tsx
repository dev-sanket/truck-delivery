"use client"

import type React from "react"
import { useState ,useEffect, useRef} from "react"
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
import Header from "../components/Header"
const SignUp: React.FC = () => {
  const contentRef = useRef<HTMLIonContentElement>(null);
  useEffect(() => {
    const ionContentEl = contentRef.current;
    if (ionContentEl) {
      // Get the shadow DOM root
      const shadowRoot = ionContentEl.shadowRoot;
      if (shadowRoot) {
        const scrollEl = shadowRoot.querySelector('.inner-scroll');
        if (scrollEl) {
          // Remove all classes from the scroll element
          scrollEl.className = '';
        }
      }

      // Remove all classes from the IonContent host element itself
      ionContentEl.className = '';
    }
  }, []);
  const [fullName, setFullName] = useState("")
  const [mobileNumber, setMobileNumber] = useState("")
  const [signupOption, setSignupOption] = useState("")
  const history = useHistory<History>(); 
  const handleSignup = () => {
    history.push('/login'); // Replace with your desired route
  };
  return (
    <IonPage>
      <StatusBar />
      {/* <div className="header">
        <BackButton />
        <Logo />
        <div></div>
      </div> */}
      <Header/>
      <IonContent ref={contentRef}>
        <div className="signup-container">
          <div className="sign-up-header">
            <div className="title">Sign up</div>
            <div className="subtitle">Please enter your details to get started</div>
          </div>

          <div className="form-container">
            <div className="input-container">
              <InputBox label="Full Name" defaultValue="Enter Your Name" icon={<AccountCircle />} ></InputBox>
            </div>

            <div className="input-container">
              <InputBox label="Mobile Number" defaultValue="Enter Your Mobile Number" icon={<CallOutlinedIcon />}/>
            </div>

            <div className="input-container">
              <SelectBox/>               
            </div>
            <IonButton expand="block" className="signup-button" onClick={handleSignup}>
            Sign up
          </IonButton>
          </div>



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

