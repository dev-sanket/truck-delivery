import type React from "react";
import {
  IonContent,
  IonPage,
  IonButton,
  IonIcon,
  IonChip,
  IonLabel,
  IonTabBar,
  IonTabButton,
  IonSelect,
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
} from "ionicons/icons";
import { Link, useHistory } from "react-router-dom";
import userIcon from "../../assets/images/user.png";
import arrow from "../../assets/images/arrow.png";
import miniPickup from "../../assets/images/miniTruckBlack.png";
import measure from "../../assets/images/measure.png";
import weighIcon from "../../assets/images/weighIcon.png";
import "../../assets/styles/main.css";
import LoadDetailsHeader from "../../components/LoadDetailsHeader";
const PlaceBid: React.FC = () => {
  return (
    <IonPage>
      <LoadDetailsHeader />
      <IonContent className="ion-padding mt-2x">
        {/* <div className="carrier-card">
          <div className="route-info">
            <div className="route-point-bid">
              <div className="info-label">From</div>
              <div className="location-text">Kharagpur, West Bengal</div>
            </div>
            <div className="arrow">
              <img src={arrow} alt="arrow" style={{ width: 16, height: 16 }} />
            </div>
            <div className="route-point-bid">
              <div className="info-label">To</div>
              <div className="location-text">Jalpaiguri, West Bengal</div>
            </div>
          </div>


          <div className="material-info">
            <div className="info-container">
              <div className="info-label">Delivery By</div>
            </div>
            <div className="product-container-load">
              <div className="material-type-bid">April 23 10:30AM</div>
            </div>
          </div>

          <div className="truck-info">
            <div className="info-label">Truck Types</div>
            <div>
              <div
                className="truck-container"
                style={{ justifyContent: "unset" }}
              >
                <img
                  src={miniPickup}
                  alt="phone"
                  style={{ width: 31, height: 31 }}
                />

                <div className="carrier-name">Open Half/Full Body</div>
              </div>
            </div>
          </div>

          <div className="material-info">
            <div className="info-container">
              <div className="info-label">Products</div>
            </div>
            <div className="product-container-load">
              <div className="material-type-bid">Aesbestos sheet</div>
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
        </div> */}

        <IonCard className="carrier-card ion-padding-top ion-no-padding">
          <IonCardContent className="ion-no-padding">
            <IonGrid className="ion-no-padding">
              <IonRow>
                <IonCol size="12">
                  <div className="route-info">
                    <div className="route-point-bid">
                      <div className="info-label">From</div>
                      <div className="location-text">
                        Kharagpur, West Bengal
                      </div>
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
                      <div className="location-text">
                        Jalpaiguri, West Bengal
                      </div>
                    </div>
                  </div>
                </IonCol>
              </IonRow>
              <IonRow className="ion-padding-top">
                <IonCol size="12">
                  <div className="material-info">
                    <div className="info-container">
                      <div className="info-label">Delivery By</div>
                    </div>
                    <div className="product-container-load">
                      <div className="material-type-bid">April 23 10:30AM</div>
                    </div>
                  </div>
                </IonCol>
              </IonRow>
              <IonRow className="ion-padding-top">
                <IonCol size="12">
                  <div className="truck-info">
                    <div className="info-label">Truck Types</div>
                    <div>
                      <div
                        className="truck-container"
                        style={{ justifyContent: "unset" }}
                      >
                        <img
                          src={miniPickup}
                          alt="phone"
                          style={{ width: 31, height: 31 }}
                        />

                        <div className="carrier-name">Open Half/Full Body</div>
                      </div>
                    </div>
                  </div>
                </IonCol>
              </IonRow>
              <IonRow className="ion-padding-top">
                <IonCol size="12">
                  <div className="material-info">
                    <div className="info-container">
                      <div className="info-label">Products</div>
                    </div>
                    <div className="product-container-load">
                      <div className="material-type-bid">Aesbestos sheet</div>
                    </div>
                  </div>
                </IonCol>
              </IonRow>
              <IonRow className="ion-padding-top">
                <IonCol size="12">
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
                </IonCol>
              </IonRow>
              <IonRow className="ion-padding-top">
                <IonCol size="12">
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
                </IonCol>
              </IonRow>
            </IonGrid>
          </IonCardContent>
        </IonCard>

        <IonCard className="carrier-card pt-1x ion-no-padding">
          <IonCardContent className="ion-no-padding">
            <IonRow>
              <IonCol size="12">
                <IonInput
                  // className={`${isValid && 'ion-valid'} ${isValid === false && 'ion-invalid'} ${isTouched && 'ion-touched'}`}
                  type="text"
                  fill="outline"
                  label="From"
                  labelPlacement="floating"
                  errorText=""
                  className="custom-input"
                  placeholder="Enter a Source"
                  helperText=""
                  mode="md"
                ></IonInput>
              </IonCol>
            </IonRow>
            <IonRow className="pt-2x">
              <IonCol size="12">
                <IonInput
                  // className={`${isValid && 'ion-valid'} ${isValid === false && 'ion-invalid'} ${isTouched && 'ion-touched'}`}
                  type="text"
                  fill="outline"
                  label="To"
                  labelPlacement="floating"
                  errorText=""
                  className="custom-input"
                  placeholder="Enter a destination"
                  helperText=""
                  mode="md"
                ></IonInput>
              </IonCol>
            </IonRow>
          </IonCardContent>
        </IonCard>
        <IonRow className="">
          <IonCol size="12">
            <IonButton
              expand="block"
              className="confirm-button"
              routerLink="/app/dashboard"
            >
              Place Bid
            </IonButton>
          </IonCol>
        </IonRow>
      </IonContent>
    </IonPage>
  );
};

export default PlaceBid;
