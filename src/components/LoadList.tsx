"use client"
import type React from "react"
import {
  IonIcon,
  IonCard,
  IonCardContent,
} from "@ionic/react"
import { chevronForward, search as searchIcon } from "ionicons/icons"
import "../../src/assets/styles/main.css";
import { useHistory } from "react-router";
const LoadListing: React.FC<{ fromLocation: string, toLocation: string }> = ({ fromLocation, toLocation }) => {
  const history = useHistory();

  const handleLoadClick = () => {
    history.push({
      pathname: '/app/load-details',
      state: { fromLocation, toLocation },
    });
  }
  return (
    <IonCard className="load-card" onClick={handleLoadClick}>
      <IonCardContent>
        <div className="load-card-content">
          <div className="load-location">{fromLocation}-{toLocation}</div>
          <IonIcon icon={chevronForward} className="load-arrow" />
        </div>
      </IonCardContent>
    </IonCard>
  )
}

export default LoadListing
