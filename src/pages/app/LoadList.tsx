import React, { useEffect, useState } from "react";
import { IonPage, IonContent, IonGrid, IonRow, IonCol, IonCard, IonCardContent, IonButton, IonText, IonLabel, IonSpinner, IonRefresher, IonRefresherContent, RefresherEventDetail } from "@ionic/react";
import Header from "../../components/Header";
import "../../assets/styles/main.css";
import greenDot from "../../assets/images/greendot.png";
import redDot from "../../assets/images/redDot.png";
import { useHistory } from "react-router-dom";
import { postApiCall } from "../../utils/api/api";
import { useAuth } from "../../store/AuthContext";
import { format } from "date-fns";

interface LoadListResponse {
  LoadsID: string;
  UsersID: string;
  FullName: string;
  LoadFrom: string;
  LoadTo: string;
  VehicleType: string;
  ProductWeight: string;
  TotalDistance: string;
  RatePerTon: string;
  ProductType: string;
  PaymentTerms: string;
  MobileNumber: string;
  LoadStatus: string;
  IntentStatus: string;
  Status: string;
  LoadCreated: string;
}

const LoadList: React.FC = () => {
  const history = useHistory();
  const { user } = useAuth();

  const [loadList, setLoadList] = useState<LoadListResponse[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    getLoadList();
  }, []);

  const getLoadList = async () => {
    try {
      setIsLoading(true);
      const response = await postApiCall({
        "UsersID": user?.UsersID
        // "UsersID": 6
      }, 'getAllMyLoadList')
      if (response.status) {
        setLoadList(response.data);
      }

    } catch (error) {
      console.log(error, "ERROR");
    } finally {
      setIsLoading(false);
    }
  }

  const handleRefresh = async (event: CustomEvent<RefresherEventDetail>) => {
    await getLoadList();
    event.detail.complete();
  }

  return (
    <IonPage>
      <Header showBackButton={true} showHamburgerMenu={false} showUserIcon={true} />
      <IonContent className="ion-padding">
        <IonRefresher slot="fixed" pullFactor={0.5} pullMin={100} pullMax={200} onIonRefresh={handleRefresh}>
          <IonRefresherContent></IonRefresherContent>
        </IonRefresher>
        <IonGrid className="ion-no-padding">
          <IonRow>
            <IonCol size="12">
              <div className="title">LoadList</div>
            </IonCol>
          </IonRow>
        </IonGrid>
        {isLoading ? (
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '50vh',
            width: '100%'
          }}>
            <IonSpinner />
          </div>
        ) : loadList.length > 0 ? (
          <IonGrid className="ion-no-padding ion-no-margin mt-2.5x">
            <IonRow className="ion-no-padding ion-no-margin">
              {
                loadList.map((load, index) => (

                  <IonCol size="12" key={index} className="mb-1.5x">
                    <IonCard className="ion-no-padding ion-no-margin">
                      <IonCardContent>
                        <IonRow className="ion-align-items-center ion-no-padding ion-no-margin ion-justify-content-between">
                          <IonCol size="5" style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                            <img src={greenDot} alt="Load From" />
                            <IonLabel className="ion-text-wrap" style={{ fontSize: '17px' }}>{load.LoadFrom}</IonLabel>
                          </IonCol>
                          <IonCol size="1" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <IonLabel>→</IonLabel>
                          </IonCol>
                          <IonCol size="5" style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                            <img src={redDot} alt="Load To" />
                            <IonLabel className="ion-text-wrap" style={{ fontSize: '17px' }}>{load.LoadTo}</IonLabel>
                          </IonCol>
                        </IonRow>
                        <IonRow className="ion-align-items-center mt-1.5x">
                          <IonCol size="4">
                            <IonLabel className="ion-text-wrap" style={{ fontSize: '16px' }}>Load Date</IonLabel><br />
                            <IonText>
                              <span style={{ fontSize: '14px' }}>{format(new Date(load.LoadCreated || ""), "dd MMM yyyy")}</span>
                            </IonText>
                          </IonCol>
                          <IonCol size="4">
                            <IonLabel className="ion-text-wrap" style={{ fontSize: '16px' }}>Per Ton Cost</IonLabel><br />
                            <IonText>
                              <span style={{ fontSize: '14px' }}>{load.RatePerTon}</span>
                            </IonText>
                          </IonCol>
                          <IonCol size="4">
                            <IonLabel className="ion-text-wrap" style={{ fontSize: '16px' }}>Vehicle Type</IonLabel><br />
                            <IonText>
                              <span style={{ fontSize: '14px' }}>{load.VehicleType}</span>
                            </IonText>
                          </IonCol>
                        </IonRow>
                        <IonRow className="ion-align-items-center mt-1.5x">
                          <IonCol size="12">
                            <IonButton className="ion-no-padding ion-no-margin" expand="block" shape="round" color="primary" onClick={() => {
                              history.push(`/app/bids/${load.LoadsID}`);
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
        ) : (
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            height: '50vh',
            width: '100%',
            textAlign: 'center'
          }}>
            <div style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '10px', color: '#666' }}>
              No Loads Found
            </div>
            <div style={{ fontSize: '16px', color: '#999', marginBottom: '20px' }}>
              You haven't created any loads yet.
            </div>
            <IonButton
              color="primary"
              shape="round"
              onClick={() => history.push('/app/create-new-load')}
            >
              Create New Load
            </IonButton>
          </div>
        )}
      </IonContent>
    </IonPage >
  );
};

export default LoadList;