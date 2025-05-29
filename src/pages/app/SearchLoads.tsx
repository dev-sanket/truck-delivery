"use client";
import type React from "react";
import { useEffect, useState } from "react";
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
  IonGrid,
  IonRow,
  IonCol,
} from "@ionic/react";
import "./SearchLoads.css";
import LoadListing from "../../components/LoadList";
import viceVersa from "../../assets/images/vice-versa.png";
import greenDot from "../../assets/images/greendot.png";
import redDot from "../../assets/images/redDot.png";
import { useHistory } from "react-router";
import { Formik } from "formik";
import { trashOutline } from "ionicons/icons";

const SearchLoads: React.FC = () => {
  const history :any = useHistory<History>();

  const [previousSearchLoads, setPreviousSearchLoads] = useState<{ fromLocation: string, toLocation: string }[]>([]);

  const handleSearch = (values: any) => {
    console.log("Pressed Search button", values);
    const { fromLocation, toLocation } = values;
    const existingLoad = previousSearchLoads.find(load => load.fromLocation === fromLocation && load.toLocation === toLocation);
    if (!existingLoad) {
      setPreviousSearchLoads([...previousSearchLoads, { fromLocation, toLocation }]);
    }

    history.push({
      pathname: '/app/load-details',
      state: { fromLocation, toLocation },
    });
  };

  useEffect(() => {
    const previousSearch = localStorage.getItem('previousSearch')
    console.log("Previous Search", previousSearch);

    if (previousSearch) {
      setPreviousSearchLoads(JSON.parse(previousSearch));
    }
  }, []);

  useEffect(() => {
    if (previousSearchLoads.length > 0) {
      localStorage.setItem('previousSearch', JSON.stringify(previousSearchLoads));
    }
  }, [previousSearchLoads]);

  const defaultValues = {
    fromLocation: "",
    toLocation: "",
  };

  const clearPreviousSearch = () => {
    localStorage.removeItem('previousSearch');
    setPreviousSearchLoads([]);
  }


  return (
    <IonPage>
      <IonContent className="ion-no-padding" >
        <IonGrid className="ion-no-padding">
          <IonRow className="mt-2x ion-padding" style={{ borderBottom: '1px solid #F0F0F0' }}>
            <IonCol size="12">
              <div className="title-container">
                <div className="page-title">Search Loads</div>
              </div>
            </IonCol>
          </IonRow>
          <Formik initialValues={defaultValues} onSubmit={handleSearch}>
            {({ values, errors, touched, handleChange, handleSubmit }) => (
              <>
                <IonRow className="ion-padding">
                  <IonCol size="12">
                    <IonInput
                      type="text"
                      fill="outline"
                      label="From"
                      labelPlacement="floating"
                      className={`custom-input ${errors.fromLocation && 'ion-invalid'} ${touched.fromLocation && 'ion-touched'}`}
                      placeholder="Enter loading point"
                      helperText=""
                      mode="md"
                      name="fromLocation"
                      value={values.fromLocation}
                      onChange={handleChange}
                      errorText={errors.fromLocation}
                    >
                      <img
                        slot="start"
                        src={greenDot}
                        aria-hidden="true"
                        style={{ width: 20, height: 20, marginRight: 16 }}
                      />
                      <img
                        slot="end"
                        src={viceVersa}
                        alt="check"
                        aria-hidden="true"
                        style={{ width: 20, height: 20 }}
                      />
                    </IonInput>

                  </IonCol>
                </IonRow>
                <IonRow className="ion-padding">
                  <IonCol size="12">
                    <IonInput
                      type="text"
                      fill="outline"
                      label="To"
                      labelPlacement="floating"
                      className={`custom-input ${errors.toLocation && 'ion-invalid'} ${touched.toLocation && 'ion-touched'}`}
                      placeholder="Enter Unloading point"
                      helperText=""
                      mode="md"
                      name="toLocation"
                      value={values.toLocation}
                      onChange={handleChange}
                      errorText={errors.toLocation}
                    >
                      <img
                        slot="start"
                        src={redDot}
                        alt="greenDot"
                        aria-hidden="true"
                        style={{ width: 20, height: 20 }}
                      />

                    </IonInput>
                  </IonCol>
                </IonRow>
                <IonRow className="ion-padding">
                  <IonCol size="12">
                    <IonButton
                      expand="block"
                      className="find-loads-button"
                      disabled={!values.fromLocation || !values.toLocation}
                      onClick={(e) => {
                        e.preventDefault();
                        handleSubmit();
                      }}
                    >
                      Find Loads
                    </IonButton>
                  </IonCol>
                </IonRow>
              </>
            )}
          </Formik>
          {
            previousSearchLoads.length > 0 &&

            <IonRow className="ion-no-padding pt-2x" style={{ backgroundColor: '#f0f0f0' }}>
              <IonCol size="12" className="ion-padding search-container">
                {
                  previousSearchLoads.length > 0 && (

                    <div style={{ flexDirection: 'row', display: 'flex', justifyContent: 'space-between', alignItems: 'center', height: '40px' }}>
                      <div className="search-section-title">Previous Searches</div>
                      <IonButton fill="clear" color="danger" onClick={clearPreviousSearch}>
                        <IonIcon icon={trashOutline} />
                        Clear All
                      </IonButton>
                    </div>
                  )
                }

                {
                  previousSearchLoads.map((load, index) => (
                    <LoadListing key={index} fromLocation={load.fromLocation} toLocation={load.toLocation} />
                  ))
                }
                {/* <LoadListing />
              <LoadListing />
              <LoadListing /> */}
                {/* <div className="search-section-title">Find Loads Form</div>
              <LoadListing /> */}
              </IonCol>
            </IonRow>
          }
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default SearchLoads;
