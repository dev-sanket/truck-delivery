import type React from "react";
import {
  IonContent,
  IonPage,
  IonCard,
  IonCardContent,
  IonIcon,
  IonGrid,
  IonRow,
  IonCol,
  IonLabel,
  IonButtons,
  useIonToast,
  IonRefresher,
  IonRefresherContent,
  RefresherEventDetail,
} from "@ionic/react";
import { chevronForward } from "ionicons/icons";
import "./NewDashboard.css";
import Header from "../../components/Header";
import { useHistory } from "react-router";
import { useEffect, useState } from "react"; // ✅ Added
import banner from "../../assets/images/banner.png";


import truckIcon from "../../assets/images/icons/truck_icon.svg";
import tripsIcon from "../../assets/images/icons/trips_icon.svg";
import insuranceIcon from "../../assets/images/icons/insurance_icon.svg";
import mechanicIcon from "../../assets/images/icons/mechanic_icon.svg";
import legalAdviceIcon from "../../assets/images/icons/legal_advice_icon.svg";
import rechargeIcon from "../../assets/images/icons/recharge_icon.svg";
import tollRechargeIcon from "../../assets/images/icons/toll_recharge_icon.svg";
import dhabaIcon from "../../assets/images/icons/dhaba_icon.svg";
import { useAuth } from "../../store/AuthContext";
import { getApiCall, postApiCall } from "../../utils/api/api";

const otherServices = [
  { icon: insuranceIcon, title: "Insurance" },
  { icon: rechargeIcon, title: "Recharge" },
  { icon: tollRechargeIcon, title: "Toll Recharge" },
  { icon: mechanicIcon, title: "Mechanic" },
  { icon: dhabaIcon, title: "Dhaba" },
  { icon: legalAdviceIcon, title: "Legal Advice" },
];

interface DashboardData {
  KYCVerification: boolean;
  UserDetails: {
    UsersID: string;
    FullName: string;
    MobileNumber: string;
    AadharDocument: string;
    PanDocument: string;
    RCDocument: string;
  }
}

