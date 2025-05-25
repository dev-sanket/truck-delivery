"use client"

import type React from "react"
import { useEffect, useState } from "react"
import { IonContent, IonPage, IonInput, IonButton, IonGrid, IonRow, IonCol, useIonRouter, useIonToast } from "@ionic/react"
import "../../assets/styles/main.css"
import "./LoginOtp.css"
import { postApiCall } from "../api/api"
import Header from "../../components/Header"
import { useLocation } from "react-router-dom";

const LoginOtp: React.FC = () => {
  const location = useLocation<{ mobileNumber: string }>();
  const mobileNumber = location.state?.mobileNumber;
  const [otpArray, setOtpArray] = useState(["", "", "", ""]);
  const [otp, setOtp] = useState("");
  const [present] = useIonToast();
  const presentToast = (message: string,position: 'top' | 'middle' | 'bottom') => {
  present({
    message: message,
    duration: 1500,
    position: position,
  });
  };
  const router = useIonRouter();
  const handleSkip = () => {
    router.push('/app/kyc-verification', 'root', 'replace');
  };

const handleOTP = (e: CustomEvent, index: number) => {
  const value = e.detail.value?.toString() || "";
  const digit = value.slice(0, 1); // Ensure only one digit

  const updatedOtpArray = [...otpArray];
  updatedOtpArray[index] = digit;

  setOtpArray(updatedOtpArray);
  setOtp(updatedOtpArray.join("")); // Update the final OTP value

  // Optional: Auto-focus to next input if digit is entered
  if (digit && index < 3) {
    const nextInput = document.getElementById(`otp-${index + 1}`);
    nextInput?.focus();
  }
  console.log(otpArray,"otpArray")
  console.log(otp,"otp")
};

const handleConfirm = async () =>{
    console.log(otpArray,"otpArray")
    console.log(otp,"otp")
    if(otp.length<4){
      presentToast("Please enter a valid OTP",'middle')
      return
    }
        try {
          console.log("Received mobile number:", mobileNumber);
          const response = await postApiCall({
          "MobileNumber": mobileNumber,
          "otp": otp
          },'verifyotp');
          if(response?.status){
            presentToast(response?.message,'middle')
            console.log('User created:', response);
            router.push('/app/kyc-verification', 'root', 'replace');
          }
        } catch (error:any) {
          presentToast(error?.message,'middle')
          console.error('Error creating user:', error);
        }
}

  return (
    <IonPage>
      <Header showBackButton={true} handleSkip={handleSkip} />
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
                  id={`otp-${index}`}
                  type="text"
                  inputmode="numeric"
                  pattern="[0-9]*"
                  maxlength={1}
                  className="otp-input"
                  value={otpArray[index]}
                  onIonInput={(e) => handleOTP(e, index)}
                ></IonInput>
              </IonCol>
            ))}
          </IonRow>
          <IonRow className="ion-margin-top">
            <IonCol>
              <IonButton expand="block" className="confirm-button" onClick={handleConfirm}>
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

