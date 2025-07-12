"use client";

import type React from "react";
import { useState } from "react";
import {
  IonContent,
  IonPage,
  IonInput,
  IonButton,
  IonItem,
  IonLabel,
  IonGrid,
  IonRow,
  IonCol,
  IonList,
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
import Header from "../../components/Header";
import { useAuth } from "../../store/AuthContext";
import { CreateLoadFormValidation } from "../../utils/validator";
import { FieldArray, Formik } from "formik";
import { postApiCall } from "../../utils/api/api";
import { addOutline, removeOutline } from "ionicons/icons";
import { IonIcon } from "@ionic/react";
import greenDot from "../../assets/images/greenDot.png";
import redDot from "../../assets/images/redDot.png";

const CreateNewLoad: React.FC = () => {
  const [present] = useIonToast();
  const { user } = useAuth();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [selection, SetSelection] = useState<string>("Single");
  const [resetFormTrigger, setResetFormTrigger] = useState(false);

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
    LoadFrom: [""],
    LoadTo: [""],
    VehicleType: null,
    ProductType: null,
    TotalDistance: null,
    RatePerTon: null,
    ProductWeight: null,
    PaymentTerms: null,
  };
  const router = useIonRouter();
  const handleSubmit = async (values: any) => {
    setIsLoading(true);
    console.log(values, "VALUES")
    const payload = {
      UsersID: user?.UsersID,
      ProductType: values?.ProductType,
      ProductWeight: values?.ProductWeight,
      LoadFrom: values?.LoadFrom.join(","),
      LoadTo: values?.LoadTo.join(","),
      VehicleType: values?.VehicleType,
      TotalDistance: values?.TotalDistance,
      RatePerTon: values?.RatePerTon,
      PaymentTerms: values?.PaymentTerms,
    }
    try {
      const createLoadResponse = await postApiCall(payload, 'createLoad');
      if (createLoadResponse?.status) {
        presentToast("Creation of load successful!", "top", "success");
        router.push('/app/dashboard');
      } else {
        const errorMessage = createLoadResponse?.errors?.errorMessage || createLoadResponse?.message || "Creation of load failed!";
        presentToast(errorMessage, "top", "danger");
        console.error('Creation of load failed!', createLoadResponse);
      }
    } catch (error) {
      // Handle unexpected errors
      presentToast("OOps something is wrong!", "top", "danger");
      console.error('API call error:', error);
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <IonPage>
      <Header showBackButton={true} />
      <IonContent className="ion-padding">
        <IonGrid className="ion-no-padding">
          <IonRow>
            <IonCol size="12">
              <div className="product-container">
                <div className="title">Create New Load</div>
                <div className="subtitle">Please enter your load details</div>
              </div>
            </IonCol>
          </IonRow>
          <IonRow className="mb-1.5x mt-2.5x">
            <IonCol size="12">
              <IonRadioGroup

                onIonChange={(e) => {
                  console.log("On change", e);
                  SetSelection(e.detail.value)
                  setResetFormTrigger(true)
                }}
              >
                <IonLabel>Loading & Unloading Point</IonLabel>
                <IonRow className="ion-padding">
                  <IonCol size="12">
                    <IonRadioGroup value={selection} className="check-radio-group" onIonChange={(e: any) => {
                      SetSelection(e.detail.value)
                      setResetFormTrigger(true)
                    }}>

                      <IonRadio
                        value="Single"
                        color="primary"
                        mode="md"
                        labelPlacement="end"
                      >
                        Single
                      </IonRadio>

                      <IonRadio
                        value="Multiple"
                        color="primary"
                        mode="md"
                        labelPlacement="end"
                      >
                        Multiple
                      </IonRadio>
                    </IonRadioGroup>
                  </IonCol>
                </IonRow>
              </IonRadioGroup>
            </IonCol>
          </IonRow>
          <IonRow>
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
                    <IonGrid className="ion-no-margin ion-no-padding">
                      <IonRow>
                        {/* <IonCol size="12">
                    <div className="title">KYC Verification</div>
                    <div className="subtitle">Upload your documents to verify your account</div>
                  </IonCol> */}
                        <IonCol size="12">
                          {/* <IonInput
                            className={`custom-input ${errors.LoadFrom && "ion-invalid"
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
                          />
                          <IonInput
                            className={`custom-input ${errors.LoadTo && "ion-invalid"
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
                          /> */}

                          <FieldArray name="LoadFrom">
                            {({ push, remove }) => (
                              <>
                                {values.LoadFrom.map((loadFromVal, index) => (
                                  <div key={index}>
                                    <IonInput
                                      className={`custom-input ${errors.LoadFrom && touched.LoadFrom
                                        ? "ion-invalid"
                                        : ""
                                        } mb-1.5x`}
                                      type="text"
                                      fill="outline"
                                      label={`Loading Point ${index + 1}`}
                                      labelPlacement="floating"
                                      placeholder="Enter a loading point"
                                      mode="md"
                                      value={loadFromVal}
                                      onIonInput={(e) =>
                                        setFieldValue(
                                          `LoadFrom[${index}]`,
                                          e.detail.value
                                        )
                                      }
                                    >
                                      <img
                                        slot="start"
                                        src={greenDot}
                                        aria-hidden="true"
                                        style={{
                                          width: 20,
                                          height: 20,
                                          marginRight: 16,
                                        }}
                                      />
                                    </IonInput>

                                    {selection === "Multiple" &&
                                      index === values.LoadFrom.length - 1 && (
                                        <div style={{ display: "flex", flexDirection: "row", gap: 10, justifyContent: "flex-end", padding: 0 }}>

                                          <div
                                            className="add-icon-wrapper"
                                            onClick={() => push("")}
                                            style={{ cursor: "pointer" }}
                                          >
                                            <IonIcon
                                              icon={addOutline}
                                              size="small"
                                            />
                                          </div>
                                          <div
                                            className="add-icon-wrapper"
                                            onClick={() => remove(index)}
                                            style={{ cursor: "pointer" }}
                                          >
                                            <IonIcon
                                              icon={removeOutline}
                                              size="small"
                                            />
                                          </div>
                                        </div>
                                      )}
                                  </div>
                                ))}
                              </>
                            )}
                          </FieldArray>
                          <FieldArray name="LoadTo">
                            {({ push, remove }) => (
                              <>
                                {values.LoadTo.map((loadToVal, index) => (
                                  <div key={index}>
                                    <IonInput
                                      className={`custom-input ${errors.LoadTo && touched.LoadTo
                                        ? "ion-invalid"
                                        : ""
                                        } mb-1.5x`}
                                      type="text"
                                      fill="outline"
                                      label={`Unloading Point ${index + 1}`}
                                      labelPlacement="floating"
                                      placeholder="Enter a unloading point"
                                      mode="md"
                                      value={loadToVal}
                                      onIonInput={(e) =>
                                        setFieldValue(
                                          `LoadTo[${index}]`,
                                          e.detail.value
                                        )
                                      }
                                    >
                                      <img
                                        slot="start"
                                        src={redDot}
                                        aria-hidden="true"
                                        style={{
                                          width: 20,
                                          height: 20,
                                          marginRight: 16,
                                        }}
                                      />
                                    </IonInput>

                                    {selection === "Multiple" &&
                                      index === values.LoadTo.length - 1 && (
                                        <div style={{ display: "flex", flexDirection: "row", gap: 10, justifyContent: "flex-end", padding: 0 }}>


                                          <div
                                            className="add-icon-wrapper"
                                            onClick={() => push("")}
                                            style={{ cursor: "pointer" }}
                                          >
                                            <IonIcon
                                              icon={addOutline}
                                              size="small"
                                            />
                                          </div>
                                          <div
                                            className="add-icon-wrapper"
                                            onClick={() => remove(index)}
                                            style={{ cursor: "pointer" }}
                                          >
                                            <IonIcon
                                              icon={removeOutline}
                                              size="small"
                                            />
                                          </div>
                                        </div>
                                      )}
                                  </div>
                                ))}
                              </>
                            )}
                          </FieldArray>

                          <IonInput
                            className={`custom-input ${errors.VehicleType && "ion-invalid"
                              } ${touched.VehicleType && "ion-touched"} mb-1.5x`}
                            type="text"
                            fill="outline"
                            label="Vehicle Type"
                            labelPlacement="floating"
                            placeholder="Enter a vehicle type"
                            mode="md"
                            errorText={errors.VehicleType}
                            value={values.VehicleType}
                            onIonInput={(e) =>
                              setFieldValue("VehicleType", e.detail.value)
                            }
                          />
                          <IonInput
                            className={`custom-input ${errors.ProductWeight && "ion-invalid"
                              } ${touched.ProductWeight && "ion-touched"
                              } mb-1.5x`}
                            type="text"
                            fill="outline"
                            label="Product Weight"
                            labelPlacement="floating"
                            placeholder="Enter a product weight"
                            mode="md"
                            errorText={errors.ProductWeight}
                            value={values.ProductWeight}
                            onIonInput={(e) =>
                              setFieldValue("ProductWeight", e.detail.value)
                            }
                          />
                          <IonInput
                            className={`custom-input ${errors.TotalDistance && "ion-invalid"
                              } ${touched.TotalDistance && "ion-touched"
                              } mb-1.5x`}
                            type="text"
                            fill="outline"
                            label="Total Distance"
                            labelPlacement="floating"
                            placeholder="Enter a total distance"
                            mode="md"
                            errorText={errors.TotalDistance}
                            value={values.TotalDistance}
                            onIonInput={(e) =>
                              setFieldValue("TotalDistance", e.detail.value)
                            }
                          />
                          <IonInput
                            className={`custom-input ${errors.RatePerTon && "ion-invalid"
                              } ${touched.RatePerTon && "ion-touched"} mb-1.5x`}
                            type="text"
                            fill="outline"
                            label="Rate per ton"
                            labelPlacement="floating"
                            placeholder="Enter a rate per ton"
                            mode="md"
                            errorText={errors.RatePerTon}
                            value={values.RatePerTon}
                            onIonInput={(e) =>
                              setFieldValue("RatePerTon", e.detail.value)
                            }
                          />
                          <IonInput
                            className={`custom-input ${errors.ProductType && "ion-invalid"
                              } ${touched.ProductType && "ion-touched"} mb-1.5x`}
                            type="text"
                            fill="outline"
                            label="Product Type"
                            labelPlacement="floating"
                            placeholder="Enter a product type"
                            mode="md"
                            errorText={errors.ProductType}
                            value={values.ProductType}
                            onIonInput={(e) =>
                              setFieldValue("ProductType", e.detail.value)
                            }
                          />
                          <IonSelect
                            className={`custom-input ${errors.PaymentTerms && "ion-invalid"
                              } ${touched.PaymentTerms && "ion-touched"} mb-1.5x`}
                            label="Payment Terms"
                            labelPlacement="floating"
                            fill="outline"
                            errorText={errors.PaymentTerms}
                            value={values.PaymentTerms}
                            onIonChange={(e) =>
                              setFieldValue("PaymentTerms", e.detail.value)
                            }
                          >
                            <IonSelectOption value="apple">
                              Cash
                            </IonSelectOption>
                            <IonSelectOption value="banana">
                              Online
                            </IonSelectOption>
                            <IonSelectOption value="orange">
                              Credit
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
                                {isLoading && <IonSpinner name="crescent" slot="start" />}
                                {isLoading ? 'Creating Load...' : 'Create Load'}
                              </IonButton>
                            </IonCol>
                          </IonRow>
                          <IonRow>
                            <div style={{ height: "59px" }}></div>
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

export default CreateNewLoad;
