import React from 'react'
import { IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonCol, IonContent, IonGrid, IonHeader, IonIcon, IonInput, IonItem, IonRow, IonText, IonTitle, IonToolbar } from '@ionic/react'
import { IonPage } from '@ionic/react'
import Header from '../../components/Header'
import { searchOutline, addOutline } from 'ionicons/icons'
import { useHistory } from 'react-router-dom';
const LoadPage: React.FC = () => {
    const history = useHistory<History>();
    return (
        <IonPage>
            <Header
                showHamburgerMenu={false}
                showBackButton={true}
                showUserIcon={false}
            />

            <IonContent className="ion-padding" >
                <IonGrid style={{ height: '100%' }}>
                    <IonRow style={{ height: '100%' }} className="ion-justify-content-center ion-align-items-center" >
                        <IonCol size="6">
                            <IonCard onClick={() => history.push('/app/post-loads')}>
                                <IonCardContent style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                                    <IonIcon style={{ fontSize: '32px' }} icon={addOutline} />
                                    <IonText style={{ fontSize: '16px', fontWeight: 'bold' }} className='ion-padding-top'>Create Load</IonText>
                                </IonCardContent>
                            </IonCard>
                        </IonCol>
                        <IonCol size="6">
                            <IonCard onClick={() => history.push('/app/search-loads')}>
                                <IonCardContent style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                                    <IonIcon style={{ fontSize: '32px' }} icon={searchOutline} />
                                    <IonText style={{ fontSize: '16px', fontWeight: 'bold' }} className='ion-padding-top'>Search Load</IonText>
                                </IonCardContent>
                            </IonCard>
                        </IonCol>
                    </IonRow>
                </IonGrid>
            </IonContent>
        </IonPage>
    )
}

export default LoadPage