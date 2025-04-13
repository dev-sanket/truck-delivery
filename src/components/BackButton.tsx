"use client"

import type React from "react"
import { IonButton, IonIcon } from "@ionic/react"
import { chevronBack } from "ionicons/icons"
import { useHistory } from "react-router"

const BackButton: React.FC = () => {
  const history = useHistory()

  return (
    <>
      <button onClick={() => history.goBack()} className="backButton">
      <IonIcon icon={chevronBack} />
      </button>
    </>

  )
}

export default BackButton

