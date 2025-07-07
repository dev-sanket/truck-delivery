"use client"
import type React from "react"
import Logo from "../components/Logo"
import { IonButton, IonIcon } from "@ionic/react"
import { chevronBack, menu, person, personCircle, playSkipForward, playSkipForwardOutline, searchOutline } from "ionicons/icons"
import { useHistory } from "react-router"
import "../assets/styles/main.css"
import "./Header.css"

const Header: React.FC<{
  showBackButton?: boolean;
  showSkipIcon?: boolean;
  showUserIcon?: boolean;
  showHamburgerMenu?: boolean;
  handleSkip?: () => void;
  showIcon?:boolean;
}> = ({
  showBackButton = true,
  showSkipIcon = false,
  showUserIcon = false,
  showHamburgerMenu = false,
  showIcon = true,
  handleSkip
}) => {
    const history = useHistory<History>();
    // const handleSkip = () => {
    //   history.push('/app/dashboard'); // Replace with your desired route
    // };
    return (
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'self-start', padding: '16px 12px 0px', backgroundColor: '#ffffff', gap: '10vw' }}>
        <div style={{ flex: 0.3 }}>
          {showBackButton &&

            <IonButton size="small" fill="outline" onClick={() => history.goBack()} className="header-back-button">
              <IonIcon slot="icon-only" ios={chevronBack} md={chevronBack} size="large"></IonIcon>
            </IonButton>}
          {showHamburgerMenu &&

            <IonButton size="small" fill="clear" onClick={() => { console.log("clicked") }}>
              <IonIcon slot="icon-only" ios={menu} md={menu} size="large"></IonIcon>
            </IonButton>}
        </div>
        <div style={{ flex: 0.6, display: 'flex', justifyContent: 'center' }}>
          {showIcon &&
          <Logo />
          }
        </div>
        <div style={{ flex: 0.3, display: 'flex', justifyContent: 'flex-end' }}>
          {/* <IonButton>
          <IonIcon icon={searchOutline} />
        </IonButton> */}
          {showSkipIcon &&
            <IonButton size="default" fill="clear" onClick={handleSkip}>
              Skip
              <IonIcon slot="end" ios={playSkipForwardOutline} md={playSkipForwardOutline} size="large"></IonIcon>
            </IonButton>
          }
          {showUserIcon &&
            <IonButton size="small" fill="clear" style={{ borderRadius: '50%' }} onClick={() => { history.push("/app/profile") }}>
              <IonIcon slot="icon-only" ios={personCircle} md={personCircle} size="large"></IonIcon>
            </IonButton>
          }
        </div>
      </div>
    )
  }

export default Header
