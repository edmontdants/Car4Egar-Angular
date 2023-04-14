import { Component } from '@angular/core';
import { ICar } from 'src/app/Models/ICar';

@Component({
  selector: 'app-car-cards',
  templateUrl: './car-cards.component.html',
  styleUrls: ['./car-cards.component.scss']
})

export class CarCardsComponent {
  constructor() {
    this.FilteredCars=this.Cars;
    this.NumberOfAvailableCarsOnly=this.Cars.filter((car:ICar) => car.AvailableForRent==true).length
  }

  FilteredCars:ICar[]=[];
//***************************************//
//******Filter By Available Cars Only****//
//***************************************//
  private _filterByAvailableOnlyCheck:boolean=false;
  filterByAvailableOnly(check:boolean):ICar[]{
    this._filterByPricePerDaydOnlyValue=0;
    if(check==true){
      if(this._filterByTopRatedOnlyCheck){
        this._filterByTopRatedOnlyCheck = !this._filterByTopRatedOnlyCheck;
      }

      return this.Cars.filter((car:ICar) =>
      car.AvailableForRent==true);
    }
    else{
      this.FilteredCars=this.Cars
    }
    return this.FilteredCars;
  }

  public get filterByAvailableOnlyCheck():boolean
  {
    return this._filterByAvailableOnlyCheck;
  }
  public set filterByAvailableOnlyCheck(value:boolean)
  {
    this._filterByAvailableOnlyCheck = !this._filterByAvailableOnlyCheck;
    this.FilteredCars = this.filterByAvailableOnly(this._filterByAvailableOnlyCheck);
  }
//***************************************//
//******Filter By Top Rated Cars Only****//
//***************************************//

  private _filterByTopRatedOnlyCheck:boolean=false;
  filterByTopRatedOnly(check:boolean):ICar[]{
    this._filterByPricePerDaydOnlyValue=0;

    if(this._filterByAvailableOnlyCheck){
      this._filterByAvailableOnlyCheck = !this._filterByAvailableOnlyCheck;
    }
    if(check==true){
      return this.Cars.filter((car:ICar) =>
      car.Rate==5);
    }
    else{
      this.FilteredCars=this.Cars
    }
    return this.FilteredCars;
  }

  public get filterByTopRatedOnlyCheck():boolean
  {
    return this._filterByTopRatedOnlyCheck;
  }
  public set filterByTopRatedOnlyCheck(value:boolean)
  {
    this._filterByTopRatedOnlyCheck = !this._filterByTopRatedOnlyCheck;
    this.FilteredCars = this.filterByTopRatedOnly(this._filterByTopRatedOnlyCheck);
  }
//***************************************//
//******Filter By Price Per Day****//
//***************************************//
private _filterByPricePerDaydOnlyValue:number=0;
public get filterByPricePerDaydOnlyValue():number
{
  return this._filterByPricePerDaydOnlyValue;
}
public set filterByPricePerDaydOnlyValue(value:number)
{
  this._filterByPricePerDaydOnlyValue = value;
  this.FilteredCars = this.filterByPricePerDaydOnly(this._filterByPricePerDaydOnlyValue);
}
filterByPricePerDaydOnly(value:number):ICar[]{
  if(this._filterByAvailableOnlyCheck){
    this._filterByAvailableOnlyCheck = !this._filterByAvailableOnlyCheck;
  }
  if(this._filterByTopRatedOnlyCheck){
    this._filterByTopRatedOnlyCheck = !this._filterByTopRatedOnlyCheck;
  }
  if (value ==0) {
    return this.Cars;
  }
  return this.Cars.filter((car:ICar) =>
  car.CostPerDay == this.filterByPricePerDaydOnlyValue);
}
PricePerDay(value: number): string {
  if (value > 0) {
    return Math.round(value) + 'LE';
  }

  return `${value}`;
}

  yearModelSearch(value: number): string {
    return `${value}`;
  }
  panelOpenState = false;


  states: string[] = [
    'Alabama',
    'Alaska',
    'Arizona',
    'Arkansas',
    'California',
    'Colorado',
    'Connecticut',
    'Delaware',
    'Florida',
    'Georgia',
    'Hawaii',
    'Idaho',
    'Illinois',
    'Indiana',
    'Iowa'
  ];
  NumberOfAvailableCarsOnly:number=0;


  Cars:ICar[]=[
    {
      VIN : '1',
Color : 'Black',
LicenseNumber : '1234',
Seats :4,
Rate:4,
RatedPeople:7,
Mailage:50,
CarType:'Kia',
LicenseEXDate:new Date(),
Year:'2010',
AvailableForRent:true,
ModelName:'Model',
BrandName:'Brand',
LocationOfRent:'Assuit',
CostPerDay:250,
Image:'car.jpg',
RegistrationDate:new Date(),
Insurance:true,
GearBoxType:'Manual',
IsActivated:true,
OwnerId:'12345678901234'

    },
    {
      VIN : '2',
Color : 'Blue',
LicenseNumber : '12345',
Seats :4,
Rate:3.5,
RatedPeople:7,
Mailage:50,
CarType:'Kia',
LicenseEXDate:new Date(),
Year:'2011',
AvailableForRent:false,
ModelName:'Model',
BrandName:'Brand',
LocationOfRent:'Minia',
CostPerDay:600,
Image:'car2.png',
RegistrationDate:new Date(),
Insurance:true,
GearBoxType:'Automatic',
IsActivated:true,
OwnerId:'12345678901234'

    },
    {
      VIN : '3',
Color : 'Red',
LicenseNumber : '123455',
Seats :4,
Rate:5,
RatedPeople:7,
Mailage:50,
CarType:'Kia',
LicenseEXDate:new Date(),
Year:'2020',
AvailableForRent:true,
ModelName:'Model',
BrandName:'Brand',
LocationOfRent:'Minia',
CostPerDay:2100,
Image:'car3.jpg',
RegistrationDate:new Date(),
Insurance:true,
GearBoxType:'Automatic',
IsActivated:true,
OwnerId:'12345678901234'

    },
    {
      VIN : '4',
Color : 'Red',
LicenseNumber : '123455',
Seats :4,
Rate:5,
RatedPeople:7,
Mailage:50,
CarType:'Kia',
LicenseEXDate:new Date(),
Year:'2020',
AvailableForRent:true,
ModelName:'Model',
BrandName:'Brand',
LocationOfRent:'Minia',
CostPerDay:200,
Image:'car4.jpg',
RegistrationDate:new Date(),
Insurance:true,
GearBoxType:'Automatic',
IsActivated:true,
OwnerId:'12345678901234'

    }
  ]
}
