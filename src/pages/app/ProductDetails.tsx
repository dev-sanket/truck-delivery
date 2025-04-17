"use client"

import type React from "react"
import { useState } from "react"
import { IonContent, IonPage, IonInput, IonButton, IonItem, IonLabel, IonGrid, IonRow, IonCol } from "@ionic/react"
import "./ProductDetails.css"
import Header from "../../components/Header"

const ProductDetails: React.FC = () => {
  const [productType, setProductType] = useState("")
  const [productWeight, setProductWeight] = useState("")
  const [form, setForm] = useState("")
  const [to, setTo] = useState("")

  return (
    <IonPage>
      <Header showBackButton={true} />
      <IonContent className="ion-padding">
         <IonGrid className="ion-no-padding">
            <IonRow>
                <IonCol size="12">
                <div className="product-container">
                  <div className="title">Product Details</div>
                  <div className="subtitle">Please enter your product details</div>
                </div>
                </IonCol>
            </IonRow>
            <IonRow className="pt-2x">
                <IonCol size="12" >
                    <IonInput
                      // className={`${isValid && 'ion-valid'} ${isValid === false && 'ion-invalid'} ${isTouched && 'ion-touched'}`}
                      type="text"
                      fill="outline"
                      label="Product Type"
                      labelPlacement="floating"
                      errorText=""
                      className="custom-input"
                      placeholder="Enter a product type"
                      helperText=""
                      mode="md"
                    >
                    </IonInput>
                </IonCol>
            </IonRow>
            <IonRow className="pt-2x">
                <IonCol size="12" >
                    <IonInput
                      // className={`${isValid && 'ion-valid'} ${isValid === false && 'ion-invalid'} ${isTouched && 'ion-touched'}`}
                      type="text"
                      fill="outline"
                      label="Product Weight"
                      labelPlacement="floating"
                      errorText=""
                      className="custom-input"
                      placeholder="Enter a product weight"
                      helperText=""
                      mode="md"
                    >
                    </IonInput>
                </IonCol>
            </IonRow>
            <IonRow className="pt-2x">
                <IonCol size="12" >
                    <IonInput
                      // className={`${isValid && 'ion-valid'} ${isValid === false && 'ion-invalid'} ${isTouched && 'ion-touched'}`}
                      type="text"
                      fill="outline"
                      label="From"
                      labelPlacement="floating"
                      errorText=""
                      className="custom-input"
                      placeholder="Enter a loading point"
                      helperText=""
                      mode="md"
                    >
                    </IonInput>
                </IonCol>
            </IonRow>
            <IonRow className="pt-2x">
                <IonCol size="12" >
                    <IonInput
                      // className={`${isValid && 'ion-valid'} ${isValid === false && 'ion-invalid'} ${isTouched && 'ion-touched'}`}
                      type="text"
                      fill="outline"
                      label="To"
                      labelPlacement="floating"
                      errorText=""
                      className="custom-input"
                      placeholder="Enter a Unloading point"
                      helperText=""
                      mode="md"
                    >
                    </IonInput>
                </IonCol>
            </IonRow>
            <IonRow className="pt-2x">
                <IonCol size="12" >
                <IonButton expand="block" className="confirm-button" routerLink="/app/dashboard">
            Confirm
          </IonButton>
                </IonCol>
            </IonRow>
         </IonGrid>
      </IonContent>
    </IonPage>
  )
}

export default ProductDetails

