import { IOwner } from "./IOwner"
import { IRent } from "./IRent"

export interface ICar{
VIN:string,
Color:string,
LicenseNumber:string
Seats:number,
Rate:number,
RatedPeople:number,
Mailage:number,
CarType:string,
LicenseEXDate:Date,
Year:string,
AvailableForRent:boolean,
ModelName:string,
BrandName:string,
LocationOfRent:string,
CostPerDay:number,
Image:string,
RegistrationDate:Date,
Insurance:boolean,
GearBoxType:string,
IsActivated:boolean,
OwnerId:string
}

