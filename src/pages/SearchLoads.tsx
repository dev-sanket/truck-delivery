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
} from "@ionic/react";
import {
  chevronForward,
  home,
  search as searchIcon,
  notifications,
  person,
} from "ionicons/icons";
import StatusBar from "../components/StatusBar";
import "./SearchLoads.css";
import InputBox from "../components/Input";
import FooterPanel from "../components/Footer";
import LoadListing from "../components/LoadList";
import SyncAltIcon from "@mui/icons-material/SyncAlt";
import greenDot from "../assets/images/greendot.png";
import redDot from "../assets/images/redDot.png";
import { useHistory } from "react-router";
const SearchLoads: React.FC = () => {
  const history = useHistory<History>();
  const [fromLocation, setFromLocation] = useState("");
  const [toLocation, setToLocation] = useState("");
  const handleSearch = () => {
    history.push("/load-details"); // Replace with your desired route
  };
  return (
    <IonPage>
      <StatusBar />
      <div className="header">
        <div className="title-container">
          <h1 className="page-title">Search Loads</h1>
        </div>
      </div>
      <IonContent>
        <div className="search-container">
          <div className="upper-container">
            {/* From Input */}
            <div className="input-container">
              {/* <div className="location-dot from-dot"></div> */}
              {/* <IonInput
              placeholder="Enter loading here"
              value={fromLocation}
              onIonChange={(e) => setFromLocation(e.detail.value!)}
              className="location-input"
            /> */}
              <InputBox
                label="From"
                defaultValue="Enter Loading Point"
                icon={
                  <img
                    src={greenDot}
                    alt="phone"
                    style={{ width: 18, height: 17 }}
                  />
                }
                endIcon={<SyncAltIcon sx={{ transform: "rotate(90deg)" }} />}
              />
            </div>

            {/* To Input */}
            <div className="input-container">
              {/* <div className="location-dot to-dot"></div> */}
              {/* <IonInput
              placeholder="Enter unloading here"
              value={toLocation}
              onIonChange={(e) => setToLocation(e.detail.value!)}
              className="location-input"
            /> */}
              <InputBox
                label="To"
                defaultValue="Enter Unloading Point"
                icon={
                  <img
                    src={redDot}
                    alt="phone"
                    style={{ width: 18, height: 17 }}
                  />
                }
              />
            </div>

            <IonButton
              expand="block"
              className="find-loads-button"
              onClick={handleSearch}
            >
              Find Loads
            </IonButton>
          </div>

          {/* Load Results */}
          <div className="load-results">
            <LoadListing />
            <LoadListing />
            <LoadListing />
            <div className="section-title">Find Loads Form</div>
            <LoadListing />
            {/* <LoadListing /> */}
          </div>
        </div>
      </IonContent>

      {/* Tab Bar */}
      <div
        style={{
          position: "fixed",
          bottom: 0,
          left: 0,
          width: "100%",
          zIndex: 1000,
        }}
      >
        <FooterPanel />
      </div>
    </IonPage>
  );
};

export default SearchLoads;
