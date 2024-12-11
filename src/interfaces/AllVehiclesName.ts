export interface IAllVehiclesResponse {
    Count: number
    Message: string,
    SearchCriteria: string,
    Results: IVehicleInfo[]
}

export interface IVehicleInfo {
    MakeId: number,
    MakeName: string,
    VehicleTypeId: number,
    VehicleTypeName: string
}