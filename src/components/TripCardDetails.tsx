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
                <div className="carrier-avatar">
                  <img
                    src={userIcon}
                    alt="phone"
                    style={{
                      width: "100%",
                      height: "100%",
                      borderRadius: "50%",
                    }}
                  />
                </div>
                <div className="carrier-details">
                  <div className="carrier-container">
                    <div className="carrier-name">{data?.FullName}</div>
                    <div className="carrier-name-small">{data?.FullName}</div>
                  </div>
                  <div className="carrier-rating">
                    <span className="stars">★★★★★</span>
                    <span className="rating-value">4.5</span>
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
                  <div className="location-text">{data?.LoadFrom}</div>
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
                  <div className="location-text">{data?.LoadTo}</div>
                </div>
              </div>
            </IonCol>
          </IonRow>
          <IonRow className="ion-justify-content-between ion-padding-top">
            <IonCol size="12">
              <div className="truck-info">
                <div className="info-label">Truck Types</div>
                <div className="truck-container">
                  <img
                    src={miniPickup}
                    alt="phone"
                    style={{ width: 31, height: 31 }}
                  />
                  <div className="carrier-name" style={{ fontSize: 12 }}>Open Half/Full Body</div>
                  <div className="weighIcon">
                    <img
                      src={weighIcon}
                      alt="phone"
                      style={{ width: 20, height: 20 }}
                    />
                    <div className="carrier-name" style={{ fontSize: 12 }}>{data?.ProductWeight}</div>
                  </div>
                </div>
              </div>
            </IonCol>
          </IonRow>
          <IonRow className="ion-justify-content-between ion-padding-top">
            <IonCol size="12">
              <div className="material-info">
                <div className="info-container">
                  <div className="info-label-section">Product</div>
                  <div className="info-label-section">Payment Terms</div>
                </div>
                <div className="product-container-load">
                  <div className="material-type">Advance</div>
                  <div className="material-type">Asbestos sheet</div>
                </div>
              </div>
            </IonCol>
          </IonRow>
          <IonRow className="ion-justify-content-between ion-padding-top">
            <IonCol size="12">
              <div className="rate-info">
                <div className="display-col">
                  <div className="rate-label">Rate</div>
                  <div className="product-container-load" style={{ alignItems: 'unset' }}>
                    <div className="rate-value">
                      ₹2,000{" "}
                      <span style={{ fontSize: "16px", fontWeight: 400, color: '#000000' }}>
                        per ton{" "}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="display-col" style={{ alignItems: 'center' }}>
                  <IonButton
                    expand="block"
                    className="call-button"
                    onClick={() => router.push(`/app/place-bid/${data?.LoadsID}`)}
                    style={{
                      width: "80px",
                      height: "30px",
                      "--background": "#FFD901",
                      color: "#000000",
                    }}
                  >
                    Bid
                  </IonButton>
                  {showLabel && <div className="label-l1">L1</div>}
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
