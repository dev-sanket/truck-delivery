"use client"

import type React from "react"
import { useState } from "react"
import { IonContent, IonPage, IonInput, IonButton, IonItem, IonLabel, IonGrid, IonRow, IonCol, IonList, IonSelect, IonSelectOption } from "@ionic/react"
import "./CreateNewLoad.css"
import Header from "../../components/Header"

const CreateNewLoad: React.FC = () => {


  return (
    <IonPage>
      <Header showBackButton={true} />
      <IonContent className="ion-padding">
        <IonGrid className="ion-no-padding">
          <IonRow>
            <IonCol size="12">
              <div className="product-container">
                <div className="title">Create New Load</div>
                <div className="subtitle">Please enter your load details</div>
              </div>
            </IonCol>
          </IonRow>
          <IonRow className="pt-2x">
            <IonCol size="12" >
              <form style={{ width: '100%', padding: '0px 10px' }}>


                <IonInput
                  // className={`${isValid && 'ion-valid'} ${isValid === false && 'ion-invalid'} ${isTouched && 'ion-touched'}`}
                  type="text"
                  fill="outline"
                  label="Loading Point"
                  labelPlacement="floating"
                  errorText=""
                  className="custom-input mb-1.5x"
                  placeholder="Enter a loading point"
                  helperText=""
                  mode="md"
                />

                <IonInput
                  // className={`${isValid && 'ion-valid'} ${isValid === false && 'ion-invalid'} ${isTouched && 'ion-touched'}`}
                  type="text"
                  fill="outline"
                  label="Unloading Point"
                  labelPlacement="floating"
                  errorText=""
                  className="custom-input mb-1.5x"
                  placeholder="Enter a Unloading point"
                  helperText=""
                  mode="md"
                />
                <IonInput
                  // className={`${isValid && 'ion-valid'} ${isValid === false && 'ion-invalid'} ${isTouched && 'ion-touched'}`}
                  type="text"
                  fill="outline"
                  label="Vehicle Type"
                  labelPlacement="floating"
                  errorText=""
                  className="custom-input mb-1.5x"
                  placeholder="Enter a vehicle type"
                  helperText=""
                  mode="md"
                />
                <IonInput
                  // className={`${isValid && 'ion-valid'} ${isValid === false && 'ion-invalid'} ${isTouched && 'ion-touched'}`}
                  type="number"
                  fill="outline"
                  label="Product Weight"
                  labelPlacement="floating"
                  errorText=""
                  className="custom-input mb-1.5x"
                  placeholder="Enter a product weight"
                  helperText=""
                  mode="md"
                />

                <IonInput
                  // className={`${isValid && 'ion-valid'} ${isValid === false && 'ion-invalid'} ${isTouched && 'ion-touched'}`}
                  type="number"
                  fill="outline"
                  label="Total Distance"
                  labelPlacement="floating"
                  errorText=""
                  className="custom-input mb-1.5x"
                  placeholder="Enter a total distance"
                  helperText=""
                  mode="md"
                />
                <IonInput
                  // className={`${isValid && 'ion-valid'} ${isValid === false && 'ion-invalid'} ${isTouched && 'ion-touched'}`}
                  type="number"
                  fill="outline"
                  label="Rate per ton"
                  labelPlacement="floating"
                  errorText=""
                  className="custom-input mb-1.5x"
                  placeholder="Enter a rate per ton"
                  helperText=""
                  mode="md"
                />
                <IonInput
                  // className={`${isValid && 'ion-valid'} ${isValid === false && 'ion-invalid'} ${isTouched && 'ion-touched'}`}
                  type="number"
                  fill="outline"
                  label="Product Type"
                  labelPlacement="floating"
                  errorText=""
                  className="custom-input"
                  placeholder="Enter a product type"
                  helperText=""
                  mode="md"
                />

                <IonSelect label="Payment Terms" labelPlacement="floating" fill="outline" className="custom-input mb-1.5x">
                  <IonSelectOption value="apple">Cash</IonSelectOption>
                  <IonSelectOption value="banana">Online</IonSelectOption>
                  <IonSelectOption value="orange">Credit</IonSelectOption>
                </IonSelect>


              </form>
            </IonCol>



          </IonRow>
          <IonRow >
            <IonCol size="12" >
              <IonButton expand="block" className="confirm-button" routerLink="/app/dashboard">
                Confirm
              </IonButton>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage >
  )
}

export default CreateNewLoad

