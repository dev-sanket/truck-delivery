"use client"

import type React from "react"
import { IonButton, IonIcon } from "@ionic/react"
import { chevronBack } from "ionicons/icons"
import { useHistory } from "react-router"

const BackButton: React.FC = () => {
  const history = useHistory()

  return (
    <IonButton fill="clear" onClick={() => history.goBack()}>
      <IonIcon icon={chevronBack} />
    </IonButton>
  )
}

export default BackButton

