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
  IonFooter,
  IonRefresher,
  IonRefresherContent,
  RefresherEventDetail,
} from "@ionic/react";

import arrow from "../../assets/images/arrow.png";
import miniPickup from "../../assets/images/miniTruckBlack.png";
import "../../assets/styles/main.css";

import Header from "../../components/Header";
import rupeeIcon from "../../assets/images/icons/indian-rupee.svg";
import { useEffect, useState } from "react";
import { postApiCall } from "../../utils/api/api";
import { LoadData } from "./NewLoadDetails";
import { useParams } from "react-router-dom";
const PlaceBid: React.FC = () => {
  const { loadId } = useParams<{ loadId: string }>();

  const [bidData, setBidData] = useState<LoadData | null>(null);

  useEffect(() => {
    getLoadDetails();
  })

  const getLoadDetails = async () => {
    const response = await postApiCall({
      "LoadsID": loadId
    }, "getLoadDetails");
    if (response?.status) {
      setBidData(response.data);
    }
  }

  const handleRefresh = async (event: CustomEvent<RefresherEventDetail>) => {
    await getLoadDetails();
    event.detail.complete();
  }

  return (
    <IonPage>
      <IonRefresher slot="fixed" pullFactor={0.5} pullMin={100} pullMax={200} onIonRefresh={handleRefresh}>
        <IonRefresherContent></IonRefresherContent>
      </IonRefresher>
      <Header showBackButton={true} />
      <IonContent className="ion-padding mt-2x">
        <IonGrid className="ion-no-margin">
          <IonRow className="ion-no-margin">
            <IonCol size="12">
              <IonCard className="carrier-card ion-no-margin">
                <IonCardContent className="ion-no-padding">
                  <IonGrid className="ion-no-padding">
                    <IonRow>
                      <IonCol size="12">
                        <div className="route-info">
                          <div className="route-point-bid">
                            <div className="info-label">From</div>
                            <div className="location-text">
                              {bidData?.LoadFrom}
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
                              {bidData?.LoadTo}
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
                            <div className="material-type-bid">{bidData?.LoadCreated}</div>
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
                            <div className="material-type-bid">{bidData?.ProductWeight} TON</div>
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
            </IonCol>
          </IonRow>
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
                    <IonCol size="12">
                      <IonInput
                        // className={`${isValid && 'ion-valid'} ${isValid === false && 'ion-invalid'} ${isTouched && 'ion-touched'}`}
                        type="number"
                        fill="outline"
                        label="Driver Name"
                        labelPlacement="floating"
                        errorText="Invalid number"
                        className="custom-input"
                        placeholder="Enter a valid driver name"
                        helperText=""
                        mode="md"
                        inputmode="numeric"
                      />

                    </IonCol>
                    <IonCol size="12">
                      <IonInput
                        // className={`${isValid && 'ion-valid'} ${isValid === false && 'ion-invalid'} ${isTouched && 'ion-touched'}`}
                        type="number"
                        fill="outline"
                        label="Driver Contact Number"
                        labelPlacement="floating"
                        errorText="Invalid number"
                        className="custom-input"
                        placeholder="Enter a valid driver contact number"
                        helperText=""
                        mode="md"
                        inputmode="numeric"
                      />

                    </IonCol>
                    <IonCol size="12">
                      <IonInput
                        // className={`${isValid && 'ion-valid'} ${isValid === false && 'ion-invalid'} ${isTouched && 'ion-touched'}`}
                        type="number"
                        fill="outline"
                        label="Vehicle Number"
                        labelPlacement="floating"
                        errorText="Invalid number"
                        className="custom-input"
                        placeholder="Enter a valid driver contact number"
                        helperText=""
                        mode="md"
                        inputmode="numeric"
                      />

                    </IonCol>
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

                </IonCardContent>
              </IonCard>

            </IonCol>

          </IonRow>


          {/* <IonRow className="">
            <IonCol size="12">
              <IonButton
                expand="block"
                className="confirm-button"
                routerLink="/app/dashboard"
              >
                Quote PMT
              </IonButton>
            </IonCol>
          </IonRow> */}
        </IonGrid>


      </IonContent>
      {/* <IonFooter>
        <IonButton expand="block" className="confirm-button" routerLink="/app/dashboard">
          Place Bid
        </IonButton>
      </IonFooter> */}
    </IonPage>
  );
};

export default PlaceBid;
