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
  useIonToast,
} from "@ionic/react";
import {
  home,
  search as searchIcon,
  notifications,
  person,
  chevronForward,
  chevronBack
} from "ionicons/icons";
import lcvTruck from "../../assets/images/LcvTruck.png";
import openTruck from "../../assets/images/openTruck.png";
import Trailer from "../../assets/images/Trailer.png";
import miniPickup from "../../assets/images/miniPickUpTruck.png";
import redDot from "../../assets/images/redDot.png";
import LoadCarrierDetails from "../../components/LoadcarrierDetails";
import "./NewLoadDetails.css";
import "../../assets/styles/main.css";
import Header from "../../components/Header";
import {
  IonHeader,
  IonSegment,
  IonSegmentButton,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { useEffect, useState } from "react";
import { useHistory, useLocation } from "react-router";
import { postApiCall } from "../../utils/api/api";
import { useAuth } from "../../store/AuthContext";
const NewLoadDetails: React.FC = () => {
  const history = useHistory<History>();
  const location = useLocation<{ fromLocation: string, toLocation: string }>();
  const { fromLocation, toLocation } = location.state || { fromLocation: "", toLocation: "" };
  const { user } = useAuth();

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
        console.log(response.data);
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
          <div className="load-details-container">
            <div className="button-container">
              <IonButton size="small" fill="outline" onClick={() => history.goBack()} className="header-back-button">
                <IonIcon slot="icon-only" ios={chevronBack} md={chevronBack} size="large"></IonIcon>
              </IonButton>
              <IonButton className="btn1">All Loads</IonButton>
              <IonButton className="btn2">My Bids</IonButton>
              <IonButton className="btn2">No Bids</IonButton>
            </div>
            <LoadCarrierDetails />
            <LoadCarrierDetails />
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
            <LoadCarrierDetails showLabel={true} />
            <LoadCarrierDetails showLabel={true} />
          </div>
        </IonContent>
      )}
    </IonPage>
  );
};

export default NewLoadDetails;
