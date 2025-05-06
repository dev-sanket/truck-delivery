import type React from "react";
import {
  IonContent,
  IonPage,
  IonButton,
  IonIcon,
  IonRow,
  IonCol,
  IonCard,
  IonCardContent,
  IonInput,
  IonGrid,
} from "@ionic/react";
import {
  arrowBack,
  call,
  home,
  search as searchIcon,
  notifications,
  person,
  chevronForward,
  callOutline,
} from "ionicons/icons";
import { Link, useHistory } from "react-router-dom";
import userIcon from "../../assets/images/user.png";
import arrow from "../../assets/images/arrow.png";
import miniPickup from "../../assets/images/miniTruckBlack.png";
import measure from "../../assets/images/measure.png";
import weighIcon from "../../assets/images/weighIcon.png";
import "../../assets/styles/main.css";
import LoadDetailsHeader from "../../components/LoadDetailsHeader";
import Header from "../../components/Header";
import rupeeIcon from "../../assets/images/icons/indian-rupee.svg";
const PlaceBid: React.FC = () => {
  return (
    <IonPage>
      <Header showBackButton={true} />
      <IonContent className="ion-padding mt-2x">
        <IonGrid>
          <div className="carrier-card">
            {/* Route Information */}
            <div className="route-info">
              <div className="route-point-bid">
                <div className="info-label">From</div>
                <div className="location-text">Kharagpur, West Bengal</div>
              </div>
              <div className="arrow">
                <img
                  src={arrow}
                  alt="arrow"
                  style={{ width: 16, height: 16 }}
                />
              </div>
              <div className="route-point-bid">
                <div className="info-label">To</div>
                <div className="location-text">Jalpaiguri, West Bengal</div>
              </div>
            </div>

            {/* Truck Type */}

            <div className="material-info">
              <div className="info-container">
                <div className="info-label">Delivery By</div>
                {/* <div className="info-label">Total Ton</div> */}
              </div>
              <div className="product-container-load">
                <div className="material-type-bid">April 23 10:30AM</div>
                {/* <div className="material-type-bid">35 TON</div> */}
              </div>
            </div>


            <div className="truck-info">
              <div className="info-label">Truck Types</div>
              <div>
                <div className="truck-container" style={{ justifyContent: 'unset', }}>
                  <img
                    src={miniPickup}
                    alt="phone"
                    style={{ width: 31, height: 31 }}
                  />

                  <div className="carrier-name">Open Half/Full Body</div>
                </div>
              </div>
            </div>

            {/* Material Type */}

            <div className="material-info">
              <div className="info-container">
                <div className="info-label">Products</div>
                {/* <div className="info-label">Total Ton</div> */}
              </div>
              <div className="product-container-load">
                <div className="material-type-bid">Aesbestos sheet</div>
                {/* <div className="material-type-bid">35 TON</div> */}
              </div>
            </div>

            <div className="material-info">
              <div className="info-container">
                <div className="info-label">Payment Terms</div>
                <div className="info-label">Total Ton</div>
              </div>
              <div className="product-container-load">
                <div className="material-type-bid">Advance</div>
                <div className="material-type-bid">35 TON</div>
              </div>
            </div>

            <div className="material-info">
              <div className="info-container">
                <div className="info-label">Past Date</div>
                <div className="info-label">Rate</div>
              </div>
              <div className="product-container-load">
                <div className="material-type-bid">April 22 10:30PM</div>
                <div className="material-type-bid">₹5,000</div>
              </div>
            </div>

          </div>

          {/* <div className="carrier-card pt-1x">
          <div className="carrier-info">
            <div className="carrier-avatar">
              <img
                src={userIcon}
                alt="phone"
                style={{ width: 40, height: 40, borderRadius: 50 }}
              />
            </div>
            <div className="carrier-details-card ">
              <div className="carrier-container">
                <div className="carrier-name">Goyam Road Carriers</div>
              </div>
              <div className="carrier-rating-card">
                <span className="stars">★★★★★</span>
                <span className="rating-value">4.5</span>
              </div>
            </div>
          </div>
        </div> */}
          <IonRow className="ion-padding-top">
            <IonCol size="12">
              <IonCard className="ion-no-margin" style={{ borderRadius: '10px' }}>
                <IonCardContent>
                  <IonRow>
                    <IonCol size="12">
                      <IonInput
                        // className={`${isValid && 'ion-valid'} ${isValid === false && 'ion-invalid'} ${isTouched && 'ion-touched'}`}
                        type="number"
                        fill="outline"
                        label="Bid Amount"
                        labelPlacement="floating"
                        errorText="Invalid number"
                        className="custom-input"
                        placeholder="Enter a valid bid amount"
                        helperText=""
                        mode="md"
                        inputmode="numeric"
                      >
                        <IonIcon slot="start" icon={rupeeIcon} size="small" aria-hidden="true"></IonIcon>
                      </IonInput>
                    </IonCol>
                    <IonCol size="12">
                      <IonInput
                        // className={`${isValid && 'ion-valid'} ${isValid === false && 'ion-invalid'} ${isTouched && 'ion-touched'}`}
                        type="number"
                        fill="outline"
                        label="Bid Quantity (Ton)"
                        labelPlacement="floating"
                        errorText="Invalid number"
                        className="custom-input"
                        placeholder="Enter a valid bid quantity"
                        helperText=""
                        mode="md"
                        inputmode="numeric"
                      />

                    </IonCol>
                  </IonRow>
                </IonCardContent>
              </IonCard>

            </IonCol>

          </IonRow>
          <IonRow className="">
            <IonCol size="12">
              <IonButton
                expand="block"
                className="confirm-button"
                routerLink="/app/dashboard"
              >
                Quote PMT
              </IonButton>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default PlaceBid;
