import type React from "react"
import { IonTabBar, IonTabButton, IonIcon, IonLabel } from "@ionic/react"
import { home, search, notifications, person } from "ionicons/icons"
import "./TabBar.css"

const TabBar: React.FC = () => {
  return (
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
  )
}

export default TabBar

