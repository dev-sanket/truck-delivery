import type React from "react"
import { IonContent, IonPage, IonButton, IonIcon, IonChip, IonLabel, IonTabBar, IonTabButton } from "@ionic/react"
import { arrowBack, call, home, search as searchIcon, notifications, person, chevronForward } from "ionicons/icons"
import StatusBar from "../components/StatusBar"
import "./LoadDetails.css"

const LoadDetails: React.FC = () => {
  return (
    <IonPage>
      <StatusBar />
      <div className="header">
        <div className="back-button">
          <IonIcon icon={arrowBack} />
        </div>
        <div className="route-title">Kharagpur → Jalpaiguri</div>
      </div>
      <IonContent className="ion-padding">
        <div className="load-details-container">
          {/* Vehicle Type Chips */}
          <div className="vehicle-types">
            <IonChip className="vehicle-chip active">
              <IonLabel>Open</IonLabel>
            </IonChip>
            <IonChip className="vehicle-chip">
              <IonLabel>DCM</IonLabel>
            </IonChip>
            <IonChip className="vehicle-chip">
              <IonLabel>Mini/Pickup</IonLabel>
            </IonChip>
            <IonChip className="vehicle-chip">
              <IonLabel>Trailer</IonLabel>
            </IonChip>
            <IonChip className="vehicle-chip">
              <IonLabel>Truck</IonLabel>
            </IonChip>
          </div>

          {/* Carrier Card */}
          <div className="carrier-card">
            <div className="carrier-info">
              <div className="carrier-avatar"></div>
              <div className="carrier-details">
                <div className="carrier-name">Goyam Road Carriers</div>
                <div className="carrier-rating">
                  <span className="stars">★★★★★</span>
                  <span className="rating-value">4.5</span>
                </div>
              </div>
              <IonIcon icon={chevronForward} className="carrier-arrow" />
            </div>

            {/* Route Information */}
            <div className="route-info">
              <div className="route-point">
                <div className="location-dot from-dot"></div>
                <div className="location-text">Kharagpur, West Bengal</div>
              </div>
              <div className="route-point">
                <div className="location-dot to-dot"></div>
                <div className="location-text">Jalpaiguri, West Bengal</div>
              </div>
            </div>

            {/* Truck Type */}
            <div className="truck-info">
              <div className="truck-type">Truck Types</div>
              <div className="truck-value">Open Half/Full Body</div>
              <div className="truck-size">21-35 Ton</div>
            </div>

            {/* Material Type */}
            <div className="material-info">
              <div className="material-type">Asbestos sheet</div>
              <div className="material-type">Advance</div>
            </div>

            {/* Rate */}
            <div className="rate-info">
              <div className="rate-label">Rate</div>
              <div className="rate-value">₹2,000 per ton</div>
            </div>

            {/* Call Button */}
            <IonButton expand="block" className="call-button">
              <IonIcon icon={call} slot="start" />
              Call
            </IonButton>
          </div>

          {/* Second Carrier Card (Similar Structure) */}
          <div className="carrier-card">
            <div className="carrier-info">
              <div className="carrier-avatar"></div>
              <div className="carrier-details">
                <div className="carrier-name">Goyam Road Carriers</div>
                <div className="carrier-rating">
                  <span className="stars">★★★★★</span>
                  <span className="rating-value">4.5</span>
                </div>
              </div>
              <IonIcon icon={chevronForward} className="carrier-arrow" />
            </div>

            {/* Route Information */}
            <div className="route-info">
              <div className="route-point">
                <div className="location-dot from-dot"></div>
                <div className="location-text">Kharagpur, West Bengal</div>
              </div>
              <div className="route-point">
                <div className="location-dot to-dot"></div>
                <div className="location-text">Jalpaiguri, West Bengal</div>
              </div>
            </div>

            {/* Truck Type */}
            <div className="truck-info">
              <div className="truck-type">Truck Types</div>
              <div className="truck-value">Open Half/Full Body</div>
              <div className="truck-size">21-35 Ton</div>
            </div>
          </div>
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

