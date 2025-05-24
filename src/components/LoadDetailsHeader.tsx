import type React from "react"
import { IonButton, IonIcon } from "@ionic/react"
import { useHistory } from "react-router";
import { chevronBack } from "ionicons/icons";
const LoadDetailsHeader: React.FC = () => {
  const history = useHistory<History>();
  const handleBack = () => {
    history.push('/app/load-details'); // Replace with your desired route
  };
  return (
    <div className="load-details-header">
      <div className="backIcon" >
          <IonButton size="small" fill="outline" onClick={handleBack} className="header-back-button">
            <IonIcon slot="icon-only" ios={chevronBack} md={chevronBack} size="large"></IonIcon>
          </IonButton>
      </div>

    </div>
  )
}

export default LoadDetailsHeader

