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

export const SearchLoadFormValidation = () => {
  const validationSchema = Yup.object({
    fromLocation: Yup.string().required("From Location is required"),
    toLocation: Yup.string().required("To Location is required"),
  });
  return validationSchema;
};

export const CreateLoadFormValidation = () => {
  const validationSchema = Yup.object({
    ProductType: Yup.string().required("Product Type is required"),
    ProductWeight: Yup.number().required("Product Weight is required"),
    LoadFrom: Yup.string().required("From Location is required"),
    LoadTo: Yup.string().required("To Location is required"),
    VehicleType: Yup.string().required("To Location is required"),
    TotalDistance: Yup.number().required("Total Distance is required"),
    RatePerTon: Yup.number().required("Rate Per Ton is required"),
    PaymentTerms: Yup.string().required("Payment Terms is required"),
  });
  return validationSchema;
};

export const PlaceBidFormValidation = () => {
  const validationSchema = Yup.object({
    BidAmount: Yup.number().min(1, "Bid Amount is required"),
    BidQuantity: Yup.number().required("Bid Quantity is required"),
    DriverName: Yup.string().required("Driver Name is required"),
    DriverContactNumber: Yup.string().required(
      "Driver Contact Number is required"
    ),
    VehicleNumber: Yup.string().required("Vehicle Number is required"),
  });
  return validationSchema;
};
