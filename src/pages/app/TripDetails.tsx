import type React from "react"
import { IonCol, IonContent, IonIcon, IonPage} from "@ionic/react"
import "./LoadDetails.css"
import Header from "../../components/Header"
import TripCardDetails from "../../components/TripCardDetails";
import "../../assets/styles/main.css";
import { calendarOutline, listOutline } from "ionicons/icons";
const TripDetails: React.FC = () => {

  return (
    <IonPage>
      <Header showBackButton={true} showHamburgerMenu={false} showUserIcon={false} showIcon={false} />
      <IonContent className="ion-padding" style={{
        '--padding-start': '0px',
        '--padding-end': '0px'
      } as React.CSSProperties}>
        <div className="load-details-container">
                       <IonCol size="12">
                         <div className="trips-container">
                           <div className="title">In Transit</div>
                           <div style={{display:"flex",flexDirection:"row",gap:"10px"}}>
                           <IonIcon
                             slot="icon-only"
                             icon={calendarOutline}
                             size="large"
                             onClick={() => {
                               console.log("clicked modal");
                             }}
                           ></IonIcon>
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
                       </IonCol> 
          <TripCardDetails />
          <TripCardDetails />
        </div>
      </IonContent>
    </IonPage>
  )
}

export default TripDetails

