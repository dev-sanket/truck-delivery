import type React from "react"
import {
  IonContent,
  IonPage,
  IonCard,
  IonCardContent,
  IonIcon,
  IonButton,
  IonTabBar,
  IonTabButton,
  IonLabel,
} from "@ionic/react"
import { searchOutline, addOutline, chevronForward, home, search, notifications, person } from "ionicons/icons"
import Logo from "../components/Logo"
import StatusBar from "../components/StatusBar"
import "./Dashboard.css"
import Header from "../components/Header"
import { useHistory } from "react-router"
import book from "../../src/assets/images/book.png"
const Dashboard: React.FC = () => {
  const history = useHistory<History>();
  const handleKyc = () => {
    history.push('/kyc-verification'); // Replace with your desired route
  };
  return (
    <IonPage>
      <StatusBar/>
      <Header/>
      <IonContent style={{ paddingTop: '10px' }} className="ion-padding" >
        <div className="dashboard-container">
          {/* Balance Cards */}
          <div className="balance-cards">
              {/* <IonCardContent>
                <div className="card-amount">500</div>
                <div className="card-label">Current Balance</div>
              </IonCardContent> */}
              <img src={book} alt="phone" style={{ width: 180, height: 80 }} />
              {/* <IonCardContent>
                <div className="card-amount">500</div>
                <div className="card-label">Current Balance</div>
              </IonCardContent> */}
              <img src={book} alt="phone" style={{ width: 180, height: 80 }} />
          </div>

          {/* KYC Verification Card */}
              <div className="kyc-content kyc-card" onClick={handleKyc}>
                <div>
                  <div className="kyc-title">KYC verification Pending</div>
                  <div className="kyc-subtitle">Verify KYC to enjoy verified loads</div>
                </div>
                <IonIcon icon={chevronForward} className="kyc-arrow" />
              </div>

          {/* Find Next Load Section */}
          <div className="find-load-section">
            <div className="kyc-title">FIND YOUR NEXT LOAD</div>
            <div className="grey-subtitle text-align-center">{"Don't"} keep your truck idle, get loads for your last drop point!</div>
            <IonButton expand="block" className="search-button" routerLink="/search-loads">
              Search
            </IonButton>
          </div>

          {/* Add Vehicle And Driver Section */}
          <div className="add-section">
            <div className="add-section-header">
            <div className="add-vehicle-owner">Add Vehicle And Driver</div>
            <div className="grey-subtitle text-align-none">Add your vehicle and driver details to get loads</div>
            </div>

            <div className="add-buttons">
              <IonButton className="add-button">Add Vehicle</IonButton>
              <IonButton className="add-button" routerLink="/product-details">Add Load</IonButton>
            </div>
          </div>
        </div>
      </IonContent>

      {/* Tab Bar */}
      <IonTabBar slot="bottom" className="custom-tab-bar">
        <IonTabButton tab="home" href="/dashboard">
          <IonIcon icon={home} />
          <IonLabel>Home</IonLabel>
        </IonTabButton>
        <IonTabButton tab="search" href="/search-loads">
          <IonIcon icon={search} />
          <IonLabel>Search</IonLabel>
        </IonTabButton>
        <IonTabButton tab="notifications" href="/notifications">
          <IonIcon icon={notifications} />
          <IonLabel>Alerts</IonLabel>
        </IonTabButton>
        <IonTabButton tab="profile" href="/profile">
          <IonIcon icon={person} />
          <IonLabel>Profile</IonLabel>
        </IonTabButton>
      </IonTabBar>
    </IonPage>
  )
}

export default Dashboard

