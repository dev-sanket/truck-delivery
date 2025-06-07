"use client";
import type React from "react";
import { useEffect, useState } from "react";
import {
  IonContent,
  IonPage,
  IonInput,
  IonButton,
  IonItem,
  IonLabel,
  IonGrid,
  IonRow,
  IonCol,
  IonList,
  IonSelect,
  IonSelectOption,
  useIonToast,
  useIonRouter,
  IonSpinner,
  IonModal,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonButtons,
  IonIcon,
  IonCard,
} from "@ionic/react";
import "../../assets/styles/main.css";
import Header from "../../components/Header";
import { useAuth } from "../../store/AuthContext";
import { CreateLoadFormValidation } from "../../utils/validator";
import { Formik } from "formik";
import * as Yup from "yup";
import { postApiCall } from "../../utils/api/api";
import { useHistory } from "react-router-dom";
import {
  calendarOutline,
  chevronBack,
  chevronForwardOutline,
  close,
} from "ionicons/icons";
import { DateRange } from "react-date-range";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { format } from "date-fns";
const Trips: React.FC = () => {
  const [showModal, setShowModal] = useState(false);
  const [tripsList, setTripsList] = useState([]);
  const [selectionRange, setSelectionRange] = useState({
    startDate: new Date(),
    endDate: new Date(),
    key: "selection",
  });
  const history = useHistory<History>();
  const [present] = useIonToast();
  const { user } = useAuth();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const presentToast = (
    message: string,
    position: "top" | "middle" | "bottom",
    color: "danger" | "success" | "warning" = "success"
  ) => {
    present({
      message: message,
      duration: 1500,
      position: position,
      color: color,
    });
  };
  const onModalClose = () => {};

  useEffect(()=>{
    let tripsList :any= [
      {label:"Indent",count:13},
      {label:"Loading",count:0},
      {label:"In transit",count:10},
      {label:"Unloading",count:10},
      {label:"POD-Pending",count:12},
      {label:"Closed",count:12},
      {label:"Cancelled",count:10},
    ]
    setTripsList(tripsList)
  },[])
  return (
    <IonPage>
      <Header showBackButton={true} />
      <IonContent className="ion-padding">
        <IonGrid className="ion-no-padding">
          <IonRow>
            <IonCol size="12">
              <div className="trips-container">
                <div className="title">Trips</div>
                <IonIcon
                  slot="icon-only"
                  icon={calendarOutline}
                  size="large"
                  onClick={() => {
                    console.log("clicked modal");
                    setShowModal(true);
                  }}
                ></IonIcon>
              </div>
            </IonCol>
              <IonCol size="12"  style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                {
                  tripsList.map((el:any,index:any)=>
                  <IonCard className="trip-card" key={index}>
                  <div className="trip-card-container">
                    <div className="trip-card-label">{el.label}&nbsp;&nbsp;({el.count})</div>
                    <IonIcon
                      slot="icon-only"
                      icon={chevronForwardOutline}
                      size="large"
                    ></IonIcon>
                  </div>
                </IonCard>
                  )
                }

              </IonCol>
            <IonModal
              isOpen={showModal}
              className="small-modal"
              initialBreakpoint={0.75}
              breakpoints={[0, 0.75]}
              backdropDismiss={false}
            >
              <div className="modal-container">
                <IonHeader>
                  <IonToolbar>
                    <IonTitle>Select Date Range</IonTitle>
                    <IonButtons slot="end">
                      <IonButton onClick={() => setShowModal(false)}>
                        <IonIcon icon={close} />
                      </IonButton>
                    </IonButtons>
                  </IonToolbar>
                </IonHeader>

                {/* Use plain div instead of IonContent for full control */}
                <div className="calendar-wrapper">
                  <DateRange
                    ranges={[selectionRange]}
                    onChange={(ranges: any) => {
                      console.log(ranges, "RANGES");
                      setSelectionRange(ranges.selection);
                    }}
                    moveRangeOnFirstSelection={false}
                    editableDateInputs={true}
                    months={1}
                    direction="vertical"
                  />
                </div>
              </div>
            </IonModal>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};
export default Trips;
