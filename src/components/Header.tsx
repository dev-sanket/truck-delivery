"use client"
import type React from "react"
import Logo from "../components/Logo"
import BackButton from "../components/BackButton"
import { IonButton, IonIcon } from "@ionic/react"
import { chevronBack } from "ionicons/icons"
import { useHistory } from "react-router"

import "../assets/styles/main.css"

const Header: React.FC<{ showBackButton?: boolean }> = ({ showBackButton = true }) => {
  const history = useHistory()

  return (
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '30px 20px 0px', backgroundColor: '#ffffff' }}>
      <div style={{ flex: 0.3 }}>
        {showBackButton &&

          <IonButton size="small" fill="outline" onClick={() => history.goBack()} className="header-back-button">
            <IonIcon slot="icon-only" ios={chevronBack} md={chevronBack} size="large"></IonIcon>
          </IonButton>}
      </div>
      <div style={{ flex: 0.6 }}>
        <Logo />
      </div>
      <div style={{ flex: 0.3 }}>
        {/* <IonButton>
          <IonIcon icon={searchOutline} />
        </IonButton> */}
      </div>
    </div>
  )
}

export default Header
