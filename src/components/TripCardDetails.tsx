import type React from "react";
import {
  IonButton,
  IonIcon,
  IonCard,
  IonCardContent,
  IonGrid,
  IonRow,
  IonCol,
} from "@ionic/react";

import "../../src/assets/styles/main.css";
import { Link, useHistory } from "react-router-dom";
import userIcon from "../assets/images/user.png";
import greenDotWhite from "../../src/assets/images/greenDotWhite.png";
import redDotWhite from "../../src/assets/images/redDotWhite.png";
import miniPickup from "../assets/images/miniTruckBlack.png";
import weighIcon from "../assets/images/weighIcon.png";
import vertical from "../assets/images/icons/vertical.svg";
import { LoadData } from "../pages/app/NewLoadDetails";
type LoadCarrierDetailsProps = {
  showLabel?: boolean;
  data?: LoadData;
};
const TripCardDetails: React.FC<LoadCarrierDetailsProps> = ({
  showLabel = false,
  data,
}) => {
  const router = useHistory();
  return (
    <IonCard className="carrier-card">
      <IonCardContent className="ion-no-padding">
        <IonGrid className="ion-no-padding">
          <IonRow className="ion-justify-content-between">
            <IonCol size="12">
              <div className="carrier-info">
                <div className="carrier-details">
                  <div className="carrier-container">
                    <div className="carrier-name">WB42V9307</div>
                  </div>
                </div>
                <div className="carrier-details">
                  <div className="carrier-container">
                    <div className="carrier-name">Apr 25</div>
                  </div>
                </div>
              </div>
            </IonCol>
          </IonRow>
          <IonRow className="ion-justify-content-between ion-padding-top">
            <IonCol size="12">
              <div className="route-info">
                <div className="route-point">
                  <img
                    src={greenDotWhite}
                    alt="phone"
                    style={{ width: 18, height: 18, borderRadius: 50 }}
                  />
                  <div className="location-text">Kharagpur,West Bengal</div>
                </div>
                <div className="vertical-dots">
                  <IonIcon
                    src={vertical}
                    style={{ width: "20px", fontSize: "20px" }}
                  />
                </div>
                <div className="route-point">
                  <img
                    src={redDotWhite}
                    alt="phone"
                    style={{ width: 18, height: 18, borderRadius: 50 }}
                  />
                  <div className="location-text">Jalpaiguri,West Bengal</div>
                </div>
              </div>
            </IonCol>
          </IonRow>
          <IonRow className="ion-justify-content-between ion-padding-top">
            <IonCol size="12">
              <div className="truck-info">
                <div className="wt-info-label">29.0MT</div>
                <div className="trip-container">
                  <div className="wt-info-label" style={{ fontSize: 14 }}>UAL Industries (UAL BENGAL)</div>
                  <div className="wt-info-label" style={{ fontSize: 14 }}>AC Sheet</div>
                </div>
              </div>
            </IonCol>
          </IonRow>
          <IonRow className="ion-justify-content-between ion-padding-top">
            <IonCol size="12">
              <div className="material-info">
                <div className="info-container">
                <div className="display-col" style={{ alignItems: 'center' }}>
                  <IonButton
                    expand="block"
                    className="call-button"
                    style={{
                      width: "80px",
                      height: "30px",
                      "--background": "#FFD901",
                      color: "#000000",
                      fontSize:"12px"
                    }}
                  >
                    In-Transit
                  </IonButton>
                </div>
                <div className="display-col" style={{ alignItems: 'center' }}>
                  <IonButton
                    expand="block"
                    className="call-button"
                    style={{
                      width: "80px",
                      height: "30px",
                      "--background": "#008000",
                      color: "#FFFFFF",
                      fontSize:"12px"
                    }}
                  >
                    Actions
                  </IonButton>
                </div>
                </div>
              </div>
            </IonCol>
          </IonRow>
          <IonRow className="ion-justify-content-between ion-padding-top">
            <IonCol size="12">
              <div className="trip-card-footers">
                <div className="trip-under-lined">
                  Read Notes
                </div>
                <div className="wt-info-label">
                  Reporting time:25 Apr,2:30PM
                </div>
              </div>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonCardContent>
    </IonCard>
  );
};

export default TripCardDetails;
