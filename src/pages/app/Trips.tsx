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
  RefresherEventDetail,
  IonRefresher,
  IonRefresherContent,
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
import { format, subMonths } from "date-fns";

interface TripStatus {
  label: string;
  count: number;
}

const Trips: React.FC = () => {
  const [showModal, setShowModal] = useState(false);

  const [selectionRange, setSelectionRange] = useState({
    startDate: subMonths(new Date(), 1),
    endDate: new Date(),
    key: "selection",
  });
  const history = useHistory<History>();
  const [present] = useIonToast();
  const { user } = useAuth();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [tripsList, setTripsList] = useState<TripStatus[]>([]);

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
  useEffect(() => {
    getTrips();
  }, [selectionRange.startDate, selectionRange.endDate])


  const getTrips = async () => {
    try {
      const response = await postApiCall({
        "UsersID": user?.UsersID,
        "FromDate": format(selectionRange.startDate, "yyyy-MM-dd"),
        "ToDate": format(selectionRange.endDate, "yyyy-MM-dd")
      }, "getMyTripsList");
      console.log(response);
      if (response?.status) {
        const tripsList: TripStatus[] = [];
        Object.keys(response.data).forEach((key: string) => {
          tripsList.push({ label: key, count: response.data[key] });
        });
        setTripsList(tripsList);
      }
    } catch (error) {
      presentToast("Something went wrong", "top", "danger");
      console.error(error);
    }

  }
  const onModalClose = () => { };

  const handleTrips = (tripId: string) => {
    console.log("handle trips")
    history.push(`/app/tripDetails/${tripId}`)
  };
  // useEffect(() => {
  //   let tripsList: any = [
  //     { label: "Indent", count: 0 },
  //     { label: "Loading", count: 0 },
  //     { label: "In transit", count: 0 },
  //     { label: "Unloading", count: 0 },
  //     { label: "POD-Pending", count: 0 },
  //     { label: "Closed", count: 0 },
  //     { label: "Cancelled", count: 0 },
  //   ]
  //   setTripsList(tripsList)
  // }, [])


  const handleRefresh = async (event: CustomEvent<RefresherEventDetail>) => {
    await getTrips();
    event.detail.complete();
  }

  return (
    <IonPage>
      <Header showBackButton={true} showIcon={false} />
      <IonContent className="ion-padding">
        <IonRefresher slot="fixed" pullFactor={0.5} pullMin={100} pullMax={200} onIonRefresh={handleRefresh}>
          <IonRefresherContent></IonRefresherContent>
        </IonRefresher>
        <IonGrid className="ion-no-padding">
          <IonRow>
            <IonCol size="12">
              <div className="trips-container">
                <div className="title">Trips</div>
                <div className="trip-icon-box">
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
              </div>
            </IonCol>
            <IonCol size="12" style={{ display: "flex", flexDirection: "column", gap: "16px", marginTop: "30px" }}>
              {
                tripsList.map((el: any, index: any) =>
                  <IonCard className="trip-card ion-no-margin mb-1.5x" key={index} onClick={() => handleTrips(el.label)}>
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
