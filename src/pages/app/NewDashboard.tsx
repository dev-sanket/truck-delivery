import type React from "react";
import {
  IonContent,
  IonPage,
  IonCard,
  IonCardContent,
  IonIcon,
  IonButton,
  IonGrid,
  IonRow,
  IonCol,
} from "@ionic/react";
import { chevronForward, navigate } from "ionicons/icons";
import "./NewDashboard.css";
import Header from "../../components/Header";
import { useHistory } from "react-router";
import banner from "../../assets/images/banner.png";
import load from "../../assets/images/load.png";
import trips from "../../assets/images/Trips.png";
import TollRecharge from "../../assets/images/TollRecharge.png";
import Mechanic from "../../assets/images/Mechanic.png";
import Dhaba from "../../assets/images/Dhaba.png";
import Insurance from "../../assets/images/Insurance.png";
import legalAdvice from "../../assets/images/legalAdvice.png";
import Recharge from "../../assets/images/Recharge.png";
const NewDashboard: React.FC = () => {
  const history = useHistory<History>();
  const handleKyc = () => {
    history.push("/app/kyc-verification"); // Replace with your desired route
  };
  const handleLoad = () => {
    history.push("/app/product-details"); // Replace with your desired route
  };
  const handleSearchLoad = () => {
    history.push("/app/search-loads"); // Replace with your desired route
  };
  return (
    <IonPage>
      <Header
        showHamburgerMenu={true}
        showBackButton={false}
        showUserIcon={true}
      />
      <IonContent className="ion-padding">
        <IonGrid className="ion-no-padding">
          <IonRow className="ion-justify-content-between">
            <IonCol size="12">
              <div className="">
                <img
                  src={banner}
                  alt="phone"
                  style={{ width: "100%", height: "auto", objectFit: "cover", maxHeight: "134px" }}
                />
              </div>
            </IonCol>
          </IonRow>
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
          <IonRow className="mt-2x">
            <IonCol size="12">
              <IonCard className="ion-no-margin">
                <IonCardContent className="load-trips-card">
                  <div className="load-cards" onClick={handleLoad}>
                    <div>
                      <img
                        src={load}
                        alt="load"
                        style={{ width: "70px", height: "70px" }}
                      />
                    </div>
                    <div className="kyc-title">LOADS</div>
                  </div>
                  <div className="load-cards" onClick={handleSearchLoad}>
                    <div>
                      <img
                        src={trips}
                        alt="trips"
                        style={{ width: "70px", height: "70px" }}
                      />
                    </div>
                    <div className="kyc-title">TRIPS</div>
                  </div>
                </IonCardContent>
              </IonCard>
            </IonCol>
          </IonRow>
          <IonRow className="mt-2x">
            <IonCol size="12">
              <div className="other-service-section">
                <div className="other-service-section-title">
                  Other Services
                </div>
                <div className="other-service-icon-section">
                  <div className="icon-item">
                    <img
                      src={TollRecharge}
                      alt="trips"
                      style={{ width: "55px", height: "55px" }}
                    />
                    <div className="icon-label">Toll Recharge</div>
                  </div>
                  <div className="icon-item">
                    <img
                      src={Mechanic}
                      alt="trips"
                      style={{ width: "55px", height: "55px" }}
                    />
                    <div className="icon-label">Mechanic</div>
                  </div>
                  <div className="icon-item">
                    <img
                      src={Dhaba}
                      alt="trips"
                      style={{ width: "55px", height: "55px" }}
                    />
                    <div className="icon-label">Dhabas</div>
                  </div>
                  <div className="icon-item">
                    <img
                      src={Insurance}
                      alt="trips"
                      style={{ width: "55px", height: "55px" }}
                    />
                    <div className="icon-label">Insurance</div>
                  </div>
                  <div className="icon-item">
                    <img
                      src={legalAdvice}
                      alt="trips"
                      style={{ width: "55px", height: "55px" }}
                    />
                    <div className="icon-label">Legal Advice</div>
                  </div>
                  <div className="icon-item">
                    <img
                      src={Recharge}
                      alt="trips"
                      style={{ width: "55px", height: "55px" }}
                    />
                    <div className="icon-label">Recharge</div>
                  </div>
                  <div className="icon-item">
                    <img
                      src={Insurance}
                      alt="trips"
                      style={{ width: "55px", height: "55px" }}
                    />
                    <div className="icon-label">Insurance</div>
                  </div>
                  <div className="icon-item">
                    <img
                      src={legalAdvice}
                      alt="trips"
                      style={{ width: "55px", height: "55px" }}
                    />
                    <div className="icon-label">Legal Advice</div>
                  </div>
                  <div className="icon-item">
                    <img
                      src={Recharge}
                      alt="trips"
                      style={{ width: "55px", height: "55px" }}
                    />
                    <div className="icon-label">Recharge</div>
                  </div>
                </div>
              </div>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default NewDashboard;