const NewDashboard: React.FC = () => {
  const history = useHistory<History>();
  const [present] = useIonToast();
  const { user } = useAuth();
  if (!user) {
    history.push("/auth");
  }
  const [dashboardData, setDashboardData] = useState<DashboardData>();
  const handleKyc = () => history.push("/app/kyc-verification");
  const handleLoad = () => history.push("/app/load");
  const handleTrips = () => history.push("/app/trips");
  const presentToast = (position: "top" | "middle" | "bottom") => {
    present({ message: "Coming Soon!", duration: 1500, position });
  };

  useEffect(() => {
    const routerOutlet = document.querySelector("ion-router-outlet") as any;
    if (routerOutlet) {
      routerOutlet.swipeHandler = undefined;
    }
    getDashboardData();
  }, []);

  // ✅ Add left swipe to exit app
  useEffect(() => {
    let touchStartX = 0;
    let touchEndX = 0;

    const handleTouchStart = (e: TouchEvent) => {
      touchStartX = e.changedTouches[0].screenX;
    };

    const handleTouchEnd = (e: TouchEvent) => {
      touchEndX = e.changedTouches[0].screenX;
      if (touchStartX - touchEndX > 75) {
        // Left swipe detected
        (window as any).navigator.app?.exitApp?.();
      }
    };

    document.addEventListener("touchstart", handleTouchStart);
    document.addEventListener("touchend", handleTouchEnd);

    return () => {
      document.removeEventListener("touchstart", handleTouchStart);
      document.removeEventListener("touchend", handleTouchEnd);
    };
  }, []);

  const getDashboardData = async () => {
    const response = await postApiCall({
      "UsersID": user?.UsersID
    }, "dashboard");
    console.log(response);
    if (response?.status) {
      setDashboardData(response.data);
    }
  };

  const handleRefresh = async (event: CustomEvent<RefresherEventDetail>) => {
    await getDashboardData();
    event.detail.complete();
  }

  return (
    <IonPage>
      <Header
        showHamburgerMenu={true}
        showBackButton={false}
        showUserIcon={true}
      />
      <IonContent className="ion-padding">
        <IonRefresher slot="fixed" pullFactor={0.5} pullMin={100} pullMax={200} onIonRefresh={handleRefresh}>
          <IonRefresherContent></IonRefresherContent>
        </IonRefresher>
        <IonGrid className="ion-no-padding">
          <IonRow className="ion-justify-content-between">
            <IonCol size="12">
              <div>
                <img
                  src={banner}
                  alt="phone"
                  style={{
                    width: "100%",
                    height: "auto",
                    objectFit: "cover",
                    maxHeight: "134px",
                  }}
                />
              </div>
            </IonCol>
          </IonRow>
          {!dashboardData?.KYCVerification && (
            <IonRow className="mt-2x">
              <IonCol size="12">
                <div
                  className="kyc-content kyc-card"
                  style={{ width: "100%" }}
                  onClick={handleKyc}
                >
                  <div>
                    <div className="kyc-title ion-margin-bottom">
                      KYC verification Pending
                    </div>
                    <div className="kyc-subtitle">
                      Verify KYC to enjoy verified loads
                    </div>
                  </div>
                  <IonIcon icon={chevronForward} className="kyc-arrow" />
                </div>
              </IonCol>
            </IonRow>
          )}
          <IonRow className="mt-2x">
            <IonCol size="12">
              <IonCard
                className="ion-no-margin"
                style={{ border: "1px solid #FFD600" }}
              >
                <IonCardContent>
                  <IonGrid>
                    <IonRow>
                      <IonCol
                        size="6"
                        className="ion-justify-content-center ion-align-self-center"
                      >
                        <IonButtons
                          onClick={handleLoad}
                          className="ion-justify-content-center ion-align-self-center"
                          style={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            justifyContent: "center",
                          }}
                        >
                          <IonIcon
                            slot="start"
                            src={truckIcon}
                            style={{
                              width: "50px",
                              height: "50px",
                              fontSize: "20px",
                              border: "1px solid #AB47BC",
                              borderRadius: "50%",
                              backgroundColor: "#F7D4FD",
                              padding: "10px",
                            }}
                          />
                          <IonLabel
                            className="kyc-title"
                            style={{ fontWeight: "normal" }}
                          >
                            LOADS
                          </IonLabel>
                        </IonButtons>
                      </IonCol>
                      <IonCol
                        size="6"
                        className="ion-justify-content-center ion-align-self-center"
                      >
                        <IonButtons
                          onClick={handleTrips}
                          className="ion-justify-content-center ion-align-self-center"
                          style={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            justifyContent: "center",
                          }}
                        >
                          <IonIcon
                            src={tripsIcon}
                            style={{
                              width: "50px",
                              height: "50px",
                              fontSize: "20px",
                              border: "1px solid #2E7D32",
                              borderRadius: "50%",
                              backgroundColor: "#5CECDF",
                              padding: "10px",
                            }}
                          />
                          <IonLabel
                            className="kyc-title"
                            style={{ fontWeight: "normal" }}
                          >
                            TRIPS
                          </IonLabel>
                        </IonButtons>
                      </IonCol>
                    </IonRow>
                  </IonGrid>
                </IonCardContent>
              </IonCard>
            </IonCol>
          </IonRow>
          <IonRow className="mt-2x">
            <IonCol size="12">
              <IonGrid className="ion-no-padding mb-2.5x">
                <IonRow>
                  <IonCol size="12">
                    <div
                      style={{
                        textAlign: "center",
                        fontSize: "30px",
                        fontWeight: "600",
                        color: "#000000",
                      }}
                    >
                      Other Services
                    </div>
                  </IonCol>
                </IonRow>
              </IonGrid>
              <IonGrid className="ion-no-padding">
                <IonRow>
                  {otherServices.map((service, index) => (
                    <IonCol
                      key={index}
                      size="4"
                      className="ion-justify-content-center ion-align-self-center mb-2x"
                    >
                      <div
                        className="ion-justify-content-center ion-align-self-center"
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        <IonIcon
                          src={service.icon}
                          style={{
                            width: "50px",
                            height: "50px",
                            fontSize: "20px",
                            border: "1px solid #979797",
                            borderRadius: "50%",
                            backgroundColor: "#E4E4E4",
                            padding: "10px",
                          }}
                        />
                        <IonLabel
                          className="kyc-title"
                          style={{ fontWeight: 500, fontSize: 13 }}
                        >
                          {service.title}
                        </IonLabel>
                      </div>
                    </IonCol>
                  ))}
                </IonRow>
              </IonGrid>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default NewDashboard;
