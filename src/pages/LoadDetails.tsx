import type React from "react"
import { IonContent, IonPage, IonButton, IonIcon, IonChip, IonLabel, IonTabBar, IonTabButton, IonSelect } from "@ionic/react"
import { arrowBack, call, home, search as searchIcon, notifications, person, chevronForward } from "ionicons/icons"
import StatusBar from "../components/StatusBar"
import "./LoadDetails.css"
import {Link ,useHistory} from 'react-router-dom'
import LoadDetailsHeader from "../components/LoadDetailsHeader"
import lcvTruck from "../assets/images/LcvTruck.png";
import openTruck from "../assets/images/openTruck.png";
import Trailer from "../assets/images/Trailer.png";
import miniPickup from "../assets/images/miniPickUpTruck.png";
import redDot from "../assets/images/redDot.png"
import LoadCarrierDetails from "../components/LoadcarrierDetails"
import { useEffect } from "react"
const LoadDetails: React.FC = () => {
  // useEffect(() => {
  //   const timeout = setTimeout(() => {
  //     const innerScroll = document.querySelector('.inner-scroll') as HTMLElement;
  //     if (innerScroll) {
  //       innerScroll.style.paddingInlineStart = '0';
  //       innerScroll.style.paddingInlineEnd = '0';
  //     }
  //   }, 100); // adjust if needed for rendering delay

  //   return () => clearTimeout(timeout);
  // }, []);
  return (
    <IonPage>
      <StatusBar />
      {/* <div className="header">
        <div className="back-button">
          <IonIcon icon={arrowBack} onClick={handleBack}/>
        </div>
        <div className="route-title">Kharagpur → Jalpaiguri</div>
      </div> */}
      <LoadDetailsHeader/>
      <IonContent className="ion-padding"   style={{
    '--padding-start': '0px',
    '--padding-end': '0px'
  } as React.CSSProperties}>
        <div className="load-details-container">
          {/* Vehicle Type Chips */}
          <div className="vehicle-types">
            <div className="vehicle-chip active">
              <img src={openTruck} alt="phone" style={{ width: 30, height: 30 }} />
              <div className="vehicle-chip-header">Open</div>
            </div>
            <div className="vehicle-chip">
              <img src={lcvTruck} alt="phone" style={{ width: 30, height: 30 }} />
              <div className="vehicle-chip-header">DCM</div>
              <div className="description">7.5 to 46 Ton</div>
            </div>
            <div className="vehicle-chip">
            <img src={Trailer} alt="phone" style={{ width: 30, height: 30 }} />
              <div className="vehicle-chip-header">Mini/Pickup</div>
              <div className="description">2.5 to 7 Ton</div>
            </div>
            <div className="vehicle-chip">
            <img src={miniPickup} alt="phone" style={{ width: 30, height: 30 }} />
              <div className="vehicle-chip-header">Trailer</div>
              <div className="description">7.5 to 46 Ton</div>
            </div>
            <div className="vehicle-chip-select">
              <div className="vehicle-chip-header">Truck Type</div>
            </div>
          </div>

        <LoadCarrierDetails/>

        <LoadCarrierDetails/>


        </div>
      </IonContent>

      {/* Tab Bar */}
      <IonTabBar slot="bottom" className="custom-tab-bar">
        <IonTabButton tab="home" href="/dashboard">
          <IonIcon icon={home} />
          <IonLabel>Home</IonLabel>
        </IonTabButton>
        <IonTabButton tab="search" href="/search-loads">
          <IonIcon icon={searchIcon} />
          <IonLabel>Search</IonLabel>
        </IonTabButton>
        <IonTabButton tab="notifications" href="/notifications">
          <IonIcon icon={notifications} />
          <IonLabel>Alerts</IonLabel>
        </IonTabButton>
        <IonTabButton tab="profile" href="/profile">
          <IonIcon icon={person} />
          <IonLabel>Profile</IonLabel>
        </IonTabButton>
      </IonTabBar>
    </IonPage>
  )
}

export default LoadDetails

