"use client"

import type React from "react"
import { useEffect, useState } from "react"
import { IonContent, IonPage, IonInput, IonButton, IonGrid, IonRow, IonCol, useIonRouter, useIonToast, IonSpinner } from "@ionic/react"
import "../../assets/styles/main.css"
import "./LoginOtp.css"
import { postApiCall } from "../../utils/api/api"
import Header from "../../components/Header"
import { useLocation } from "react-router-dom";
import OtpInput from 'react-otp-input';
import { useAuth } from "../../store/AuthContext"


const LoginOtp: React.FC = () => {
  const location = useLocation<{ mobileNumber: string }>();
  const mobileNumber = location.state?.mobileNumber;
  const { login } = useAuth();

  const [present] = useIonToast();
  const [otp, setOtp] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const presentToast = (message: string, position: 'top' | 'middle' | 'bottom', color: 'danger' | 'success' | 'warning' = 'success') => {
    present({
      message: message,
      duration: 1500,
      position: position,
      color: color,
    });
  };
  const router = useIonRouter();
  const handleSkip = () => {
    
  };


  const handleOtpSubmit = async () => {
    setIsLoading(true);
    setErrorMessage("");
    try {
      console.log("Received OTP:", otp, "Received mobile number:", mobileNumber);
      const response = await postApiCall({
        "MobileNumber": mobileNumber,
        "otp": otp
      }, 'verifyotp');
      if (response?.status) {
        presentToast(response?.message, 'top', 'success')
        console.log('OTP verified:', response);
        login(response.data);
        router.push('/app/kyc-verification', 'root', 'replace');
      } else {
        const errorMessage = response?.errors?.errorMessage || response?.message || "Something went wrong";
        presentToast(errorMessage, 'top', 'danger')
        setErrorMessage(errorMessage);
      }
    } catch (error: any) {
      presentToast(error?.message, 'top', 'danger')
      console.error('Error creating user:', error);
    } finally {
      setIsLoading(false);
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
            <IonCol>

              <OtpInput
                value={otp}
                onChange={(value) => {
                  setOtp(value);
                  setErrorMessage("");
                }}
                numInputs={4}
                containerStyle={{
                  width: '100%',
                  display: 'flex',
                  justifyContent: 'space-between',
                  gap: '10px',
                }}
                renderSeparator={<span>-</span>}

                inputStyle={{
                  width: '70px',
                  height: '75px',
                  fontSize: '28px',
                  fontWeight: '500',
                  color: '#000',
                  backgroundColor: '#f5f5f5',
                  border: errorMessage ? '1px solid #ff0000' : '1px solid #ccc',
                  borderRadius: '8px',
                  textAlign: 'center',
                }}
                renderInput={(props) => <input {...props} type="number" inputMode="numeric" pattern="[0-9]*" />}
              />
              {errorMessage && <div className="error-message mt-1.5x">{errorMessage}</div>}
            </IonCol>

          </IonRow>
          <IonRow className="ion-margin-top">
            <IonCol className="ion-no-padding">
              <IonButton expand="block" className="confirm-button" onClick={handleOtpSubmit} disabled={isLoading || otp.length < 4}>
                {isLoading ? <IonSpinner slot="end" name="crescent" /> : "Confirm"}
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

