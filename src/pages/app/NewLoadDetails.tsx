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
import { useState } from "react";
import { useHistory } from "react-router";

const NewLoadDetails: React.FC = () => {
    const history = useHistory<History>();
    const handleBid = () => {
      history.push('/app/place-bid'); // Replace with your desired route
    };
  const [selectedSegment, setSelectedSegment] = useState('open');
    const handleSegmentChange = (e: CustomEvent) => {
    setSelectedSegment(e.detail.value);
  };

  return (
    <IonPage>
    <IonHeader>
      <IonToolbar>
        {/* <IonSegment value="open">
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
        </IonSegment> */}

          <IonSegment value={selectedSegment} onIonChange={handleSegmentChange}>
            {['open', 'pending', 'confirmed', 'history'].map((segment) => (
              <IonSegmentButton
                key={segment}
                value={segment}
                className={selectedSegment === segment ? 'active-segment' : 'inactive-segment'}
                style={{
                  '--padding-start': '0px',
                  '--padding-end': '0px',
                  'minWidth': '0px'
                } as React.CSSProperties}
              >
                <div className="segment-label">
                  {segment === 'open' && 'Open(15)'}
                  {segment === 'pending' && 'Pending(0)'}
                  {segment === 'confirmed' && 'Confirmed(13)'}
                  {segment === 'history' && 'History(4)'}
                </div>
              </IonSegmentButton>
            ))}
          </IonSegment>

      </IonToolbar>
    </IonHeader>

      {/* <IonContent className="ion-padding" style={{
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






      </IonContent> */}

      {selectedSegment === 'open' && (
        <IonContent className="ion-padding" style={{
          '--padding-start': '0px',
          '--padding-end': '0px'
        } as React.CSSProperties}>
          <div className="load-details-container">
            <div className="button-container">
              <IonButton className="btn1">All Loads</IonButton>
              <IonButton className="btn2" onClick={handleBid}>My Bids</IonButton>
              <IonButton className="btn2">No Bids</IonButton>
            </div>
            <LoadCarrierDetails />
            <LoadCarrierDetails />
          </div>
        </IonContent>
      )}

      {/* You can conditionally show other contents like this */}
      {selectedSegment === 'pending' && (
        <IonContent className="ion-padding">
          <div className="load-details-container">
            <h2>No Pending Loads</h2>
          </div>
        </IonContent>
      )}
      
      {selectedSegment === 'confirmed' && (
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
            <LoadCarrierDetails showLabel={true} />
            <LoadCarrierDetails showLabel={true} />
          </div>
        </IonContent>
      )}

      {selectedSegment === 'history' && (
        <IonContent className="ion-padding">
          <div className="load-details-container">
            <h2>Load History</h2>
          </div>
        </IonContent>
      )}

    </IonPage>
  )
}

export default NewLoadDetails

