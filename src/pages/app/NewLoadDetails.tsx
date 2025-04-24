import type React from "react"
import { IonContent, IonPage, IonButton, IonIcon, IonChip, IonLabel, IonTabBar, IonTabButton, IonSelect } from "@ionic/react"
import { home, search as searchIcon, notifications, person, chevronForward } from "ionicons/icons"
import lcvTruck from "../../assets/images/LcvTruck.png";
import openTruck from "../../assets/images/openTruck.png";
import Trailer from "../../assets/images/Trailer.png";
import miniPickup from "../../assets/images/miniPickUpTruck.png";
import redDot from "../../assets/images/redDot.png"
import LoadCarrierDetails from "../../components/LoadcarrierDetails"
import "./NewLoadDetails.css"
import Header from "../../components/Header"
import { IonHeader, IonSegment, IonSegmentButton, IonTitle, IonToolbar } from '@ionic/react';

const NewLoadDetails: React.FC = () => {

  return (
    <IonPage>
    <IonHeader>
      <IonToolbar>
        <IonSegment value="open">
          <IonSegmentButton value="open" style={{
        '--padding-start': '0px',
        '--padding-end': '0px',
        'minWidth':'0px'
      } as React.CSSProperties}>
            <div className="segment-label">Open(15)</div>
          </IonSegmentButton>
          <IonSegmentButton value="pending" style={{
        '--padding-start': '0px',
        '--padding-end': '0px',
        'minWidth':'0px'
      } as React.CSSProperties}>
            <div className="segment-label">Pending(0)</div>
          </IonSegmentButton>
          <IonSegmentButton value="confirmed" style={{
        '--padding-start': '0px',
        '--padding-end': '0px',
        'minWidth':'0px'
      } as React.CSSProperties}>
            <div className="segment-label">Confirmed(13)</div>
          </IonSegmentButton>
          <IonSegmentButton value="history" style={{
        '--padding-start': '0px',
        '--padding-end': '0px',
        'minWidth':'0px'
      } as React.CSSProperties}>
            <div className="segment-label">History(4)</div>
          </IonSegmentButton>
        </IonSegment>
      </IonToolbar>
    </IonHeader>
      <IonContent className="ion-padding" style={{
        '--padding-start': '0px',
        '--padding-end': '0px'
      } as React.CSSProperties}>
        <div className="load-details-container">

          <div className="button-container">
          <IonButton className="btn1">All Loads</IonButton>
          <IonButton className="btn2">My Bids</IonButton>
          <IonButton className="btn2">No Bids</IonButton>
          </div>

          <LoadCarrierDetails />

          <LoadCarrierDetails />


        </div>
      </IonContent>
    </IonPage>
  )
}

export default NewLoadDetails

