import React from "react";
import { IonPage, IonContent, IonGrid, IonRow, IonCol, IonCard, IonCardContent, IonButton, IonText, IonLabel } from "@ionic/react";
import Header from "../../components/Header";
import "../../assets/styles/main.css";
import greenDot from "../../assets/images/greenDot.png";
import redDot from "../../assets/images/redDot.png";
import { useHistory } from "react-router-dom";
const LoadList: React.FC = () => {
  const history = useHistory();

  return (
    <IonPage>
      <Header showBackButton={true} showHamburgerMenu={false} showUserIcon={true} />
      <IonContent className="ion-padding">
        <IonGrid className="ion-no-padding">
          <IonRow>
            <IonCol size="12">
              <div className="title">LoadList</div>
            </IonCol>
          </IonRow>
        </IonGrid>
        <IonGrid className="ion-no-padding ion-no-margin mt-2.5x">
          <IonRow className="ion-no-padding ion-no-margin">
            {
              Array.from({ length: 10 }).map((_, index) => (

                <IonCol size="12" key={index} className="mb-1.5x">
                  <IonCard className="ion-no-padding ion-no-margin">
                    <IonCardContent>
                      <IonRow className="ion-align-items-center ion-no-padding ion-no-margin ion-justify-content-between">
                        <IonCol size="5" style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                          <img src={greenDot} alt="Load From" />
                          <IonLabel className="ion-text-wrap" style={{ fontSize: '17px' }}>DurgaPur, Burdwan</IonLabel>
                        </IonCol>
                        <IonCol size="1" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                          <IonLabel>→</IonLabel>
                        </IonCol>
                        <IonCol size="5" style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                          <img src={redDot} alt="Load To" />
                          <IonLabel className="ion-text-wrap" style={{ fontSize: '17px' }}>Siliguri, West Bengal</IonLabel>
                        </IonCol>
                      </IonRow>
                      <IonRow className="ion-align-items-center mt-1.5x">
                        <IonCol size="4">
                          <IonLabel className="ion-text-wrap">Load Date</IonLabel><br />
                          <IonText>
                            <span>10/07/2025</span>
                          </IonText>
                        </IonCol>
                        <IonCol size="4">
                          <IonLabel className="ion-text-wrap">Per Ton Cost</IonLabel><br />
                          <IonText>
                            <span>$100</span>
                          </IonText>
                        </IonCol>
                        <IonCol size="4">
                          <IonLabel className="ion-text-wrap">Vehicle Type</IonLabel><br />
                          <IonText>
                            <span>Truck</span>
                          </IonText>
                        </IonCol>
                      </IonRow>
                      <IonRow className="ion-align-items-center mt-1.5x">
                        <IonCol size="12">
                          <IonButton className="ion-no-padding ion-no-margin" expand="block" shape="round" color="primary" onClick={() => {
                            history.push(`/app/bids/${index}`);
                          }}>View</IonButton>
                        </IonCol>
                      </IonRow>
                    </IonCardContent>
                  </IonCard>
                </IonCol>
              ))
            }
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage >
  );
};

export default LoadList;