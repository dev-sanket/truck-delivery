"use client"

import type React from "react"
import { IonButton, IonIcon } from "@ionic/react"
import { chevronBack } from "ionicons/icons"
import { useHistory } from "react-router"

const BackButton: React.FC = () => {
  const history = useHistory()

  return (
    <>
      <IonButton size="small" fill="outline" onClick={() => history.goBack()} className="backButton">
        <IonIcon slot="icon-only" ios={chevronBack} md={chevronBack}></IonIcon>
      </IonButton>
    </>

  )
}

export default BackButton

