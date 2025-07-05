import type React from "react";
import {
  IonContent,
  IonPage,
  IonIcon,
  IonGrid,
  IonRow,
  IonCol,
} from "@ionic/react";
import { flowerOutline } from "ionicons/icons";
import { alertCircleOutline } from "ionicons/icons";
import "./Profile.css";
import Header from "../../components/Header";
import { useEffect, useState } from "react"; //
import "../../assets/styles/main.css";
import openTruck from "../../assets/images/openTruck.png";
import miniPickup from "../../assets/images/miniTruckBlack.png";
const Notification: React.FC = () => {
  const [itemList, setItemList] = useState([]);
  useEffect(() => {
    let itemLists: any = [
      {
        icon: alertCircleOutline,
        label: "Pollution Certificate Expiring in 3 Days",
        subLabel: "",
        image: ""
      },
      {
        icon: "",
        label:"Ravi Kumar has started from Siliguri to Kolkata at 6:00PM, today.",
        subLabel: "Vehicle Number - WB01AB1234",
        image: miniPickup
      },
      {
        icon: "",
        label: "Brajesh Singh has completed the trip to Durgapur.",
        subLabel: "Vehicle Number - WB01AB4321",
        image: miniPickup
      },
      {
        icon: "",
        label: "Montu Sarkar has completed the trip to Jalpaiguri.",
        subLabel: "Vehicle Number - WB01AB5321",
        image: miniPickup
      },
      {
        icon: "",
        label: "Brajesh Singh has completed the trip to Durgapur.",
        subLabel: "Vehicle Number - WB01AB4321",
        image: miniPickup
      },
      {
        icon: flowerOutline,
        label: "Use code CARE10 at your nearest service center.",
        subLabel: "",
        image: ""
      },
      {
        icon: alertCircleOutline,
        label:"Your truck WB01AB1234 is due for an oil change. Last serviced: 5,000 km ago.",
        subLabel: "",
        image: ""
      },
    ];
    setItemList(itemLists);
  }, []);
  return (
    <IonPage>
      <Header
        showHamburgerMenu={false}
        showBackButton={true}
        showUserIcon={true}
      />
      <IonContent className="ion-no-padding">
        <IonGrid className="ion-no-padding">
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
                onClick={() => {}}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    backgroundColor: "#f5f5f5",
                    borderRadius: "10px",
                    padding: "10px",
                    gap:"5vw"
                  }}
                >
                  {el.icon && <IonIcon
                    src={el.icon}
                    style={{
                      width: "30px",
                      height: "30px",
                      marginRight: "16px",
                      color: "#0077b6",
                    }}
                  />}
                  {el.image && <img
                    src={el.image}
                    alt="phone"
                    style={{ width: 31, height: 31 }}
                  />}
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
                  {/* <IonIcon
                    icon={chevronForwardOutline}
                    style={{ fontSize: "24px", color: "#999" }}
                  /> */}
                </div>
              </IonCol>
            ))}
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Notification;
