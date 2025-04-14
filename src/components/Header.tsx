"use client"
import type React from "react"
import Logo from "../components/Logo"
import { IonButton, IonIcon } from "@ionic/react"
import { chevronBack, searchOutline } from "ionicons/icons"
import { useHistory } from "react-router"
import SkipNextIcon from '@mui/icons-material/SkipNext';
import "../assets/styles/main.css"
import "./Header.css"

const Header: React.FC<{ showBackButton?: boolean ,showSkipIcon?:boolean}> = ({ showBackButton = true,showSkipIcon=false }) => {
  const history = useHistory<History>();
  
  const handleSkip = () => {
    history.push('/dashboard'); // Replace with your desired route
  };
  return (
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '30px 20px 0px', backgroundColor: '#ffffff' ,gap:'10vw'}}>
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
        {showSkipIcon &&
          <div style={{ display: 'flex'}} onClick={handleSkip}>skip
            <SkipNextIcon/>
          </div>}
        
      </div>
    </div>
  )
}

export default Header
