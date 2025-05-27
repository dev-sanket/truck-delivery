import * as Yup from "yup";

export const LoginFormValidation = () => {
  const validationSchema = Yup.object({
    mobileNumber: Yup.string()
      .required("Mobile number is required")
      .matches(/^[6-9]\d{9}$/, "Invalid mobile number"),
  });

  return validationSchema;
};

export const KycFormValidation = () => {
  const validationSchema = Yup.object({
    FullName: Yup.string().required("Full Name is required"),
    AadharDocument: Yup.mixed().required("Aadhar Document is required"),
    PanDocument: Yup.mixed().required("Pan Document is required"),
    RCDocument: Yup.mixed().required("RC Document is required"),
  });

  return validationSchema;
};