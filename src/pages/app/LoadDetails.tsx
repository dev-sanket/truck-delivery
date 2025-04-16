import type React from "react"
import { IonContent, IonPage, IonButton, IonIcon, IonChip, IonLabel, IonTabBar, IonTabButton, IonSelect } from "@ionic/react"
import { home, search as searchIcon, notifications, person, chevronForward } from "ionicons/icons"
import lcvTruck from "../../assets/images/LcvTruck.png";
import openTruck from "../../assets/images/openTruck.png";
import Trailer from "../../assets/images/Trailer.png";
import miniPickup from "../../assets/images/miniPickUpTruck.png";
import redDot from "../../assets/images/redDot.png"
import LoadCarrierDetails from "../../components/LoadcarrierDetails"
import "./LoadDetails.css"
import Header from "../../components/Header"

const LoadDetails: React.FC = () => {

  return (
    <IonPage>
      <Header showBackButton={true} showHamburgerMenu={false} showUserIcon={true} />
      <IonContent className="ion-padding">
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

          <LoadCarrierDetails />

          <LoadCarrierDetails />


        </div>
      </IonContent>
    </IonPage>
  )
}

export default LoadDetails

