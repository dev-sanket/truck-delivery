import type React from "react";
import {
  IonContent,
  IonPage,
  IonButton,
  IonIcon,
  IonLabel,
  useIonToast,
  IonRefresher,
  IonRefresherContent,
  RefresherEventDetail,
  IonModal,
  IonList,
  IonItem,
  IonAvatar,
  IonImg,
  IonFooter,
  IonButtons,
  IonTitle,
} from "@ionic/react";
import {
  chevronBack,
  filter
} from "ionicons/icons";

import LoadCarrierDetails from "../../components/LoadcarrierDetails";
import "./NewLoadDetails.css";
import "../../assets/styles/main.css";
import {
  IonHeader,
  IonSegment,
  IonSegmentButton,
  IonToolbar,
} from "@ionic/react";
import { useEffect, useRef, useState } from "react";
import { useHistory, useLocation } from "react-router";
import { postApiCall } from "../../utils/api/api";
import { useAuth } from "../../store/AuthContext";

import lcvTruck from "../../assets/images/LcvTruck.png";
import openTruck from "../../assets/images/openTruck.png";
import Trailer from "../../assets/images/Trailer.png";
import miniPickup from "../../assets/images/miniPickUpTruck.png";

export interface LoadData {
  LoadsID: string;
  UsersID: string;
  FullName: string;
  ProductType: string;
  ProductWeight: string;
  LoadFrom: string;
  LoadTo: string;
  Status: string;
  LoadCreated: string;
}
const NewLoadDetails: React.FC = () => {
  const filtersModal = useRef<HTMLIonModalElement>(null);
  const { user } = useAuth();
  const history = useHistory<History>();
  const location = useLocation<{ fromLocation: string, toLocation: string }>();
  const { fromLocation, toLocation } = location.state || { fromLocation: "", toLocation: "" };
  const [loadData, setLoadData] = useState<LoadData[]>([]);
  const [truckType, setTruckType] = useState<string>("open");

  if (!user) {
    history.push("/auth");
  }

  const [present] = useIonToast();
  const presentToast = (position: "top" | "middle" | "bottom", message: string, color: 'success' | 'danger' | 'warning' = "success") => {
    present({
      message: message,
      duration: 1500,
      position: position,
      color: color,
    });
  };
  const [selectedSegment, setSelectedSegment] = useState("open");
  const handleSegmentChange = (e: CustomEvent) => {
    console.log(e);
    if (e.detail.value == "open" || e.detail.value == "confirmed") {
      setSelectedSegment(e.detail.value);
    } else {
      presentToast("middle", "Something went wrong", 'danger');
    }
  };

  useEffect(() => {
    getLoadDetails();
  }, []);

  const getLoadDetails = async () => {
    try {
      const response = await postApiCall({
        "UsersID": user?.UsersID,
        "LoadFrom": fromLocation,
        "LoadTo": toLocation
      }, "SearchLoad");
      console.log("Response", response);
      if (response?.status) {
        setLoadData(response.data);
      } else {
        console.log("Response111", response);
        const message = response?.errors?.errorMessage || response?.message || "Something went wrong";
        presentToast('top', message, 'danger');
      }

    } catch (error) {
      presentToast('top', "Something went wrong", 'danger');
      console.error(error);
    }
  };

  const handleRefresh = async (event: CustomEvent<RefresherEventDetail>) => {
    await getLoadDetails();
    event.detail.complete();
  }

  return (
    <IonPage>

      <IonHeader>
        <IonToolbar>
          <IonSegment value={selectedSegment} onIonChange={handleSegmentChange}>
            {["open", "pending", "confirmed", "history"].map((segment) => (
              <IonSegmentButton
                key={segment}
                value={segment}
                mode="md"
                className={
                  selectedSegment === segment
                    ? "active-segment"
                    : "inactive-segment"
                }
                style={
                  {
                    "--padding-start": "0px",
                    "--padding-end": "0px",
                    minWidth: "0px",
                  } as React.CSSProperties
                }
              >
                <div className="segment-label">
                  {segment === "open" && "Open(15)"}
                  {segment === "pending" && "Pending(0)"}
                  {segment === "confirmed" && "Confirmed(13)"}
                  {segment === "history" && "History(4)"}
                </div>
              </IonSegmentButton>
            ))}
          </IonSegment>
        </IonToolbar>
      </IonHeader>

      {selectedSegment === "open" && (
        <IonContent
          className="ion-padding"
          style={
            {
              "--padding-start": "0px",
              "--padding-end": "0px",
            } as React.CSSProperties
          }
        >
          <IonRefresher slot="fixed" pullFactor={0.5} pullMin={100} pullMax={200} onIonRefresh={handleRefresh}>
            <IonRefresherContent></IonRefresherContent>
          </IonRefresher>
          <div className="load-details-container">
            <div className="button-container">
              <IonButton size="small" fill="outline" onClick={() => history.goBack()} className="header-back-button">
                <IonIcon slot="icon-only" ios={chevronBack} md={chevronBack} size="large"></IonIcon>
              </IonButton>
              <IonButton className="btn1">All Loads</IonButton>
              <IonButton className="btn2">My Bids</IonButton>
              <IonButton className="btn2">No Bids</IonButton>
              <IonButton size="small" fill="outline" id="filters-modal" className="header-back-button">
                <IonIcon slot="icon-only" ios={filter} md={filter} size="large"></IonIcon>
              </IonButton>
            </div>
            {
              loadData.map((item: LoadData) => (
                <LoadCarrierDetails showLabel={true} data={item} key={item.LoadsID} />
              ))
            }
            <IonModal ref={filtersModal} mode="ios" trigger="filters-modal" initialBreakpoint={0.25} breakpoints={[0, 0.25, 0.5, 0.75]}>
              <IonHeader>
                <IonToolbar>
                  <IonTitle>Modal</IonTitle>
                  <IonButtons slot="end">
                    <IonButton onClick={() => filtersModal.current?.dismiss()}>Close</IonButton>
                  </IonButtons>
                </IonToolbar>
              </IonHeader>
              <IonContent className="ion-padding">
                <IonLabel>Truck Type</IonLabel>
                <div className="vehicle-chip-container">

                  <div className={`vehicle-chip ${truckType === "open" ? "active" : ""}`} onClick={() => setTruckType("open")}>
                    <img src={openTruck} alt="phone" style={{ width: 30, height: 30 }} />
                    <div className="vehicle-chip-header">Open</div>
                  </div>
                  <div className={`vehicle-chip ${truckType === "dc" ? "active" : ""}`} onClick={() => setTruckType("dc")}>
                    <img src={lcvTruck} alt="phone" style={{ width: 30, height: 30 }} />
                    <div className="vehicle-chip-header">DCM</div>
                    <div className="description">7.5 to 46 Ton</div>
                  </div>
                  <div className={`vehicle-chip ${truckType === "mini" ? "active" : ""}`} onClick={() => setTruckType("mini")}>
                    <img src={Trailer} alt="phone" style={{ width: 30, height: 30 }} />
                    <div className="vehicle-chip-header">Mini/Pickup</div>
                    <div className="description">2.5 to 7 Ton</div>
                  </div>
                  <div className={`vehicle-chip ${truckType === "trailer" ? "active" : ""}`} onClick={() => setTruckType("trailer")}>
                    <img src={miniPickup} alt="phone" style={{ width: 30, height: 30 }} />
                    <div className="vehicle-chip-header">Trailer</div>
                    <div className="description">7.5 to 46 Ton</div>
                  </div>

                </div>

                <IonButton expand="block" color="primary" className="mt-2.5x" onClick={() => filtersModal.current?.dismiss()}>Apply</IonButton>

              </IonContent>

            </IonModal>
          </div>
        </IonContent>
      )}

      {selectedSegment === "confirmed" && (
        <IonContent
          className="ion-padding"
          style={
            {
              "--padding-start": "0px",
              "--padding-end": "0px",
            } as React.CSSProperties
          }
        >
          <div className="load-details-container">
            <div className="button-container">
              <IonButton size="small" fill="outline" onClick={() => history.goBack()} className="header-back-button">
                <IonIcon slot="icon-only" ios={chevronBack} md={chevronBack} size="large"></IonIcon>
              </IonButton>
              <IonButton className="btn1">All Loads</IonButton>
              <IonButton className="btn2">My Bids</IonButton>
              <IonButton className="btn2">No Bids</IonButton>
            </div>
            {
              loadData.map((item: LoadData) => (
                <LoadCarrierDetails showLabel={true} data={item} key={item.LoadsID} />
              ))
            }

          </div>
        </IonContent>
      )}
    </IonPage>
  );
};

export default NewLoadDetails;
