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
  IonRefresher,
  IonRefresherContent,
  RefresherEventDetail,
  useIonToast,
  IonSpinner,
} from "@ionic/react";

import arrow from "../../assets/images/arrow.png";
import miniPickup from "../../assets/images/miniTruckBlack.png";
import "../../assets/styles/main.css";

import Header from "../../components/Header";
import rupeeIcon from "../../assets/images/icons/indian-rupee.svg";
import { useEffect, useState } from "react";
import { postApiCall } from "../../utils/api/api";
import { LoadData } from "../../utils/app.types";
import { useHistory, useParams } from "react-router-dom";
import { Formik } from "formik";
import { PlaceBidFormValidation } from "../../utils/validator";
import { useAuth } from "../../store/AuthContext";
import { format } from "date-fns";

const initialValues = {
  BidAmount: "",
  DriverName: "",
  DriverContactNumber: "",
  VehicleNumber: ""
}
const PlaceBid: React.FC = () => {
  const { loadId } = useParams<{ loadId: string }>();
  const router = useHistory();
  const [bidData, setBidData] = useState<LoadData | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const { user } = useAuth();
  const [present] = useIonToast();

  const presentToast = (position: "top" | "middle" | "bottom", message: string, color: 'success' | 'danger' | 'warning' = "success") => {
    present({
      message: message,
      duration: 1500,
      position: position,
      color: color,
    });
  };
  useEffect(() => {
    getLoadDetails();
  }, []);

  const getLoadDetails = async () => {
    try {
      setIsLoading(true);
      const response = await postApiCall({
        "LoadsID": loadId
      }, "getLoadDetails");
      if (response?.status) {
        setBidData(response.data);
      }
    } catch (error) {
      presentToast("top", "Error fetching load details!", "danger");
      console.error('Error fetching load details:', error);
    } finally {
      setIsLoading(false);
    }
  }

  const handleRefresh = async (event: CustomEvent<RefresherEventDetail>) => {
    await getLoadDetails();
    event.detail.complete();
  }

  const handlePlaceBid = async (values: typeof initialValues) => {
    console.log("handlePlaceBid", values);
    try {
      setIsLoading(true);
      const payload = {
        "LoadsID": loadId,
        "UsersID": user?.UsersID,
        "BidAmount": values.BidAmount,
        "BidQuantity": bidData?.ProductWeight,
        "DriverName": values.DriverName,
        "DriverContactNumber": values.DriverContactNumber,
        "VehicleNumber": values.VehicleNumber
      }
      const response = await postApiCall(payload, "addBid ");
      if (response?.status) {
        presentToast("top", "Bid placed successfully!", "success");
        router.push("/app/dashboard");
      } else {
        presentToast("top", response?.message || "Something went wrong! Please try again.", "warning");
      }
    } catch (error) {
      presentToast("top", "Error placing bid!", "danger");
      console.error('Error placing bid:', error);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <IonPage>
      <Header showBackButton={true} />
      <IonContent className="ion-padding mt-2x">
        <IonRefresher slot="fixed" pullFactor={0.5} pullMin={100} pullMax={200} onIonRefresh={handleRefresh}>
          <IonRefresherContent></IonRefresherContent>
        </IonRefresher>
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
                            <div className="material-type-bid">{format(new Date(bidData?.LoadCreated || ""), "dd MMM yyyy HH:mm")}</div>
                            <div className="material-type-bid">₹{bidData?.RatePerTon ? parseFloat(bidData.RatePerTon) : 0}</div>
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
                  <Formik
                    initialValues={initialValues}
                    validationSchema={PlaceBidFormValidation(bidData?.RatePerTon ? parseFloat(bidData.RatePerTon) : undefined)}
                    onSubmit={handlePlaceBid}
                  >
                    {({ values, handleSubmit, isValid, setFieldValue, errors }) => (
                      <form onSubmit={handleSubmit}>
                        <IonRow>
                          <IonCol size="12">
                            <IonInput
                              className={`custom-input ${isValid && 'ion-valid'} ${isValid === false && 'ion-invalid'}`}
                              type="number"
                              fill="outline"
                              label="Bid Amount(*)"
                              labelPlacement="floating"
                              errorText={errors.BidAmount}
                              name="BidAmount"
                              onIonInput={(e) => {
                                setFieldValue("BidAmount", e.detail.value);
                              }}
                              value={values.BidAmount}
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
                              className={`custom-input ${isValid && 'ion-valid'} ${isValid === false && 'ion-invalid'}`}
                              type="text"
                              fill="outline"
                              label="Driver Name"
                              labelPlacement="floating"
                              errorText={errors.DriverName}
                              name="DriverName"
                              onIonInput={(e) => {
                                setFieldValue("DriverName", e.detail.value);
                              }}
                              value={values.DriverName}
                              placeholder="Enter a valid driver name"
                              helperText=""
                              mode="md"
                            />

                          </IonCol>
                          <IonCol size="12">
                            <IonInput
                              className={`custom-input ${isValid && 'ion-valid'} ${isValid === false && 'ion-invalid'}`}
                              type="number"
                              fill="outline"
                              label="Driver Contact Number(*)"
                              labelPlacement="floating"
                              errorText={errors.DriverContactNumber}
                              name="DriverContactNumber"
                              onIonInput={(e) => {
                                setFieldValue("DriverContactNumber", e.detail.value);
                              }}
                              maxlength={10}
                              value={values.DriverContactNumber}
                              placeholder="Enter a valid driver contact number"
                              helperText=""
                              mode="md"
                              inputmode="numeric"
                            />

                          </IonCol>
                          <IonCol size="12">
                            <IonInput
                              className={`custom-input ${isValid && 'ion-valid'} ${isValid === false && 'ion-invalid'}`}
                              type="text"
                              fill="outline"
                              label="Vehicle Number"
                              labelPlacement="floating"
                              errorText={errors.VehicleNumber}
                              name="VehicleNumber"
                              onIonInput={(e) => {
                                setFieldValue("VehicleNumber", e.detail.value);
                              }}
                              value={values.VehicleNumber}
                              placeholder="Enter a valid driver contact number"
                              helperText=""
                              mode="md"
                            />

                          </IonCol>
                          <IonCol size="12">
                            <IonButton
                              expand="block"
                              disabled={isLoading || !isValid}
                              onClick={() => handleSubmit()}
                              className="confirm-button"
                            >
                              {isLoading && <IonSpinner name="crescent" color="light" />}
                              {isLoading ? "Placing Bid..." : "Quote PMT"}
                            </IonButton>
                          </IonCol>
                        </IonRow>
                      </form>
                    )}
                  </Formik>

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
