import * as Yup from "yup";

export const LoginFormValidation = () => {
  const validationSchema = Yup.object({
    mobileNumber: Yup.string()
      .required("Mobile number is required")
      .matches(/^[6-9]\d{9}$/, "Invalid mobile number"),
  });

  return validationSchema;
};
