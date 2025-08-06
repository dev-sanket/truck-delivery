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
import greenDotWhite from "../../src/assets/images/greenDotWhite.png";
import redDotWhite from "../../src/assets/images/redDotWhite.png";
import vertical from "../assets/images/icons/vertical.svg";
import { IndentData } from "../utils/app.types";
import { format } from "date-fns";

type LoadCarrierDetailsProps = {
  showLabel?: boolean
  data?: IndentData;
};
const TripCardDetails: React.FC<LoadCarrierDetailsProps> = ({
  data,
}) => {
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
                    <div className="carrier-name">{format(new Date(data?.LoadCreated || ""), "dd MMM")}</div>
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
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: '12px 0',
                borderTop: '1px solid #f0f0f0',
                borderBottom: '1px solid #f0f0f0'
              }}>
                {/* Product Weight Section */}
                <div style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  flex: 1,
                  padding: '8px',
                  borderRight: '1px solid #f0f0f0'
                }}>
                  <div style={{
                    fontSize: '10px',
                    color: '#8e8e93',
                    fontWeight: '500',
                    textTransform: 'uppercase',
                    letterSpacing: '0.5px',
                    marginBottom: '4px'
                  }}>
                    Weight
                  </div>
                  <div style={{
                    fontSize: '16px',
                    fontWeight: 'bold',
                    color: '#1c1c1e',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '4px'
                  }}>
                    <span style={{ fontSize: '12px' }}>⚖️</span>
                    {data?.ProductWeight || 'N/A'}
                  </div>
                </div>

                {/* Rate Per Ton Section */}
                <div style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  flex: 1,
                  padding: '8px',
                  borderRight: '1px solid #f0f0f0'
                }}>
                  <div style={{
                    fontSize: '10px',
                    color: '#8e8e93',
                    fontWeight: '500',
                    textTransform: 'uppercase',
                    letterSpacing: '0.5px',
                    marginBottom: '4px'
                  }}>
                    Rate/Ton
                  </div>
                  <div style={{
                    fontSize: '16px',
                    fontWeight: 'bold',
                    color: '#1c1c1e',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '4px'
                  }}>
                    <span style={{ fontSize: '12px' }}>💰</span>
                    ₹{data?.RatePerTon || 'N/A'}
                  </div>
                </div>

                {/* Product Type Section */}
                <div style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  flex: 1,
                  padding: '8px'
                }}>
                  <div style={{
                    fontSize: '10px',
                    color: '#8e8e93',
                    fontWeight: '500',
                    textTransform: 'uppercase',
                    letterSpacing: '0.5px',
                    marginBottom: '4px'
                  }}>
                    Product
                  </div>
                  <div style={{
                    fontSize: '16px',
                    fontWeight: 'bold',
                    color: '#1c1c1e',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '4px'
                  }}>
                    <span style={{ fontSize: '12px' }}>📦</span>
                    AC Sheet
                  </div>
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
                        fontSize: "12px"
                      }}
                    >
                      {data?.IntentStatus}
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
                        fontSize: "12px"
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
                  Reporting time:{format(new Date(data?.LoadCreated || ""), "dd MMM,hh:mm a")}
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
