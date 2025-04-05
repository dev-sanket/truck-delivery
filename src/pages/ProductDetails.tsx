"use client"

import type React from "react"
import { useState } from "react"
import { IonContent, IonPage, IonInput, IonButton, IonItem, IonLabel } from "@ionic/react"
import Logo from "../components/Logo"
import StatusBar from "../components/StatusBar"
import BackButton from "../components/BackButton"
import "./ProductDetails.css"

const ProductDetails: React.FC = () => {
  const [productType, setProductType] = useState("")
  const [productWeight, setProductWeight] = useState("")
  const [form, setForm] = useState("")
  const [to, setTo] = useState("")

  return (
    <IonPage>
      <StatusBar />
      <div className="header">
        <BackButton />
        <Logo />
        <div style={{ width: 40 }}></div> {/* Spacer for alignment */}
      </div>
      <IonContent className="ion-padding">
        <div className="product-container">
          <h1 className="title">Product Details</h1>
          <p className="subtitle">Please enter your product details</p>

          <div className="form-container">
            <div className="input-container">
              <IonLabel className="input-label">Product Type</IonLabel>
              <IonItem className="custom-input">
                <IonInput
                  placeholder="Enter Your Product Type"
                  value={productType}
                  onIonChange={(e) => setProductType(e.detail.value!)}
                />
              </IonItem>
            </div>

            <div className="input-container">
              <IonLabel className="input-label">Product Weight</IonLabel>
              <IonItem className="custom-input">
                <IonInput
                  placeholder="Enter Your Product Weight"
                  value={productWeight}
                  onIonChange={(e) => setProductWeight(e.detail.value!)}
                />
              </IonItem>
            </div>

            <div className="input-container">
              <IonLabel className="input-label">From</IonLabel>
              <IonItem className="custom-input">
                <IonInput placeholder="Enter Loading Here" value={form} onIonChange={(e) => setForm(e.detail.value!)} />
              </IonItem>
            </div>

            <div className="input-container">
              <IonLabel className="input-label">To</IonLabel>
              <IonItem className="custom-input">
                <IonInput placeholder="Enter Unloading Here" value={to} onIonChange={(e) => setTo(e.detail.value!)} />
              </IonItem>
            </div>
          </div>

          <IonButton expand="block" className="confirm-button">
            Confirm
          </IonButton>
        </div>
      </IonContent>
    </IonPage>
  )
}

export default ProductDetails

