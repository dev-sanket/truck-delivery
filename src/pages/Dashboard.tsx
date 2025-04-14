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
  IonGrid,
  IonRow,
  IonCol,
} from "@ionic/react"
import { searchOutline, addOutline, chevronForward, home, search, notifications, person, navigate } from "ionicons/icons"
import Logo from "../components/Logo"
import "./Dashboard.css"
import Header from "../components/Header"
import { useHistory } from "react-router"


const Dashboard: React.FC = () => {
  const history = useHistory<History>();
  const handleKyc = () => {
    history.push('/kyc-verification'); // Replace with your desired route
  };
  return (
    <IonPage>
      <Header showHamburgerMenu={true} showBackButton={false} showUserIcon={true} />
      <IonContent className="ion-padding" >
        <IonGrid className="ion-no-padding">
          <IonRow className="ion-justify-content-between">
            <IonCol size="5.5">
              <IonCardContent style={{
                background: "linear-gradient(90deg, rgba(108, 128, 154, 1) 0%, rgba(0, 0, 0, 1))",
                borderRadius: '10px'
              }}>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'space-around' }}>
                  <div className="card-amount" style={{ color: '#ffffff' }}>500</div>
                  <div className="card-label" style={{ color: '#ffffff' }}>Current Balance</div>
                </div>

                <IonIcon icon={navigate} size="large" style={{ color: '#ffffff', position: 'absolute', right: 10, top: 20 }} />

              </IonCardContent>
            </IonCol>
            <IonCol size="5.5">
              <IonCardContent style={{
                background: "linear-gradient(90deg, rgba(108, 128, 154, 1) 0%, rgba(0, 0, 0, 1)) 20%",
                borderRadius: '10px'
              }}>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'space-around' }}>
                  <div className="card-amount" style={{ color: '#ffffff' }}>500</div>
                  <div className="card-label" style={{ color: '#ffffff' }}>Current Balance</div>
                </div>

                <IonIcon icon={navigate} size="large" style={{ color: '#ffffff', position: 'absolute', right: 10, top: 20 }} />

              </IonCardContent>
            </IonCol>
          </IonRow>
          <IonRow className="mt-2x">
            <IonCol size="12">
              <div className="kyc-content kyc-card" style={{ width: '100%' }} onClick={handleKyc}>
                <div>
                  <div className="kyc-title ion-margin-bottom">KYC verification Pending</div>
                  <div className="kyc-subtitle">Verify KYC to enjoy verified loads</div>
                </div>
                <IonIcon icon={chevronForward} className="kyc-arrow" />
              </div>
            </IonCol>
          </IonRow>
          <IonRow className="mt-2x">
            <IonCol size="12">
              <IonCard className="ion-no-margin">
                <IonCardContent className="">
                  <div className="kyc-title ion-text-center ion-margin-bottom">FIND YOUR NEXT LOAD</div>
                  <div className="grey-subtitle ion-text-center mb-2x">{"Don't"} keep your truck idle, get loads for your last drop point!</div>
                  <IonButton expand="block" className="search-button" style={{ width: '40%', margin: '0 auto' }} routerLink="/search-loads">
                    Search
                  </IonButton>

                </IonCardContent>

              </IonCard>
            </IonCol>

          </IonRow>
          <IonRow className="mt-2x">
            <IonCol size="12">
              <IonCard className="ion-no-margin">
                <IonCardContent className="ion-margin-bottom">
                  <div className="add-section-header">
                    <div className="kyc-title">Add Vehicle And Driver</div>
                    <div className="grey-subtitle text-align-none mb-1.5x">Add your vehicle and driver details to get loads</div>
                  </div>
                  <div className="add-buttons">
                    <IonButton className="add-button">Add Vehicle</IonButton>
                    <IonButton className="add-button">Add Driver</IonButton>
                  </div>
                </IonCardContent>
              </IonCard>
            </IonCol>
          </IonRow>
        </IonGrid>
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

