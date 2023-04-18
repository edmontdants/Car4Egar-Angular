export interface IRentRequest{
  id:number,
  ownerId:string
  borrowerId:string
  borrowerName:string
  borrowerAddress:string
  requestedCarVin:string
  rentDays:number
  requestAcceptance:boolean
  carImage:string
  borrowerImage:string
  carBrand:string
  carYear:number
}
