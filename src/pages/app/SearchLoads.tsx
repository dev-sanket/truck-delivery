"use client";
import type React from "react";
import { useState } from "react";
import {
  IonContent,
  IonPage,
  IonInput,
  IonButton,
  IonIcon,
  IonCard,
  IonCardContent,
  IonChip,
  IonLabel,
  IonTabBar,
  IonTabButton,
  IonGrid,
  IonRow,
  IonCol,
} from "@ionic/react";
import "./SearchLoads.css";
import LoadListing from "../../components/LoadList";
import viceVersa from "../../assets/images/vice-versa.png";
import greenDot from "../../assets/images/greendot.png";
import redDot from "../../assets/images/redDot.png";
import { useHistory } from "react-router";

const SearchLoads: React.FC = () => {
  const history = useHistory<History>();
  const [fromLocation, setFromLocation] = useState("");
  const [toLocation, setToLocation] = useState("");
  const handleSearch = () => {
    history.push("/app/load-details"); // Replace with your desired route
  };
  return (
    <IonPage>
      <IonContent className="ion-no-padding" >
      <IonGrid className="ion-no-padding">
        <IonRow className="mt-2x ion-padding" style={{borderBottom: '1px solid #F0F0F0'}}>
            <IonCol size="12">
            <div className="title-container">
                 <div className="page-title">Search Loads</div>
            </div>
            </IonCol>
        </IonRow>
        <IonRow className="ion-padding">
            <IonCol size="12">
            <IonInput
              type="text"
              fill="outline"
              label="From"
              labelPlacement="floating"
              className="custom-input"
              placeholder="Enter loading point"
              helperText=""
              mode="md"
              >
            <img
              slot="start"
              src={greenDot}
              alt="greenDot"
              style={{ width: 20, height: 20 }}
            />
            <img
              slot="end"
              src={viceVersa}
              alt="check"
              style={{ width: 20, height: 20 }}
            />
            </IonInput>

            </IonCol>
        </IonRow>
        <IonRow className="ion-padding">
            <IonCol size="12">
            <IonInput
              type="text"
              fill="outline"
              label="To"
              labelPlacement="floating"
              className="custom-input"
              placeholder="Enter Unloading point"
              helperText=""
              mode="md"
              >
            <img
              slot="start"
              src={redDot}
              alt="greenDot"
              style={{ width: 20, height: 20 }}
            />
            </IonInput>
            </IonCol>
        </IonRow>
        <IonRow className="ion-padding">
            <IonCol size="12">
            <IonButton
              expand="block"
              className="find-loads-button"
              onClick={handleSearch}
            >
              Find Loads
            </IonButton>
            </IonCol>
        </IonRow>
        <IonRow className="ion-no-padding pt-2x" style={{ backgroundColor: '#f0f0f0' }}>
          <IonCol size="12" className="ion-padding search-container">
            <LoadListing />
            <LoadListing />
            <LoadListing />
            <div className="section-title">Find Loads Form</div>
            <LoadListing />
          </IonCol>
        </IonRow>
      </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default SearchLoads;
