import type React from "react";
import {
  IonContent,
  IonPage,
  IonButton,
  IonIcon,
  IonLabel,
  useIonToast,
  IonRefresher,
  IonRefresherContent,
  RefresherEventDetail,
  IonModal,
  IonButtons,
  IonTitle,
  IonSpinner,
} from "@ionic/react";
import {
  busOutline,
  chevronBack,
  documentLockOutline,
  documentOutline,
  filter
} from "ionicons/icons";

import LoadCarrierDetails from "../../components/LoadcarrierDetails";
import "./NewLoadDetails.css";
import "../../assets/styles/main.css";
import {
  IonHeader,
  IonSegment,
  IonSegmentButton,
  IonToolbar,
} from "@ionic/react";
import { useEffect, useRef, useState } from "react";
import { useHistory, useLocation } from "react-router";
import { getApiCall, postApiCall } from "../../utils/api/api";
import { useAuth } from "../../store/AuthContext";

import lcvTruck from "../../assets/images/LcvTruck.png";
import openTruck from "../../assets/images/openTruck.png";
import Trailer from "../../assets/images/Trailer.png";
import miniPickup from "../../assets/images/miniPickUpTruck.png";
import { LoadData, LoadStatus } from "../../utils/app.types";


const NewLoadDetails: React.FC = () => {
  const filtersModal = useRef<HTMLIonModalElement>(null);
  const { user } = useAuth();
  const history = useHistory<History>();
  const location = useLocation<{ fromLocation: string, toLocation: string }>();
  const { fromLocation, toLocation } = location.state || { fromLocation: "", toLocation: "" };
  const [loadData, setLoadData] = useState<LoadData[]>([]);
  const [newLoadData, setNewLoadData] = useState<LoadData[]>([]);
  const [truckType, setTruckType] = useState<string>("open");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [vehicleTypeList,setVehicleTypeList]=useState<any>([])
  if (!user) {
    history.push("/auth");
  }

  const [present] = useIonToast();
  const presentToast = (position: "top" | "middle" | "bottom", message: string, color: 'success' | 'danger' | 'warning' = "success") => {
    present({
      message: message,
      duration: 1500,
      position: position,
      color: color,
    });
  };
  const [selectedSegment, setSelectedSegment] = useState("open");
  const handleSegmentChange = (e: CustomEvent) => {
    setSelectedSegment(e.detail.value);
    getLoadDetails(e.detail.value as LoadStatus);
  };
  const vehicleTypeData = async()=>{
      try {
        const vehicleTypes = await getApiCall('','getVehicleType');
        console.log(vehicleTypes,"vehicleTypes")
        if(vehicleTypes?.status)
        setVehicleTypeList(vehicleTypes?.data);
      } catch (error) {
        
      }
  }
  
  useEffect(() => {
    vehicleTypeData();
    getLoadDetails(LoadStatus.OPEN);
  }, []);

  useEffect(() => {
  if (vehicleTypeList.length > 0 && loadData.length > 0) {
    let newLoadData :any= loadData;
    newLoadData = newLoadData.map((el:any)=>{
        let vehicleData = vehicleTypeList.find((elem:any)=>{
          return elem.VehicleTypeID == el.VehicleTypeID
        })
        return el ={...el,
          VehicleType:vehicleData?.VehicleType , 
          VehicleTypeImageURL:vehicleData?.VehicleTypeImageURL
    }
    })

        // Only update if changed
    if (JSON.stringify(newLoadData) !== JSON.stringify(loadData)) {
      setNewLoadData(newLoadData);
    }
    console.log(newLoadData,"newLoadData")
  }
  }, [vehicleTypeList,loadData]);

  const getLoadDetails = async (status: LoadStatus) => {
    try {
      setIsLoading(true);
      const response = await postApiCall({
        "UsersID": user?.UsersID,
        "LoadFrom": fromLocation,
        "LoadTo": toLocation,
        "LoadStatus": status || LoadStatus.OPEN
      }, "SearchLoad");
      if (response?.status) {
        setLoadData(response.data);
      } else {
        if (response?.errors?.errorMessage === "No result found.") {
          setLoadData([]);
        }
      }
    } catch (error) {
      presentToast('top', "Something went wrong", 'danger');
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleRefresh = async (event: CustomEvent<RefresherEventDetail>) => {
    await getLoadDetails(selectedSegment as LoadStatus);
    event.detail.complete();
  }

  return (
    <IonPage>

      <IonHeader>
        <IonToolbar>
          <IonSegment value={selectedSegment} onIonChange={handleSegmentChange}>
            {[LoadStatus.OPEN, LoadStatus.PENDING, LoadStatus.CONFIRMED, LoadStatus.HISTORY].map((segment) => (
              <IonSegmentButton
                key={segment}
                value={segment}
                mode="md"
                className={
                  selectedSegment === segment
                    ? "active-segment"
                    : "inactive-segment"
                }
                style={
                  {
                    "--padding-start": "0px",
                    "--padding-end": "0px",
                    minWidth: "0px",
                  } as React.CSSProperties
                }
              >
                <div className="segment-label">
                  {segment === LoadStatus.OPEN && `Open(${loadData.filter((item: LoadData) => item.LoadStatus === LoadStatus.OPEN).length})`}
                  {segment === LoadStatus.PENDING && `Pending(${loadData.filter((item: LoadData) => item.LoadStatus === LoadStatus.PENDING).length})`}
                  {segment === LoadStatus.CONFIRMED && `Confirmed(${loadData.filter((item: LoadData) => item.LoadStatus === LoadStatus.CONFIRMED).length})`}
                  {segment === LoadStatus.HISTORY && `History(${loadData.filter((item: LoadData) => item.LoadStatus === LoadStatus.HISTORY).length})`}
                </div>
              </IonSegmentButton>
            ))}
          </IonSegment>
        </IonToolbar>
      </IonHeader>

      <IonContent
        className="ion-padding"
        style={
          {
            "--padding-start": "0px",
            "--padding-end": "0px",
          } as React.CSSProperties
        }
      >
        <IonRefresher slot="fixed" pullFactor={0.5} pullMin={100} pullMax={200} onIonRefresh={handleRefresh}>
          <IonRefresherContent></IonRefresherContent>
        </IonRefresher>
        <div className="load-details-container">
          <div className="button-container">
            <IonButton size="small" fill="outline" onClick={() => history.goBack()} className="header-back-button">
              <IonIcon slot="icon-only" ios={chevronBack} md={chevronBack} size="large"></IonIcon>
            </IonButton>
            <IonButton className="btn1">All Loads</IonButton>
            <IonButton className="btn2">My Bids</IonButton>
            <IonButton className="btn2">No Bids</IonButton>
            <IonButton size="small" fill="outline" id="filters-modal" className="header-back-button">
              <IonIcon slot="icon-only" ios={filter} md={filter} size="large"></IonIcon>
            </IonButton>
          </div>
          {isLoading ? (
            <div style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              height: '50vh',
              width: '100%'
            }}>
              <IonSpinner />
            </div>
          ) : newLoadData.length > 0 ? (
            newLoadData.map((item: LoadData) => (
              <LoadCarrierDetails showLabel={true} data={item} key={item.LoadsID} />
            ))
          ) : (
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              padding: '60px 20px',
              textAlign: 'center'
            }}>
              <div style={{
                width: '80px',
                height: '80px',
                borderRadius: '50%',
                backgroundColor: '#f0f0f0',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '20px'
              }}>
                <IonIcon icon={busOutline} style={{ fontSize: '32px', color: '#666' }} />
              </div>
              <div style={{ fontSize: '20px', fontWeight: '600', marginBottom: '8px', color: '#333' }}>
                No Loads Found
              </div>
              <div style={{ fontSize: '14px', color: '#666', marginBottom: '24px', lineHeight: '1.4' }}>
                {selectedSegment === LoadStatus.OPEN && "No open loads available for your search criteria."}
                {selectedSegment === LoadStatus.PENDING && "No pending loads found."}
                {selectedSegment === LoadStatus.CONFIRMED && "No confirmed loads available."}
                {selectedSegment === LoadStatus.HISTORY && "No load history found."}
              </div>
              <IonButton
                color="primary"
                shape="round"
                onClick={() => history.goBack()}
                style={{
                  '--background': '#007bff',
                  '--color': '#ffffff',
                  fontSize: '14px',
                  fontWeight: '500'
                }}
              >
                Try Different Search
              </IonButton>
            </div>
          )}
          <IonModal ref={filtersModal} mode="ios" trigger="filters-modal" initialBreakpoint={0.25} breakpoints={[0, 0.25, 0.5, 0.75]}>
            <IonHeader>
              <IonToolbar>
                <IonTitle>Modal</IonTitle>
                <IonButtons slot="end">
                  <IonButton onClick={() => filtersModal.current?.dismiss()}>Close</IonButton>
                </IonButtons>
              </IonToolbar>
            </IonHeader>

            {/* <IonContent className="ion-padding">
              <IonLabel>Truck Type</IonLabel>
              <div className="vehicle-chip-container">

                <div className={`vehicle-chip ${truckType === "open" ? "active" : ""}`} onClick={() => setTruckType("open")}>
                  <img src={openTruck} alt="phone" style={{ width: 30, height: 30 }} />
                  <div className="vehicle-chip-header">Open</div>
                </div>
                <div className={`vehicle-chip ${truckType === "dc" ? "active" : ""}`} onClick={() => setTruckType("dc")}>
                  <img src={lcvTruck} alt="phone" style={{ width: 30, height: 30 }} />
                  <div className="vehicle-chip-header">DCM</div>
                  <div className="description">7.5 to 46 Ton</div>
                </div>
                <div className={`vehicle-chip ${truckType === "mini" ? "active" : ""}`} onClick={() => setTruckType("mini")}>
                  <img src={Trailer} alt="phone" style={{ width: 30, height: 30 }} />
                  <div className="vehicle-chip-header">Mini/Pickup</div>
                  <div className="description">2.5 to 7 Ton</div>
                </div>
                <div className={`vehicle-chip ${truckType === "trailer" ? "active" : ""}`} onClick={() => setTruckType("trailer")}>
                  <img src={miniPickup} alt="phone" style={{ width: 30, height: 30 }} />
                  <div className="vehicle-chip-header">Trailer</div>
                  <div className="description">7.5 to 46 Ton</div>
                </div>

              </div>

              <IonButton expand="block" color="primary" className="mt-2.5x" onClick={() => filtersModal.current?.dismiss()}>Apply</IonButton>

            </IonContent> */}

            <IonContent className="ion-padding">
              <IonLabel>Truck Type</IonLabel>
              <div className="vehicle-chip-container">
                {vehicleTypeList.map((vehicle: any) => (
                <div
                key={vehicle.VehicleTypeID}
                className={`vehicle-chip ${
                  truckType === vehicle.VehicleTypeID ? "active" : ""
                }`}
                onClick={() => setTruckType(vehicle.VehicleTypeID)}
                >
                  <img
                    src={vehicle.VehicleTypeImageURL}
                    alt={vehicle.VehicleType}
                    style={{ width: 30, height: 30 }}
                  />
                  <div className="vehicle-chip-header">
                    {vehicle.VehicleType.split(":")[0]}
                  </div>
                  {vehicle.VehicleType.includes(":") && (
                    <div className="description">
                      {vehicle.VehicleType.split(":")[1]}
                    </div>
                  )}
                </div>
                ))}
                </div>

              <IonButton
                  expand="block"
                  color="primary"
                  className="mt-2.5x"
                  onClick={() => filtersModal.current?.dismiss()}
                >
                  Apply
              </IonButton>
            </IonContent>


          </IonModal>
        </div>
      </IonContent>
      {/* {selectedSegment === "open" && (
      )}

      {selectedSegment === "confirmed" && (
        <IonContent
          className="ion-padding"
          style={
            {
              "--padding-start": "0px",
              "--padding-end": "0px",
            } as React.CSSProperties
          }
        >
          <div className="load-details-container">
            <div className="button-container">
              <IonButton size="small" fill="outline" onClick={() => history.goBack()} className="header-back-button">
                <IonIcon slot="icon-only" ios={chevronBack} md={chevronBack} size="large"></IonIcon>
              </IonButton>
              <IonButton className="btn1">All Loads</IonButton>
              <IonButton className="btn2">My Bids</IonButton>
              <IonButton className="btn2">No Bids</IonButton>
            </div>
            {
              loadData.map((item: LoadData) => (
                <LoadCarrierDetails showLabel={true} data={item} key={item.LoadsID} />
              ))
            }

          </div>
        </IonContent>
      )} */}
    </IonPage>
  );
};

export default NewLoadDetails;
