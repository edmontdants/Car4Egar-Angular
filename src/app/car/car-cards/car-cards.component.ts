import { Component } from '@angular/core';
import { Car } from 'src/app/Models/Car';

@Component({
  selector: 'app-car-cards',
  templateUrl: './car-cards.component.html',
  styleUrls: ['./car-cards.component.scss']
})

export class CarCardsComponent {
  PricePerDaySearch(value: number): string {
    if (value >= 0) {
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
  CarPricePerDay:number=250;
  CarModel:string='Hyundai';
  CarBrand:string='Verna';
  CarYear:number=2010;
  CarRating:number = 2.5;
  OwnerName:string='Eslam';

//   Cars:Car[]=[
//     {
//       VIN : '1',
// Color : 'Black',
// LicenseNumber : '1234',
// Seats :4,
// Rate:4,
// RatedPeople:7,
// Mailage:50,
// CarType:'Kia',
// LicenseEXDate:new Date(),
// Year:'2010',
// AvailableForRent:true,
// ModelName:'Model',
// BrandName:'Brand',
// LocationOfRent:'Assuit',
// CostPerDay:290,
// Image:'~/src/assets/car.jpg',
// RegistrationDate:new Date(),
// Insurance:true,
// GearBoxType:'Manual',
// IsActivated:true,
// Owner: Owner,
// Rent:Rent

//     }
//   ]
}
