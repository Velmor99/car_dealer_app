export interface IAllVehiclesResponse {
  Count: number;
  Message: string;
  SearchCriteria: string;
  Results: IVehicleInfo[];
}

export interface IVehicleInfo {
  MakeId: number;
  MakeName: string;
  VehicleTypeId: number;
  VehicleTypeName: string;
}

export interface IModelInfo {
  Make_ID: number;
  Make_Name: string;
  Model_ID: number;
  Model_Name: string;
}
