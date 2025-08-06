import type React from "react";
import {
  IonButton,
  IonButtons,
  IonCol,
  IonContent,
  IonHeader,
  IonIcon,
  IonModal,
  IonPage,
  IonRefresher,
  IonRefresherContent,
  IonSpinner,
  IonTitle,
  IonToolbar,
  RefresherEventDetail,
} from "@ionic/react";
import "./LoadDetails.css";
import Header from "../../components/Header";
import TripCardDetails from "../../components/TripCardDetails";
import "../../assets/styles/main.css";
import { calendarOutline, listOutline, close } from "ionicons/icons";
import { useEffect, useState } from "react";
import { DateRange } from "react-date-range";
import { postApiCall } from "../../utils/api/api";
import { IndentData } from "../../utils/app.types";
import { useParams } from "react-router";
import { format, subMonths } from "date-fns";


const TripDetails: React.FC = () => {
  const { tripId } = useParams<{ tripId: string }>();
  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const [selectionRange, setSelectionRange] = useState({
    startDate: subMonths(new Date(), 4),
    endDate: new Date(),
    key: "selection",
  });
  const [tripDetails, setTripDetails] = useState<IndentData[]>([]);

  useEffect(() => {
    getTripDetails();
  }, [selectionRange.startDate, selectionRange.endDate]);

  const getTripDetails = async () => {
    try {
      setLoading(true);
      const response = await postApiCall({
        "UsersID": 6,
        "IntentStatus": tripId,
        "FromDate": format(selectionRange.startDate, "yyyy-MM-dd"),
        "ToDate": format(selectionRange.endDate, "yyyy-MM-dd"),
      }, "getMyIntentLoads");

      // const response = await postApiCall({
      //   "UsersID": 6,
      //   "FromDate": "2025-01-01",
      //   "ToDate": "2025-08-10",
      //   "IntentStatus": "Indent"
      // }, "getMyIntentLoads");

      if (response?.status) {
        setTripDetails(response.data as IndentData[]);
      } else {
        setTripDetails([]);
      }
    } catch (error) {
      console.log(error);
      setTripDetails([]);
    } finally {
      setLoading(false);
    }
  }

  const handleRefresh = async (event: CustomEvent<RefresherEventDetail>) => {
    await getTripDetails();
    event.detail.complete();
  }

  return (
    <IonPage>
      <Header
        showBackButton={true}
        showHamburgerMenu={false}
        showUserIcon={false}
        showIcon={false}
      />
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
          <IonCol size="12">
            <div className="trips-container">
              <div className="title">In Transit ({tripDetails.length})</div>
              <div
                style={{ display: "flex", flexDirection: "row", gap: "10px" }}
              >
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
                {/* <div className="trip-icon-box">
                  <IonIcon
                    slot="icon-only"
                    icon={listOutline}
                    size="large"
                    onClick={() => {
                      console.log("clicked modal");
                    }}
                  ></IonIcon>
                </div> */}
              </div>
            </div>
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

          {loading ? (
            <div style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              padding: '40px',
              flexDirection: 'column',
              gap: '16px'
            }}>
              <IonSpinner name="crescent" style={{ width: '40px', height: '40px' }} />
            </div>
          ) : tripDetails.length > 0 ? (
            tripDetails.map((el: IndentData, index: number) => (
              <TripCardDetails key={index} data={el} />
            ))
          ) : (
            <div style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              padding: '40px',
              flexDirection: 'column',
              gap: '16px'
            }}>
              <div style={{
                fontSize: '48px',
                color: '#ccc',
                marginBottom: '8px'
              }}>📋</div>
              <div style={{
                fontSize: '18px',
                fontWeight: 'bold',
                color: '#333',
                textAlign: 'center'
              }}>No Trips Found</div>
              <div style={{
                fontSize: '14px',
                color: '#666',
                textAlign: 'center',
                maxWidth: '280px'
              }}>
                No trip details found for the selected date range. Try adjusting your filters or date selection.
              </div>
            </div>
          )}
        </div>
      </IonContent>
    </IonPage>
  );
};

export default TripDetails;
