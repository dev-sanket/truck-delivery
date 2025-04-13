import type React from "react"
import "./StatusBar.css"
import { IonContent, IonPage, IonButton, IonIcon, IonChip, IonLabel, IonTabBar, IonTabButton, IonSelect } from "@ionic/react"
import { arrowBack, call, home, search as searchIcon, notifications, person, chevronForward } from "ionicons/icons"
import StatusBar from "./StatusBar"
import "../../src/assets/styles/main.css"
import {Link ,useHistory} from 'react-router-dom'
import userIcon from "../assets/images/user.png"
import greenDotWhite from '../../src/assets/images/greenDotWhite.png'
import redDotWhite from '../../src/assets/images/redDotWhite.png'
const LoadCarrierDetails: React.FC = () => {
  return (
          <div className="carrier-card">
            <div className="carrier-info">
              <div className="carrier-avatar">
              <img src={userIcon} alt="phone" style={{ width: 40, height: 40 ,borderRadius:50}} />
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
              <img src={greenDotWhite} alt="phone" style={{ width:18, height:18 ,borderRadius:50}}/>
                <div className="location-text">Kharagpur, West Bengal</div>
              </div>
              <div className="vertical-dots"></div>
              <div className="route-point">
              <img src={redDotWhite} alt="phone" style={{ width:18, height:18 ,borderRadius:50}}/>
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
  )
}

export default LoadCarrierDetails

