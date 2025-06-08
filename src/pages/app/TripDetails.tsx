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
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import "./LoadDetails.css";
import Header from "../../components/Header";
import TripCardDetails from "../../components/TripCardDetails";
import "../../assets/styles/main.css";
import { calendarOutline, listOutline, close } from "ionicons/icons";
import { useState } from "react";
import { DateRange } from "react-date-range";
const TripDetails: React.FC = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectionRange, setSelectionRange] = useState({
    startDate: new Date(),
    endDate: new Date(),
    key: "selection",
  });
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
        <div className="load-details-container">
          <IonCol size="12">
            <div className="trips-container">
              <div className="title">In Transit (3)</div>
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
                <div className="trip-icon-box">
                  <IonIcon
                    slot="icon-only"
                    icon={listOutline}
                    size="large"
                    onClick={() => {
                      console.log("clicked modal");
                    }}
                  ></IonIcon>
                </div>
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
          <TripCardDetails />
          <TripCardDetails />
        </div>
      </IonContent>
    </IonPage>
  );
};

export default TripDetails;
