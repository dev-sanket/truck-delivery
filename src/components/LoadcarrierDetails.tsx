import type React from "react"
import { IonContent, IonPage, IonButton, IonIcon, IonChip, IonLabel, IonTabBar, IonTabButton, IonSelect } from "@ionic/react"
import { arrowBack, call, home, search as searchIcon, notifications, person, chevronForward } from "ionicons/icons"
import "../../src/assets/styles/main.css"
import { Link, useHistory } from 'react-router-dom'
import userIcon from "../assets/images/user.png"
import greenDotWhite from '../../src/assets/images/greenDotWhite.png'
import redDotWhite from '../../src/assets/images/redDotWhite.png'
import miniPickup from "../assets/images/miniTruckBlack.png";
import measure from "../assets/images/measure.png";
const LoadCarrierDetails: React.FC = () => {
  return (
    <div className="carrier-card">
      <div className="carrier-info">
        <div className="carrier-avatar">
          <img src={userIcon} alt="phone" style={{ width: 40, height: 40, borderRadius: 50 }} />
        </div>
        <div className="carrier-details">
          <div className="carrier-container">
            <div className="carrier-name">Goyam Road Carriers</div>
            <div className="carrier-name-small">Abdol Sattar Gayen</div>
          </div>
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
          <img src={greenDotWhite} alt="phone" style={{ width: 18, height: 18, borderRadius: 50 }} />
          <div className="location-text">Kharagpur, West Bengal</div>
        </div>
        <div className="vertical-dots"></div>
        <div className="route-point">
          <img src={redDotWhite} alt="phone" style={{ width: 18, height: 18, borderRadius: 50 }} />
          <div className="location-text">Jalpaiguri, West Bengal</div>
        </div>
      </div>

      {/* Truck Type */}
      <div className="truck-info">
        <div className="info-label">Truck Types</div>
        <div>
          <div className="truck-container">
            <img src={miniPickup} alt="phone" style={{ width: 31, height: 31 }} />

            <div className="carrier-name">Open Half/Full Body</div>
            <div>
              <img src={measure} alt="phone" style={{ width: 20, height: 20 }} />
            </div>
            <div className="carrier-name-small">21-35 Ton</div>
          </div>
        </div>
      </div>

      {/* Material Type */}
      <div className="material-info">
        <div className="info-label">Product</div>
        <div className="product-container-load">
          <div className="material-type">Advance</div>
          <div className="material-type">Asbestos sheet</div>
        </div>
      </div>

      {/* Rate */}
      <div className="rate-info">
        <div className="rate-label">Rate</div>
        <div className="product-container-load">
          <div className="rate-value">₹2,000 per ton</div>
          <IonButton expand="block" className="call-button" style={{ width: '80px', height: '30px', padding: '5px' }}>
            <IonIcon icon={call} slot="start" />
            Call
          </IonButton>
        </div>
      </div>

      {/* Call Button */}

    </div>
  )
}

export default LoadCarrierDetails

