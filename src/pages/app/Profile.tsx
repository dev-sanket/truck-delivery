import type React from "react";
import {
  IonContent,
  IonPage,
  IonCard,
  IonCardContent,
  IonIcon,
  IonGrid,
  IonRow,
  IonCol,
  IonLabel,
  IonButtons,
  useIonToast,
  IonRefresher,
  IonRefresherContent,
  RefresherEventDetail,
} from "@ionic/react";
import { chevronForward, chevronForwardOutline } from "ionicons/icons";
import { logOutOutline } from "ionicons/icons";
import { documentTextOutline } from "ionicons/icons";
import { helpCircleOutline } from "ionicons/icons";
import { accessibilityOutline } from "ionicons/icons";
import "./Profile.css";
import Header from "../../components/Header";
import { useHistory } from "react-router";
import { useEffect, useState } from "react"; //
import "../../assets/styles/main.css";
import profile from "../../assets/images/profile.png";
import { useAuth } from "../../store/AuthContext";
const Profile: React.FC = () => {
  const [itemList, setItemList] = useState([]);
  const history = useHistory();
   const { logout } = useAuth();
     const { user } = useAuth();
     console.log("USER",user)
  useEffect(() => {
    let itemLists: any = [
      {
        icon: accessibilityOutline,
        label: "Verification",
        subLabel: "Verify KYC i.e Aadhar Details,PanCard Details and RCDocument",
      },
      {
        icon: documentTextOutline,
        label: "Terms and Conditions",
        subLabel: "Read legal conditions    ",
      },
      {
        icon: helpCircleOutline,
        label: "Help",
        subLabel: "A help guide for you,FAQ's   ",
      },
      { icon: logOutOutline, label: "Log Out", subLabel: "" },
    ];
    setItemList(itemLists);
  }, []);
  return (
    <IonPage>
      <Header
        showHamburgerMenu={false}
        showBackButton={true}
        showUserIcon={false}
      />
      <IonContent className="ion-no-padding">
        <IonGrid className="ion-no-padding">
          <IonRow className="ion-justify-content-between">
            <IonCol size="12">
              <div
                style={{
                  backgroundColor: "#E1F5FE",
                  display: "flex",
                  flexDirection: "row",
                  gap: "10vw",
                  alignItems: "center",
                  padding: "10px",
                  marginBottom: "20px",
                }}
              >
                <img
                  src={user?.ProfileLink && user?.ProfileLink.trim() !== "" ? user?.ProfileLink : profile}
                  alt="phone"
                  onError={(e) => { e.currentTarget.src = profile }}
                  style={{
                    height: "auto",
                    objectFit: "cover",
                    maxHeight: "80px",
                  }}
                />
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "10px",
                  }}
                >
                  <div className="profile-name-label">{user?.FullName}</div>
                  <div className="phone-name-label">{user?.MobileNumber}</div>
                </div>
              </div>
            </IonCol>
          </IonRow>
          <IonRow
            className="ion-justify-content-between"
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "10px",
              margin: "30px 10px",
            }}
          >
            {itemList.map((el: any, index: any) => (
              <IonCol
                size="12"
                key={index}
                style={{
                  marginBottom: "16px", // some spacing between cards
                }}
                onClick={() => {
                if (el.label === "Log Out") {
        console.log("HERE",el)
        logout();                
        history.push("/auth/login"); 
                }
                if (el.label === "Verification") {
                  history.push("/app/kyc-verification"); 
                }
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    
                    borderRadius: "10px",
                    padding: "10px",
                  }}
                >
                  <IonIcon
                    src={el.icon}
                    style={{
                      width: "32px",
                      height: "32px",
                      marginRight: "16px",
                      color: "#0077b6",
                    }}
                  />
                  <div style={{ flex: 1 }}>
                    <div
                      className="section-label"
                      style={{ fontWeight: "bold" }}
                    >
                      {el.label}
                    </div>
                    <div
                      className="section-sub-label"
                      style={{ color: "#666", fontSize: "14px" }}
                    >
                      {el.subLabel}
                    </div>
                  </div>
                  <IonIcon
                    icon={chevronForwardOutline}
                    style={{ fontSize: "24px", color: "#999" }}
                  />
                </div>
              </IonCol>
            ))}
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Profile;
