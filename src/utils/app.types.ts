export enum LoadStatus {
  ALL = "ALL",
  OPEN = "OPN",
  PENDING = "PEN",
  CONFIRMED = "CON",
  HISTORY = "HIS",
}

export enum LoadIndentStatus {
  INDENT = "INDENT",
  LOADING = "LOADING",
  IN_TRANSIT = "IN_TRANSIT",
  UNLOADING = "UNLOADING",
  POD_PENDING = "POD_PENDING",
  CLOSED = "CLOSED",
  CANCELLED = "CANCELLED",
}

export interface LoadData {
  LoadsID: string;
  UsersID: string;
  FullName: string;
  LoadFrom: string;
  LoadTo: string;
  VehicleType: string;
  ProductWeight: string;
  TotalDistance: string;
  RatePerTon: string;
  ProductType: string;
  PaymentTerms: string;
  MobileNumber: string;
  LoadStatus: LoadStatus;
  IntentStatus: LoadIndentStatus;
  Status: "Y" | "N";
  LoadCreated: string;
}
