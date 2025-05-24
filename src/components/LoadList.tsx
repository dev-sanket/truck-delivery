"use client"
import type React from "react"
import {
  IonContent,
  IonPage,
  IonInput,
  IonButton,
  IonIcon,
  IonCard,
  IonCardContent,
  IonChip,
  IonLabel,
  IonTabBar,
  IonTabButton,
} from "@ionic/react"
import { chevronForward, home, search as searchIcon, notifications, person } from "ionicons/icons"
import "../../src/assets/styles/main.css";
const LoadListing: React.FC = () => {
  return (
    <IonCard className="load-card" routerLink="/load-details">
      <IonCardContent>
        <div className="load-card-content">
          <div className="load-location">Jamshedpur-Siliguri</div>
          <IonIcon icon={chevronForward} className="load-arrow" />
        </div>
      </IonCardContent>
    </IonCard>
  )
}

export default LoadListing
