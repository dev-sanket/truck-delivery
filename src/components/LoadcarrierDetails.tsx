import type React from "react";
import {
  IonButton,
  IonIcon,
  IonCard,
  IonCardContent,
  IonGrid,
  IonRow,
  IonCol,
  IonText,
  IonChip,
} from "@ionic/react";

import "../../src/assets/styles/main.css";
import { useHistory } from "react-router-dom";
import greenDotWhite from "../../src/assets/images/greenDotWhite.png";
import redDotWhite from "../../src/assets/images/redDotWhite.png";
import miniPickup from "../assets/images/miniTruckBlack.png";
import weighIcon from "../assets/images/weighIcon.png";
import vertical from "../assets/images/icons/vertical.svg";
import { LoadData } from "../utils/app.types";
import { person } from "ionicons/icons";

type LoadCarrierDetailsProps = {
  showLabel?: boolean;
  data?: LoadData;
};

const LoadCarrierDetails: React.FC<LoadCarrierDetailsProps> = ({
  showLabel = false,
  data,
}) => {
  const router = useHistory();

  return (
    <IonCard className="ion-no-padding" style={{ margin: '8px 0' }}>
      <IonCardContent className="ion-no-padding">
        <IonGrid className="ion-no-padding">
          {/* User Info Section */}
          <IonRow className="">
            <IonCol size="12" className="">
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                padding: '12px 16px'
              }}>
                <div style={{
                  width: '50px',
                  height: '50px',
                  borderRadius: '50%',
                  backgroundColor: '#f0f0f0',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  border: '2px solid #e0e0e0'
                }}>
                  <IonIcon icon={person} style={{ fontSize: '24px', color: '#666' }} />
                </div>
                <div>
                  <div style={{ fontSize: '16px', fontWeight: '600', margin: '0 0 4px 0' }}>
                    {data?.FullName}
                  </div>

                </div>
              </div>
            </IonCol>
          </IonRow>

          {/* Route Information */}
          <IonRow className="ion-no-padding">
            <IonCol size="12" className="ion-no-padding">
              <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '12px 16px',
                backgroundColor: '#f8f9fa',
                borderRadius: '8px',
                margin: '8px 16px'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <img src={greenDotWhite} alt="From" style={{ width: '16px', height: '16px' }} />
                  <IonText style={{ fontSize: '14px', fontWeight: '500' }}>
                    {data?.LoadFrom}
                  </IonText>
                </div>

                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <IonIcon src={vertical} style={{ width: '16px', height: '16px', color: '#666' }} />
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <IonText style={{ fontSize: '14px', fontWeight: '500' }}>
                    {data?.LoadTo}
                  </IonText>
                  <img src={redDotWhite} alt="To" style={{ width: '16px', height: '16px' }} />
                </div>
              </div>
            </IonCol>
          </IonRow>

          {/* Vehicle and Weight Info */}
          <IonRow className="ion-no-padding">
            <IonCol size="12" className="ion-no-padding">
              <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '12px 16px'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <img src={miniPickup} alt="Vehicle" style={{ width: '24px', height: '24px' }} />
                  <div>
                    <IonText style={{ fontSize: '12px', color: '#666' }}>Vehicle Type</IonText>
                    <div style={{ fontSize: '14px', fontWeight: '500' }}>{data?.VehicleType}</div>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <img src={weighIcon} alt="Weight" style={{ width: '20px', height: '20px' }} />
                  <IonText style={{ fontSize: '14px', fontWeight: '500' }}>
                    {data?.ProductWeight} TON
                  </IonText>
                </div>
              </div>
            </IonCol>
          </IonRow>

          {/* Product and Payment Info */}
          <IonRow className="ion-no-padding">
            <IonCol size="12" className="ion-no-padding">
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                padding: '0 16px 12px 16px'
              }}>
                <div style={{ flex: 1 }}>
                  <IonText style={{ fontSize: '12px', color: '#666' }}>Product</IonText>
                  <div style={{ fontSize: '14px', fontWeight: '500', marginTop: '4px' }}>
                    {data?.ProductType}
                  </div>
                </div>

                <div style={{ flex: 1, textAlign: 'right' }}>
                  <IonText style={{ fontSize: '12px', color: '#666' }}>Payment Terms</IonText>
                  <div style={{ fontSize: '14px', fontWeight: '500', marginTop: '4px' }}>
                    {data?.PaymentTerms}
                  </div>
                </div>
              </div>
            </IonCol>
          </IonRow>

          {/* Rate and Bid Button */}
          <IonRow className="ion-no-padding">
            <IonCol size="12" className="ion-no-padding">
              <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '12px 16px',
                borderTop: '1px solid #f0f0f0'
              }}>
                <div>
                  <IonText style={{ fontSize: '12px', color: '#666' }}>Rate</IonText>
                  <div style={{ fontSize: '16px', fontWeight: '600', color: '#000' }}>
                    ₹{data?.RatePerTon}
                    <span style={{ fontSize: '12px', fontWeight: '400', color: '#666' }}> per ton</span>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  {showLabel && (
                    <IonChip
                      color="danger"
                      style={{ margin: '0', height: '24px', fontSize: '12px' }}
                    >
                      L1
                    </IonChip>
                  )}

                  <IonButton
                    size="default"
                    onClick={() => router.push(`/app/place-bid/${data?.LoadsID}`)}
                    style={{
                      '--background': '#FFD901',
                      '--color': '#000000',
                      '--border-radius': '20px',
                      height: '36px',
                      fontSize: '14px',
                      fontWeight: '600',
                      minWidth: '80px'
                    }}
                  >
                    Bid
                  </IonButton>
                </div>
              </div>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonCardContent>
    </IonCard>
  );
};

export default LoadCarrierDetails;
