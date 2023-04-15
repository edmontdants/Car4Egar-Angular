import { IOwner } from "./IOwner"
import { IRent } from "./IRent"

export interface ICar{
vin:string,
color:string,
rate:number,
ratedPeople:number,
mailage:number,
carType:string,
year:number,
available:boolean,
modelName:string,
brandName:string,
locationOfRent:string,
costPerDay:number,
image:string,
insurance:boolean,
gearBoxType:string,
isActivated:boolean,
ownerId:string
}

