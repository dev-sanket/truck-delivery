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
import '../pages/SignUp.css'

const FooterPanel: React.FC = ()  => {
  return (
    <>
      <IonTabBar slot="bottom" className="custom-tab-bar">
        <IonTabButton tab="home" href="/dashboard">
          <IonIcon icon={home} />
          <IonLabel>Home</IonLabel>
        </IonTabButton>
        <IonTabButton tab="search" href="/search-loads">
          <IonIcon icon={searchIcon} />
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
    </>
  )
}

export default FooterPanel

