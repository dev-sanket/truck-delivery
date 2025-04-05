"use client"

import type React from "react"
import { useState } from "react"
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
import StatusBar from "../components/StatusBar"
import "./SearchLoads.css"

const SearchLoads: React.FC = () => {
  const [fromLocation, setFromLocation] = useState("")
  const [toLocation, setToLocation] = useState("")

  return (
    <IonPage>
      <StatusBar />
      <div className="header">
        <div className="title-container">
          <h1 className="page-title">Search Loads</h1>
        </div>
      </div>
      <IonContent className="ion-padding">
        <div className="search-container">
          {/* From Input */}
          <div className="input-container">
            <div className="location-dot from-dot"></div>
            <IonInput
              placeholder="Enter loading here"
              value={fromLocation}
              onIonChange={(e) => setFromLocation(e.detail.value!)}
              className="location-input"
            />
          </div>

          {/* To Input */}
          <div className="input-container">
            <div className="location-dot to-dot"></div>
            <IonInput
              placeholder="Enter unloading here"
              value={toLocation}
              onIonChange={(e) => setToLocation(e.detail.value!)}
              className="location-input"
            />
          </div>

          <IonButton expand="block" className="find-loads-button">
            Find Loads
          </IonButton>

          {/* Filter Chips */}
          <div className="filter-chips">
            <IonChip className="filter-chip active">
              <IonLabel>All</IonLabel>
            </IonChip>
            <IonChip className="filter-chip">
              <IonLabel>Open</IonLabel>
            </IonChip>
            <IonChip className="filter-chip">
              <IonLabel>DCM</IonLabel>
            </IonChip>
            <IonChip className="filter-chip">
              <IonLabel>Mini/Pickup</IonLabel>
            </IonChip>
            <IonChip className="filter-chip">
              <IonLabel>Trailer</IonLabel>
            </IonChip>
            <IonChip className="filter-chip">
              <IonLabel>Truck</IonLabel>
            </IonChip>
          </div>

          {/* Load Results */}
          <div className="load-results">
            <div className="section-title">Find Loads Form</div>

            <IonCard className="load-card" routerLink="/load-details">
              <IonCardContent>
                <div className="load-card-content">
                  <div className="load-location">Jamshedpur-Jilliguri</div>
                  <IonIcon icon={chevronForward} className="load-arrow" />
                </div>
              </IonCardContent>
            </IonCard>

            <IonCard className="load-card" routerLink="/load-details">
              <IonCardContent>
                <div className="load-card-content">
                  <div className="load-location">Jamshedpur-Jilliguri</div>
                  <IonIcon icon={chevronForward} className="load-arrow" />
                </div>
              </IonCardContent>
            </IonCard>

            <IonCard className="load-card" routerLink="/load-details">
              <IonCardContent>
                <div className="load-card-content">
                  <div className="load-location">Jamshedpur-Jilliguri</div>
                  <IonIcon icon={chevronForward} className="load-arrow" />
                </div>
              </IonCardContent>
            </IonCard>
          </div>
        </div>
      </IonContent>

      {/* Tab Bar */}
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
    </IonPage>
  )
}

export default SearchLoads

