"use client";

import type React from "react";
import { useState } from "react";
import {
  IonContent,
  IonPage,
  IonInput,
  IonButton,
  IonGrid,
  IonRow,
  IonCol,
  IonSelect,
  IonSelectOption,
  useIonToast,
  useIonRouter,
  IonSpinner,
  IonRadioGroup,
  IonRadio,
} from "@ionic/react";
import "../../assets/styles/main.css";
import "./CreateNewLoad.css";
import greenDot from "../../assets/images/greendot.png";
import redDot from "../../assets/images/redDot.png";
import Header from "../../components/Header";
import { useAuth } from "../../store/AuthContext";
import { CreateLoadFormValidation } from "../../utils/validator";
import { Formik } from "formik";
import { postApiCall } from "../../utils/api/api";
const PostLoad: React.FC = () => {
  const [present] = useIonToast();
  const { user } = useAuth();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const presentToast = (
    message: string,
    position: "top" | "middle" | "bottom",
    color: "danger" | "success" | "warning" = "success"
  ) => {
    present({
      message: message,
      duration: 1500,
      position: position,
      color: color,
    });
  };
  const initialValues = {
    UsersID: "",
    LoadFrom: null,
    LoadTo: null,
    VehicleType: null,
    ProductType: null,
    TotalDistance: null,
    RatePerTon: null,
    Material: null,
    TruckPreference: null,
  };
  const router = useIonRouter();
  const handleSubmit = async (values: any) => {
    setIsLoading(true);
    console.log(values, "VALUES");
    let payload = {
      UsersID: user?.UsersID,
      ProductType: values?.ProductType,
      Material: values?.Material,
      LoadFrom: values?.LoadFrom,
      LoadTo: values?.LoadTo,
      VehicleType: values?.VehicleType,
      TotalDistance: values?.TotalDistance,
      RatePerTon: values?.RatePerTon,
      TruckPreference: values?.TruckPreference,
    };
    try {
      const createLoadResponse = await postApiCall(payload, "createLoad");
      if (createLoadResponse?.status) {
        presentToast("Load posted successfully!", "top", "success");
        router.push("/app/dashboard");
      } else {
        const errorMessage =
          createLoadResponse?.errors?.errorMessage ||
          createLoadResponse?.message ||
          "Load posting failed!";
        presentToast(errorMessage, "top", "danger");
        console.error("Load posting failed!", createLoadResponse);
      }
    } catch (error) {
      // Handle unexpected errors
      presentToast("OOps something is wrong!", "top", "danger");
      console.error("API call error:", error);
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <IonPage>
      <Header showBackButton={true} />
      <IonContent className="ion-no-padding">
        <IonGrid className="ion-no-padding">
          <IonRow className="ion-padding">
            <IonCol size="12">
              <div className="product-container">
                <div className="title">Post Load</div>
                <div className="subtitle">Tell us your requirement</div>
              </div>
            </IonCol>
          </IonRow>
          <IonRow className="mb-1x">
            <IonCol size="12">
              <div className="radio-group-label ion-padding">Load Details</div>
              <IonRadioGroup
                //   value={values.LoadType}
                onIonChange={(e) => {
                  console.log("On change");
                  // setFieldValue("LoadType", e.detail.value)
                }}
              >
                <IonRow className="ion-padding">
                  <IonCol size="6">
                    <label className="radio-option">
                      <IonRadio value="Single" />
                      <div style={{ display: "flex", flexDirection: "column" }}>
                        <span className="radio-label">Single</span>
                        <span className="radio-sub-label">
                          Loading & Unloading
                        </span>
                      </div>
                    </label>
                  </IonCol>
                  <IonCol size="6">
                    <label className="radio-option">
                      <IonRadio value="Multiple" />
                      <div style={{ display: "flex", flexDirection: "column" }}>
                        <span className="radio-label">Multiple</span>
                        <span className="radio-sub-label">
                          Loading & Unloading
                        </span>
                      </div>
                    </label>
                  </IonCol>
                </IonRow>
              </IonRadioGroup>
            </IonCol>
          </IonRow>

          <IonRow className="pt-2x">
            <IonCol size="12">
              <Formik
                initialValues={initialValues}
                validationSchema={CreateLoadFormValidation()}
                onSubmit={handleSubmit}
              >
                {({
                  values,
                  errors,
                  touched,
                  setFieldValue,
                  handleChange,
                  handleSubmit,
                }) => (
                  <form onSubmit={handleSubmit}>
                    <IonGrid className="ion-no-margin">
                      <IonRow>
                        <IonCol size="12" className="">
                          <IonInput
                            className={`custom-input ${
                              errors.LoadFrom && "ion-invalid"
                            } ${touched.LoadFrom && "ion-touched"} mb-1.5x`}
                            type="text"
                            fill="outline"
                            label="Loading Point"
                            labelPlacement="floating"
                            placeholder="Enter a loading point"
                            mode="md"
                            errorText={errors.LoadFrom}
                            value={values.LoadFrom}
                            onIonInput={(e) =>
                              setFieldValue("LoadFrom", e.detail.value)
                            }
                          >
                            <img
                              slot="start"
                              src={greenDot}
                              aria-hidden="true"
                              style={{ width: 20, height: 20, marginRight: 16 }}
                            />
                          </IonInput>

                          <IonInput
                            className={`custom-input ${
                              errors.LoadTo && "ion-invalid"
                            } ${touched.LoadTo && "ion-touched"} mb-1.5x`}
                            type="text"
                            fill="outline"
                            label="Unloading Point"
                            labelPlacement="floating"
                            placeholder="Enter a Unloading point"
                            mode="md"
                            errorText={errors.LoadTo}
                            value={values.LoadTo}
                            onIonInput={(e) =>
                              setFieldValue("LoadTo", e.detail.value)
                            }
                          >
                            <img
                              slot="start"
                              src={redDot}
                              aria-hidden="true"
                              style={{ width: 20, height: 20, marginRight: 16 }}
                            />
                          </IonInput>

                          <IonInput
                            className={`custom-input ${
                              errors.Material && "ion-invalid"
                            } ${touched.Material && "ion-touched"} mb-1.5x`}
                            type="text"
                            fill="outline"
                            label="Material"
                            labelPlacement="floating"
                            placeholder="Enter a material"
                            mode="md"
                            errorText={errors.Material}
                            value={values.Material}
                            onIonInput={(e) =>
                              setFieldValue("Material", e.detail.value)
                            }
                          />

                          <IonSelect
                            className={`custom-input ${
                              errors.TruckPreference && "ion-invalid"
                            } ${
                              touched.TruckPreference && "ion-touched"
                            } mb-1.5x`}
                            label="TruckPreference"
                            labelPlacement="floating"
                            fill="outline"
                            errorText={errors.TruckPreference}
                            value={values.TruckPreference}
                            onIonChange={(e) =>
                              setFieldValue("TruckPreference", e.detail.value)
                            }
                          >
                            <IonSelectOption value="1">
                              Mini Truck
                            </IonSelectOption>
                            <IonSelectOption value="2">
                              Pickup Truck
                            </IonSelectOption>
                            <IonSelectOption value="3">
                             Container Truck (20/32 ft)
                            </IonSelectOption>
                            <IonSelectOption value="4">
                              Canter (14-17 ft)
                            </IonSelectOption>
                            <IonSelectOption value="5">
                              10-Wheeler (21-22 ft)
                            </IonSelectOption>
                            <IonSelectOption value="6">
                              12-Wheeler (24 ft)
                            </IonSelectOption>
                            <IonSelectOption value="7">
                              14-Wheeler (28 ft)
                            </IonSelectOption>
                          </IonSelect>

                          <IonRow>
                            <IonCol size="12">
                              <IonButton
                                expand="block"
                                className="confirm-button"
                                type="submit"
                                disabled={isLoading}
                              >
                                {isLoading && (
                                  <IonSpinner name="crescent" slot="start" />
                                )}
                                {isLoading ? "Posting Load..." : "Post Load"}
                              </IonButton>
                            </IonCol>
                          </IonRow>
                        </IonCol>
                      </IonRow>
                    </IonGrid>
                  </form>
                )}
              </Formik>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default PostLoad;
