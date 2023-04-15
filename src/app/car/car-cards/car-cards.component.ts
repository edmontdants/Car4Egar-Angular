import { Component } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { Icon } from '@fortawesome/fontawesome-svg-core';
import { ICar } from 'src/app/Models/ICar';

@Component({
  selector: 'app-car-cards',
  templateUrl: './car-cards.component.html',
  styleUrls: ['./car-cards.component.scss'],
})
export class CarCardsComponent {
  constructor() {
    // this.FilteredCars = this.Cars;
    this.NumberOfAvailableCarsOnly = this.Cars.filter(
      (car: ICar) => car.AvailableForRent == true
    ).length;
  }

  //*************//
  //***Lists ***//
  //***********//

  Brands: string[] = [
    'All',
    'Abarth',
    'Acura',
    'AlfaRomeo',
    'AstonMartin',
    'Audi',
    'Bentley',
    'BMW',
    'Buick',
    'Cadillac',
    'Chevrolet',
    'Chrtsler',
    'Citroen',
    'Dacia',
    'Dodge',
    'Ferrari',
    'Fiat',
    'Ford',
    'GMC',
    'Honda',
    'Hummer',
    'Hyundai',
    'Infiniti',
    'Isuzu',
    'Jaguar',
    'Jeep',
    'Kia',
    'Lamborghini',
    'Lancia',
    'LandRover',
    'Lexus',
    'Lincoln',
    'Lotus',
    'Maserati',
    'Mazda',
    'Mercedes',
    'Mercury',
    'Mini',
    'Mitsubishi',
    'Nissan',
    'Opel',
    'Peugeot',
    'Pontiac',
    'Porsche',
    'Ram',
    'Renault',
    'Saab',
    'Saturn',
    'Scion',
    'Seat',
    'Skoda',
    'Smart',
    'SsangYong',
    'Subaru',
    'Suzuki',
    'Tesla',
    'Toyota',
    'Volkswagen',
    'Volvo',
    'Wiesmann',
    'Other'
  ];

  CarsColors: string[] = [
    'All',
    'White',
    'Black',
    'Gray',
    'Silver',
    'Blue',
    'Red',
    'Brown',
    'Green',
    'Orange',
    'Beige',
    'Purple',
    'Gold	',
    'Yellow',
    'Other'
  ];

  Locations: string[] = [
    'All',
    'Alexandria',
    'Aswan',
    'Asyut',
    'Beheira',
    'Beni Suef',
    'Cairo',
    'Dakahlia',
    'Damietta',
    'Faiyum',
    'Gharbia',
    'Giza',
    'Ismailia',
    'Kafr ElSheikh',
    'Luxor',
    'Matruh',
    'Minya',
    'Monufia',
    'New Valley',
    'North Sinai',
    'Port Said',
    'Qalyubia',
    'Qena',
    'Red Sea',
    'Sharqia',
    'Sohag',
    'South Sinai',
    'Suez'
  ];

  Cars: ICar[] = [
    {
      VIN: '1',
      Color: 'Black',
      LicenseNumber: '1234',
      Seats: 4,
      Rate: 4,
      RatedPeople: 7,
      Mailage: 50,
      CarType: 'Kia',
      LicenseEXDate: new Date(),
      Year: 2010,
      AvailableForRent: true,
      ModelName: 'Model',
      BrandName: 'Brand',
      LocationOfRent: 'Asyut',
      CostPerDay: 400,
      Image: 'car.jpg',
      RegistrationDate: new Date(),
      Insurance: true,
      GearBoxType: 'ManualGearbox',
      IsActivated: true,
      OwnerId: '12345678901234',
    },
    {
      VIN: '2',
      Color: 'Blue',
      LicenseNumber: '12345',
      Seats: 4,
      Rate: 3.5,
      RatedPeople: 7,
      Mailage: 50,
      CarType: 'Kia',
      LicenseEXDate: new Date(),
      Year: 2011,
      AvailableForRent: false,
      ModelName: 'Model',
      BrandName: 'Brand',
      LocationOfRent: 'Minya',
      CostPerDay: 600,
      Image: 'car2.png',
      RegistrationDate: new Date(),
      Insurance: true,
      GearBoxType: 'ManualGearbox',
      IsActivated: true,
      OwnerId: '12345678901234',
    },
    {
      VIN: '3',
      Color: 'Red',
      LicenseNumber: '123455',
      Seats: 4,
      Rate: 5,
      RatedPeople: 7,
      Mailage: 50,
      CarType: 'Kia',
      LicenseEXDate: new Date(),
      Year: 2020,
      AvailableForRent: true,
      ModelName: 'Model',
      BrandName: 'Brand',
      LocationOfRent: 'Minya',
      CostPerDay: 2100,
      Image: 'car3.jpg',
      RegistrationDate: new Date(),
      Insurance: true,
      GearBoxType: 'AutomaticGearbox',
      IsActivated: true,
      OwnerId: '12345678901234',
    },
    {
      VIN: '4',
      Color: 'Red',
      LicenseNumber: '123455',
      Seats: 4,
      Rate: 5,
      RatedPeople: 7,
      Mailage: 50,
      CarType: 'Kia',
      LicenseEXDate: new Date(),
      Year: 2020,
      AvailableForRent: true,
      ModelName: 'Model',
      BrandName: 'Brand1',
      LocationOfRent: 'Cairo',
      CostPerDay: 200,
      Image: 'car4.jpg',
      RegistrationDate: new Date(),
      Insurance: true,
      GearBoxType: 'AutomaticGearbox',
      IsActivated: true,
      OwnerId: '12345678901234',
    },

    {
      VIN: '4',
      Color: 'Red',
      LicenseNumber: '123455',
      Seats: 4,
      Rate: 5,
      RatedPeople: 7,
      Mailage: 50,
      CarType: 'Kia',
      LicenseEXDate: new Date(),
      Year: 2020,
      AvailableForRent: true,
      ModelName: 'Model',
      BrandName: 'Brand1',
      LocationOfRent: 'Cairo',
      CostPerDay: 200,
      Image: 'car4.jpg',
      RegistrationDate: new Date(),
      Insurance: true,
      GearBoxType: 'AutomaticGearbox',
      IsActivated: true,
      OwnerId: '12345678901234',
    },

    {
      VIN: '4',
      Color: 'Red',
      LicenseNumber: '123455',
      Seats: 4,
      Rate: 5,
      RatedPeople: 7,
      Mailage: 50,
      CarType: 'Kia',
      LicenseEXDate: new Date(),
      Year: 2020,
      AvailableForRent: true,
      ModelName: 'Model',
      BrandName: 'Brand1',
      LocationOfRent: 'Cairo',
      CostPerDay: 200,
      Image: 'car4.jpg',
      RegistrationDate: new Date(),
      Insurance: true,
      GearBoxType: 'AutomaticGearbox',
      IsActivated: true,
      OwnerId: '12345678901234',
    },

    {
      VIN: '4',
      Color: 'Red',
      LicenseNumber: '123455',
      Seats: 4,
      Rate: 5,
      RatedPeople: 7,
      Mailage: 50,
      CarType: 'Kia',
      LicenseEXDate: new Date(),
      Year: 2020,
      AvailableForRent: true,
      ModelName: 'Model',
      BrandName: 'Brand1',
      LocationOfRent: 'Cairo',
      CostPerDay: 200,
      Image: 'car4.jpg',
      RegistrationDate: new Date(),
      Insurance: true,
      GearBoxType: 'AutomaticGearbox',
      IsActivated: true,
      OwnerId: '12345678901234',
    },

    {
      VIN: '4',
      Color: 'Red',
      LicenseNumber: '123455',
      Seats: 4,
      Rate: 5,
      RatedPeople: 7,
      Mailage: 50,
      CarType: 'Kia',
      LicenseEXDate: new Date(),
      Year: 2020,
      AvailableForRent: true,
      ModelName: 'Model',
      BrandName: 'Brand1',
      LocationOfRent: 'Cairo',
      CostPerDay: 200,
      Image: 'car4.jpg',
      RegistrationDate: new Date(),
      Insurance: true,
      GearBoxType: 'AutomaticGearbox',
      IsActivated: true,
      OwnerId: '12345678901234',
    },

    {
      VIN: '4',
      Color: 'Red',
      LicenseNumber: '123455',
      Seats: 4,
      Rate: 5,
      RatedPeople: 7,
      Mailage: 50,
      CarType: 'Kia',
      LicenseEXDate: new Date(),
      Year: 2020,
      AvailableForRent: true,
      ModelName: 'Model',
      BrandName: 'Brand1',
      LocationOfRent: 'Cairo',
      CostPerDay: 200,
      Image: 'car4.jpg',
      RegistrationDate: new Date(),
      Insurance: true,
      GearBoxType: 'AutomaticGearbox',
      IsActivated: true,
      OwnerId: '12345678901234',
    }

    // {
    //   VIN: '4',
    //   Color: 'Red',
    //   LicenseNumber: '123455',
    //   Seats: 4,
    //   Rate: 5,
    //   RatedPeople: 7,
    //   Mailage: 50,
    //   CarType: 'Kia',
    //   LicenseEXDate: new Date(),
    //   Year: 2020,
    //   AvailableForRent: true,
    //   ModelName: 'Model',
    //   BrandName: 'Brand1',
    //   LocationOfRent: 'Cairo',
    //   CostPerDay: 200,
    //   Image: 'car4.jpg',
    //   RegistrationDate: new Date(),
    //   Insurance: true,
    //   GearBoxType: 'AutomaticGearbox',
    //   IsActivated: true,
    //   OwnerId: '12345678901234',
    // },

    // {
    //   VIN: '4',
    //   Color: 'Red',
    //   LicenseNumber: '123455',
    //   Seats: 4,
    //   Rate: 5,
    //   RatedPeople: 7,
    //   Mailage: 50,
    //   CarType: 'Kia',
    //   LicenseEXDate: new Date(),
    //   Year: 2020,
    //   AvailableForRent: true,
    //   ModelName: 'Model',
    //   BrandName: 'Brand1',
    //   LocationOfRent: 'Cairo',
    //   CostPerDay: 200,
    //   Image: 'car4.jpg',
    //   RegistrationDate: new Date(),
    //   Insurance: true,
    //   GearBoxType: 'AutomaticGearbox',
    //   IsActivated: true,
    //   OwnerId: '12345678901234',
    // },

    // {
    //   VIN: '4',
    //   Color: 'Red',
    //   LicenseNumber: '123455',
    //   Seats: 4,
    //   Rate: 5,
    //   RatedPeople: 7,
    //   Mailage: 50,
    //   CarType: 'Kia',
    //   LicenseEXDate: new Date(),
    //   Year: 2020,
    //   AvailableForRent: true,
    //   ModelName: 'Model',
    //   BrandName: 'Brand1',
    //   LocationOfRent: 'Cairo',
    //   CostPerDay: 200,
    //   Image: 'car4.jpg',
    //   RegistrationDate: new Date(),
    //   Insurance: true,
    //   GearBoxType: 'AutomaticGearbox',
    //   IsActivated: true,
    //   OwnerId: '12345678901234',
    // },

    // {
    //   VIN: '4',
    //   Color: 'Red',
    //   LicenseNumber: '123455',
    //   Seats: 4,
    //   Rate: 5,
    //   RatedPeople: 7,
    //   Mailage: 50,
    //   CarType: 'Kia',
    //   LicenseEXDate: new Date(),
    //   Year: 2020,
    //   AvailableForRent: true,
    //   ModelName: 'Model',
    //   BrandName: 'Brand1',
    //   LocationOfRent: 'Cairo',
    //   CostPerDay: 200,
    //   Image: 'car4.jpg',
    //   RegistrationDate: new Date(),
    //   Insurance: true,
    //   GearBoxType: 'AutomaticGearbox',
    //   IsActivated: true,
    //   OwnerId: '12345678901234',
    // },

    // {
    //   VIN: '4',
    //   Color: 'Red',
    //   LicenseNumber: '123455',
    //   Seats: 4,
    //   Rate: 5,
    //   RatedPeople: 7,
    //   Mailage: 50,
    //   CarType: 'Kia',
    //   LicenseEXDate: new Date(),
    //   Year: 2020,
    //   AvailableForRent: true,
    //   ModelName: 'Model',
    //   BrandName: 'Brand1',
    //   LocationOfRent: 'Cairo',
    //   CostPerDay: 200,
    //   Image: 'car4.jpg',
    //   RegistrationDate: new Date(),
    //   Insurance: true,
    //   GearBoxType: 'AutomaticGearbox',
    //   IsActivated: true,
    //   OwnerId: '12345678901234',
    // },

    // {
    //   VIN: '4',
    //   Color: 'Red',
    //   LicenseNumber: '123455',
    //   Seats: 4,
    //   Rate: 5,
    //   RatedPeople: 7,
    //   Mailage: 50,
    //   CarType: 'Kia',
    //   LicenseEXDate: new Date(),
    //   Year: 2020,
    //   AvailableForRent: true,
    //   ModelName: 'Model',
    //   BrandName: 'Brand1',
    //   LocationOfRent: 'Cairo',
    //   CostPerDay: 200,
    //   Image: 'car4.jpg',
    //   RegistrationDate: new Date(),
    //   Insurance: true,
    //   GearBoxType: 'AutomaticGearbox',
    //   IsActivated: true,
    //   OwnerId: '12345678901234',
    // },

    // {
    //   VIN: '4',
    //   Color: 'Red',
    //   LicenseNumber: '123455',
    //   Seats: 4,
    //   Rate: 5,
    //   RatedPeople: 7,
    //   Mailage: 50,
    //   CarType: 'Kia',
    //   LicenseEXDate: new Date(),
    //   Year: 2020,
    //   AvailableForRent: true,
    //   ModelName: 'Model',
    //   BrandName: 'Brand1',
    //   LocationOfRent: 'Cairo',
    //   CostPerDay: 200,
    //   Image: 'car4.jpg',
    //   RegistrationDate: new Date(),
    //   Insurance: true,
    //   GearBoxType: 'AutomaticGearbox',
    //   IsActivated: true,
    //   OwnerId: '12345678901234',
    // },

    // {
    //   VIN: '4',
    //   Color: 'Red',
    //   LicenseNumber: '123455',
    //   Seats: 4,
    //   Rate: 5,
    //   RatedPeople: 7,
    //   Mailage: 50,
    //   CarType: 'Kia',
    //   LicenseEXDate: new Date(),
    //   Year: 2020,
    //   AvailableForRent: true,
    //   ModelName: 'Model',
    //   BrandName: 'Brand1',
    //   LocationOfRent: 'Cairo',
    //   CostPerDay: 200,
    //   Image: 'car4.jpg',
    //   RegistrationDate: new Date(),
    //   Insurance: true,
    //   GearBoxType: 'AutomaticGearbox',
    //   IsActivated: true,
    //   OwnerId: '12345678901234',
    // },

    // {
    //   VIN: '4',
    //   Color: 'Red',
    //   LicenseNumber: '123455',
    //   Seats: 4,
    //   Rate: 5,
    //   RatedPeople: 7,
    //   Mailage: 50,
    //   CarType: 'Kia',
    //   LicenseEXDate: new Date(),
    //   Year: 2020,
    //   AvailableForRent: true,
    //   ModelName: 'Model',
    //   BrandName: 'Brand1',
    //   LocationOfRent: 'Cairo',
    //   CostPerDay: 200,
    //   Image: 'car4.jpg',
    //   RegistrationDate: new Date(),
    //   Insurance: true,
    //   GearBoxType: 'AutomaticGearbox',
    //   IsActivated: true,
    //   OwnerId: '12345678901234',
    // },

    // {
    //   VIN: '4',
    //   Color: 'Red',
    //   LicenseNumber: '123455',
    //   Seats: 4,
    //   Rate: 5,
    //   RatedPeople: 7,
    //   Mailage: 50,
    //   CarType: 'Kia',
    //   LicenseEXDate: new Date(),
    //   Year: 2020,
    //   AvailableForRent: true,
    //   ModelName: 'Model',
    //   BrandName: 'Brand1',
    //   LocationOfRent: 'Cairo',
    //   CostPerDay: 200,
    //   Image: 'car4.jpg',
    //   RegistrationDate: new Date(),
    //   Insurance: true,
    //   GearBoxType: 'AutomaticGearbox',
    //   IsActivated: true,
    //   OwnerId: '12345678901234',
    // },

    // {
    //   VIN: '4',
    //   Color: 'Red',
    //   LicenseNumber: '123455',
    //   Seats: 4,
    //   Rate: 5,
    //   RatedPeople: 7,
    //   Mailage: 50,
    //   CarType: 'Kia',
    //   LicenseEXDate: new Date(),
    //   Year: 2020,
    //   AvailableForRent: true,
    //   ModelName: 'Model',
    //   BrandName: 'Brand1',
    //   LocationOfRent: 'Cairo',
    //   CostPerDay: 200,
    //   Image: 'car4.jpg',
    //   RegistrationDate: new Date(),
    //   Insurance: true,
    //   GearBoxType: 'AutomaticGearbox',
    //   IsActivated: true,
    //   OwnerId: '12345678901234',
    // },

    // {
    //   VIN: '4',
    //   Color: 'Red',
    //   LicenseNumber: '123455',
    //   Seats: 4,
    //   Rate: 5,
    //   RatedPeople: 7,
    //   Mailage: 50,
    //   CarType: 'Kia',
    //   LicenseEXDate: new Date(),
    //   Year: 2020,
    //   AvailableForRent: true,
    //   ModelName: 'Model',
    //   BrandName: 'Brand1',
    //   LocationOfRent: 'Cairo',
    //   CostPerDay: 200,
    //   Image: 'car4.jpg',
    //   RegistrationDate: new Date(),
    //   Insurance: true,
    //   GearBoxType: 'AutomaticGearbox',
    //   IsActivated: true,
    //   OwnerId: '12345678901234',
    // },

    // {
    //   VIN: '4',
    //   Color: 'Red',
    //   LicenseNumber: '123455',
    //   Seats: 4,
    //   Rate: 5,
    //   RatedPeople: 7,
    //   Mailage: 50,
    //   CarType: 'Kia',
    //   LicenseEXDate: new Date(),
    //   Year: 2020,
    //   AvailableForRent: true,
    //   ModelName: 'Model',
    //   BrandName: 'Brand1',
    //   LocationOfRent: 'Cairo',
    //   CostPerDay: 200,
    //   Image: 'car4.jpg',
    //   RegistrationDate: new Date(),
    //   Insurance: true,
    //   GearBoxType: 'AutomaticGearbox',
    //   IsActivated: true,
    //   OwnerId: '12345678901234',
    // },

    // {
    //   VIN: '4',
    //   Color: 'Red',
    //   LicenseNumber: '123455',
    //   Seats: 4,
    //   Rate: 5,
    //   RatedPeople: 7,
    //   Mailage: 50,
    //   CarType: 'Kia',
    //   LicenseEXDate: new Date(),
    //   Year: 2020,
    //   AvailableForRent: true,
    //   ModelName: 'Model',
    //   BrandName: 'Brand1',
    //   LocationOfRent: 'Cairo',
    //   CostPerDay: 200,
    //   Image: 'car4.jpg',
    //   RegistrationDate: new Date(),
    //   Insurance: true,
    //   GearBoxType: 'AutomaticGearbox',
    //   IsActivated: true,
    //   OwnerId: '12345678901234',
    // },

    // {
    //   VIN: '4',
    //   Color: 'Red',
    //   LicenseNumber: '123455',
    //   Seats: 4,
    //   Rate: 5,
    //   RatedPeople: 7,
    //   Mailage: 50,
    //   CarType: 'Kia',
    //   LicenseEXDate: new Date(),
    //   Year: 2020,
    //   AvailableForRent: true,
    //   ModelName: 'Model',
    //   BrandName: 'Brand1',
    //   LocationOfRent: 'Cairo',
    //   CostPerDay: 200,
    //   Image: 'car4.jpg',
    //   RegistrationDate: new Date(),
    //   Insurance: true,
    //   GearBoxType: 'AutomaticGearbox',
    //   IsActivated: true,
    //   OwnerId: '12345678901234',
    // },

    // {
    //   VIN: '4',
    //   Color: 'Red',
    //   LicenseNumber: '123455',
    //   Seats: 4,
    //   Rate: 5,
    //   RatedPeople: 7,
    //   Mailage: 50,
    //   CarType: 'Kia',
    //   LicenseEXDate: new Date(),
    //   Year: 2020,
    //   AvailableForRent: true,
    //   ModelName: 'Model',
    //   BrandName: 'Brand1',
    //   LocationOfRent: 'Cairo',
    //   CostPerDay: 200,
    //   Image: 'car4.jpg',
    //   RegistrationDate: new Date(),
    //   Insurance: true,
    //   GearBoxType: 'AutomaticGearbox',
    //   IsActivated: true,
    //   OwnerId: '12345678901234',
    // },

    // {
    //   VIN: '4',
    //   Color: 'Red',
    //   LicenseNumber: '123455',
    //   Seats: 4,
    //   Rate: 5,
    //   RatedPeople: 7,
    //   Mailage: 50,
    //   CarType: 'Kia',
    //   LicenseEXDate: new Date(),
    //   Year: 2020,
    //   AvailableForRent: true,
    //   ModelName: 'Model',
    //   BrandName: 'Brand1',
    //   LocationOfRent: 'Cairo',
    //   CostPerDay: 200,
    //   Image: 'car4.jpg',
    //   RegistrationDate: new Date(),
    //   Insurance: true,
    //   GearBoxType: 'AutomaticGearbox',
    //   IsActivated: true,
    //   OwnerId: '12345678901234',
    // },

    // {
    //   VIN: '4',
    //   Color: 'Red',
    //   LicenseNumber: '123455',
    //   Seats: 4,
    //   Rate: 5,
    //   RatedPeople: 7,
    //   Mailage: 50,
    //   CarType: 'Kia',
    //   LicenseEXDate: new Date(),
    //   Year: 2020,
    //   AvailableForRent: true,
    //   ModelName: 'Model',
    //   BrandName: 'Brand1',
    //   LocationOfRent: 'Cairo',
    //   CostPerDay: 200,
    //   Image: 'car4.jpg',
    //   RegistrationDate: new Date(),
    //   Insurance: true,
    //   GearBoxType: 'AutomaticGearbox',
    //   IsActivated: true,
    //   OwnerId: '12345678901234',
    // },

    // {
    //   VIN: '4',
    //   Color: 'Red',
    //   LicenseNumber: '123455',
    //   Seats: 4,
    //   Rate: 5,
    //   RatedPeople: 7,
    //   Mailage: 50,
    //   CarType: 'Kia',
    //   LicenseEXDate: new Date(),
    //   Year: 2020,
    //   AvailableForRent: true,
    //   ModelName: 'Model',
    //   BrandName: 'Brand1',
    //   LocationOfRent: 'Cairo',
    //   CostPerDay: 200,
    //   Image: 'car4.jpg',
    //   RegistrationDate: new Date(),
    //   Insurance: true,
    //   GearBoxType: 'AutomaticGearbox',
    //   IsActivated: true,
    //   OwnerId: '12345678901234',
    // },

    // {
    //   VIN: '4',
    //   Color: 'Red',
    //   LicenseNumber: '123455',
    //   Seats: 4,
    //   Rate: 5,
    //   RatedPeople: 7,
    //   Mailage: 50,
    //   CarType: 'Kia',
    //   LicenseEXDate: new Date(),
    //   Year: 2020,
    //   AvailableForRent: true,
    //   ModelName: 'Model',
    //   BrandName: 'Brand1',
    //   LocationOfRent: 'Cairo',
    //   CostPerDay: 200,
    //   Image: 'car4.jpg',
    //   RegistrationDate: new Date(),
    //   Insurance: true,
    //   GearBoxType: 'AutomaticGearbox',
    //   IsActivated: true,
    //   OwnerId: '12345678901234',
    // },

    // {
    //   VIN: '4',
    //   Color: 'Red',
    //   LicenseNumber: '123455',
    //   Seats: 4,
    //   Rate: 5,
    //   RatedPeople: 7,
    //   Mailage: 50,
    //   CarType: 'Kia',
    //   LicenseEXDate: new Date(),
    //   Year: 2020,
    //   AvailableForRent: true,
    //   ModelName: 'Model',
    //   BrandName: 'Brand1',
    //   LocationOfRent: 'Cairo',
    //   CostPerDay: 200,
    //   Image: 'car4.jpg',
    //   RegistrationDate: new Date(),
    //   Insurance: true,
    //   GearBoxType: 'AutomaticGearbox',
    //   IsActivated: true,
    //   OwnerId: '12345678901234',
    // },

    // {
    //   VIN: '4',
    //   Color: 'Red',
    //   LicenseNumber: '123455',
    //   Seats: 4,
    //   Rate: 5,
    //   RatedPeople: 7,
    //   Mailage: 50,
    //   CarType: 'Kia',
    //   LicenseEXDate: new Date(),
    //   Year: 2020,
    //   AvailableForRent: true,
    //   ModelName: 'Model',
    //   BrandName: 'Brand1',
    //   LocationOfRent: 'Cairo',
    //   CostPerDay: 200,
    //   Image: 'car4.jpg',
    //   RegistrationDate: new Date(),
    //   Insurance: true,
    //   GearBoxType: 'AutomaticGearbox',
    //   IsActivated: true,
    //   OwnerId: '12345678901234',
    // },

    // {
    //   VIN: '4',
    //   Color: 'Red',
    //   LicenseNumber: '123455',
    //   Seats: 4,
    //   Rate: 5,
    //   RatedPeople: 7,
    //   Mailage: 50,
    //   CarType: 'Kia',
    //   LicenseEXDate: new Date(),
    //   Year: 2020,
    //   AvailableForRent: true,
    //   ModelName: 'Model',
    //   BrandName: 'Brand1',
    //   LocationOfRent: 'Cairo',
    //   CostPerDay: 200,
    //   Image: 'car4.jpg',
    //   RegistrationDate: new Date(),
    //   Insurance: true,
    //   GearBoxType: 'AutomaticGearbox',
    //   IsActivated: true,
    //   OwnerId: '12345678901234',
    // },

    // {
    //   VIN: '4',
    //   Color: 'Red',
    //   LicenseNumber: '123455',
    //   Seats: 4,
    //   Rate: 5,
    //   RatedPeople: 7,
    //   Mailage: 50,
    //   CarType: 'Kia',
    //   LicenseEXDate: new Date(),
    //   Year: 2020,
    //   AvailableForRent: true,
    //   ModelName: 'Model',
    //   BrandName: 'Brand1',
    //   LocationOfRent: 'Cairo',
    //   CostPerDay: 200,
    //   Image: 'car4.jpg',
    //   RegistrationDate: new Date(),
    //   Insurance: true,
    //   GearBoxType: 'AutomaticGearbox',
    //   IsActivated: true,
    //   OwnerId: '12345678901234',
    // },

    // {
    //   VIN: '4',
    //   Color: 'Red',
    //   LicenseNumber: '123455',
    //   Seats: 4,
    //   Rate: 5,
    //   RatedPeople: 7,
    //   Mailage: 50,
    //   CarType: 'Kia',
    //   LicenseEXDate: new Date(),
    //   Year: 2020,
    //   AvailableForRent: true,
    //   ModelName: 'Model',
    //   BrandName: 'Brand1',
    //   LocationOfRent: 'Cairo',
    //   CostPerDay: 200,
    //   Image: 'car4.jpg',
    //   RegistrationDate: new Date(),
    //   Insurance: true,
    //   GearBoxType: 'AutomaticGearbox',
    //   IsActivated: true,
    //   OwnerId: '12345678901234',
    // },

    // {
    //   VIN: '4',
    //   Color: 'Red',
    //   LicenseNumber: '123455',
    //   Seats: 4,
    //   Rate: 5,
    //   RatedPeople: 7,
    //   Mailage: 50,
    //   CarType: 'Kia',
    //   LicenseEXDate: new Date(),
    //   Year: 2020,
    //   AvailableForRent: true,
    //   ModelName: 'Model',
    //   BrandName: 'Brand1',
    //   LocationOfRent: 'Cairo',
    //   CostPerDay: 200,
    //   Image: 'car4.jpg',
    //   RegistrationDate: new Date(),
    //   Insurance: true,
    //   GearBoxType: 'AutomaticGearbox',
    //   IsActivated: true,
    //   OwnerId: '12345678901234',
    // },

    // {
    //   VIN: '4',
    //   Color: 'Red',
    //   LicenseNumber: '123455',
    //   Seats: 4,
    //   Rate: 5,
    //   RatedPeople: 7,
    //   Mailage: 50,
    //   CarType: 'Kia',
    //   LicenseEXDate: new Date(),
    //   Year: 2020,
    //   AvailableForRent: true,
    //   ModelName: 'Model',
    //   BrandName: 'Brand1',
    //   LocationOfRent: 'Cairo',
    //   CostPerDay: 200,
    //   Image: 'car4.jpg',
    //   RegistrationDate: new Date(),
    //   Insurance: true,
    //   GearBoxType: 'AutomaticGearbox',
    //   IsActivated: true,
    //   OwnerId: '12345678901234',
    // },

    // {
    //   VIN: '4',
    //   Color: 'Red',
    //   LicenseNumber: '123455',
    //   Seats: 4,
    //   Rate: 5,
    //   RatedPeople: 7,
    //   Mailage: 50,
    //   CarType: 'Kia',
    //   LicenseEXDate: new Date(),
    //   Year: 2020,
    //   AvailableForRent: true,
    //   ModelName: 'Model',
    //   BrandName: 'Brand1',
    //   LocationOfRent: 'Cairo',
    //   CostPerDay: 200,
    //   Image: 'car4.jpg',
    //   RegistrationDate: new Date(),
    //   Insurance: true,
    //   GearBoxType: 'AutomaticGearbox',
    //   IsActivated: true,
    //   OwnerId: '12345678901234',
    // },

    // {
    //   VIN: '4',
    //   Color: 'Red',
    //   LicenseNumber: '123455',
    //   Seats: 4,
    //   Rate: 5,
    //   RatedPeople: 7,
    //   Mailage: 50,
    //   CarType: 'Kia',
    //   LicenseEXDate: new Date(),
    //   Year: 2020,
    //   AvailableForRent: true,
    //   ModelName: 'Model',
    //   BrandName: 'Brand1',
    //   LocationOfRent: 'Cairo',
    //   CostPerDay: 200,
    //   Image: 'car4.jpg',
    //   RegistrationDate: new Date(),
    //   Insurance: true,
    //   GearBoxType: 'AutomaticGearbox',
    //   IsActivated: true,
    //   OwnerId: '12345678901234',
    // },

    // {
    //   VIN: '4',
    //   Color: 'Red',
    //   LicenseNumber: '123455',
    //   Seats: 4,
    //   Rate: 5,
    //   RatedPeople: 7,
    //   Mailage: 50,
    //   CarType: 'Kia',
    //   LicenseEXDate: new Date(),
    //   Year: 2020,
    //   AvailableForRent: true,
    //   ModelName: 'Model',
    //   BrandName: 'Brand1',
    //   LocationOfRent: 'Cairo',
    //   CostPerDay: 200,
    //   Image: 'car4.jpg',
    //   RegistrationDate: new Date(),
    //   Insurance: true,
    //   GearBoxType: 'AutomaticGearbox',
    //   IsActivated: true,
    //   OwnerId: '12345678901234',
    // },

    // {
    //   VIN: '4',
    //   Color: 'Red',
    //   LicenseNumber: '123455',
    //   Seats: 4,
    //   Rate: 5,
    //   RatedPeople: 7,
    //   Mailage: 50,
    //   CarType: 'Kia',
    //   LicenseEXDate: new Date(),
    //   Year: 2020,
    //   AvailableForRent: true,
    //   ModelName: 'Model',
    //   BrandName: 'Brand1',
    //   LocationOfRent: 'Cairo',
    //   CostPerDay: 200,
    //   Image: 'car4.jpg',
    //   RegistrationDate: new Date(),
    //   Insurance: true,
    //   GearBoxType: 'AutomaticGearbox',
    //   IsActivated: true,
    //   OwnerId: '12345678901234',
    // },

    // {
    //   VIN: '4',
    //   Color: 'Red',
    //   LicenseNumber: '123455',
    //   Seats: 4,
    //   Rate: 5,
    //   RatedPeople: 7,
    //   Mailage: 50,
    //   CarType: 'Kia',
    //   LicenseEXDate: new Date(),
    //   Year: 2020,
    //   AvailableForRent: true,
    //   ModelName: 'Model',
    //   BrandName: 'Brand1',
    //   LocationOfRent: 'Cairo',
    //   CostPerDay: 200,
    //   Image: 'car4.jpg',
    //   RegistrationDate: new Date(),
    //   Insurance: true,
    //   GearBoxType: 'AutomaticGearbox',
    //   IsActivated: true,
    //   OwnerId: '12345678901234',
    // },

    // {
    //   VIN: '4',
    //   Color: 'Red',
    //   LicenseNumber: '123455',
    //   Seats: 4,
    //   Rate: 5,
    //   RatedPeople: 7,
    //   Mailage: 50,
    //   CarType: 'Kia',
    //   LicenseEXDate: new Date(),
    //   Year: 2020,
    //   AvailableForRent: true,
    //   ModelName: 'Model',
    //   BrandName: 'Brand1',
    //   LocationOfRent: 'Cairo',
    //   CostPerDay: 200,
    //   Image: 'car4.jpg',
    //   RegistrationDate: new Date(),
    //   Insurance: true,
    //   GearBoxType: 'AutomaticGearbox',
    //   IsActivated: true,
    //   OwnerId: '12345678901234',
    // },

    // {
    //   VIN: '4',
    //   Color: 'Red',
    //   LicenseNumber: '123455',
    //   Seats: 4,
    //   Rate: 5,
    //   RatedPeople: 7,
    //   Mailage: 50,
    //   CarType: 'Kia',
    //   LicenseEXDate: new Date(),
    //   Year: 2020,
    //   AvailableForRent: true,
    //   ModelName: 'Model',
    //   BrandName: 'Brand1',
    //   LocationOfRent: 'Cairo',
    //   CostPerDay: 200,
    //   Image: 'car4.jpg',
    //   RegistrationDate: new Date(),
    //   Insurance: true,
    //   GearBoxType: 'AutomaticGearbox',
    //   IsActivated: true,
    //   OwnerId: '12345678901234',
    // },

    // {
    //   VIN: '4',
    //   Color: 'Red',
    //   LicenseNumber: '123455',
    //   Seats: 4,
    //   Rate: 5,
    //   RatedPeople: 7,
    //   Mailage: 50,
    //   CarType: 'Kia',
    //   LicenseEXDate: new Date(),
    //   Year: 2020,
    //   AvailableForRent: true,
    //   ModelName: 'Model',
    //   BrandName: 'Brand1',
    //   LocationOfRent: 'Cairo',
    //   CostPerDay: 200,
    //   Image: 'car4.jpg',
    //   RegistrationDate: new Date(),
    //   Insurance: true,
    //   GearBoxType: 'AutomaticGearbox',
    //   IsActivated: true,
    //   OwnerId: '12345678901234',
    // },

    // {
    //   VIN: '4',
    //   Color: 'Red',
    //   LicenseNumber: '123455',
    //   Seats: 4,
    //   Rate: 5,
    //   RatedPeople: 7,
    //   Mailage: 50,
    //   CarType: 'Kia',
    //   LicenseEXDate: new Date(),
    //   Year: 2020,
    //   AvailableForRent: true,
    //   ModelName: 'Model',
    //   BrandName: 'Brand1',
    //   LocationOfRent: 'Cairo',
    //   CostPerDay: 200,
    //   Image: 'car4.jpg',
    //   RegistrationDate: new Date(),
    //   Insurance: true,
    //   GearBoxType: 'AutomaticGearbox',
    //   IsActivated: true,
    //   OwnerId: '12345678901234',
    // },

    // {
    //   VIN: '4',
    //   Color: 'Red',
    //   LicenseNumber: '123455',
    //   Seats: 4,
    //   Rate: 5,
    //   RatedPeople: 7,
    //   Mailage: 50,
    //   CarType: 'Kia',
    //   LicenseEXDate: new Date(),
    //   Year: 2020,
    //   AvailableForRent: true,
    //   ModelName: 'Model',
    //   BrandName: 'Brand1',
    //   LocationOfRent: 'Cairo',
    //   CostPerDay: 200,
    //   Image: 'car4.jpg',
    //   RegistrationDate: new Date(),
    //   Insurance: true,
    //   GearBoxType: 'AutomaticGearbox',
    //   IsActivated: true,
    //   OwnerId: '12345678901234',
    // },

    // {
    //   VIN: '4',
    //   Color: 'Red',
    //   LicenseNumber: '123455',
    //   Seats: 4,
    //   Rate: 5,
    //   RatedPeople: 7,
    //   Mailage: 50,
    //   CarType: 'Kia',
    //   LicenseEXDate: new Date(),
    //   Year: 2020,
    //   AvailableForRent: true,
    //   ModelName: 'Model',
    //   BrandName: 'Brand1',
    //   LocationOfRent: 'Cairo',
    //   CostPerDay: 200,
    //   Image: 'car4.jpg',
    //   RegistrationDate: new Date(),
    //   Insurance: true,
    //   GearBoxType: 'AutomaticGearbox',
    //   IsActivated: true,
    //   OwnerId: '12345678901234',
    // },

    // {
    //   VIN: '4',
    //   Color: 'Red',
    //   LicenseNumber: '123455',
    //   Seats: 4,
    //   Rate: 5,
    //   RatedPeople: 7,
    //   Mailage: 50,
    //   CarType: 'Kia',
    //   LicenseEXDate: new Date(),
    //   Year: 2020,
    //   AvailableForRent: true,
    //   ModelName: 'Model',
    //   BrandName: 'Brand1',
    //   LocationOfRent: 'Cairo',
    //   CostPerDay: 200,
    //   Image: 'car4.jpg',
    //   RegistrationDate: new Date(),
    //   Insurance: true,
    //   GearBoxType: 'AutomaticGearbox',
    //   IsActivated: true,
    //   OwnerId: '12345678901234',
    // },

    // {
    //   VIN: '4',
    //   Color: 'Red',
    //   LicenseNumber: '123455',
    //   Seats: 4,
    //   Rate: 5,
    //   RatedPeople: 7,
    //   Mailage: 50,
    //   CarType: 'Kia',
    //   LicenseEXDate: new Date(),
    //   Year: 2020,
    //   AvailableForRent: true,
    //   ModelName: 'Model',
    //   BrandName: 'Brand1',
    //   LocationOfRent: 'Cairo',
    //   CostPerDay: 200,
    //   Image: 'car4.jpg',
    //   RegistrationDate: new Date(),
    //   Insurance: true,
    //   GearBoxType: 'AutomaticGearbox',
    //   IsActivated: true,
    //   OwnerId: '12345678901234',
    // },

    // {
    //   VIN: '4',
    //   Color: 'Red',
    //   LicenseNumber: '123455',
    //   Seats: 4,
    //   Rate: 5,
    //   RatedPeople: 7,
    //   Mailage: 50,
    //   CarType: 'Kia',
    //   LicenseEXDate: new Date(),
    //   Year: 2020,
    //   AvailableForRent: true,
    //   ModelName: 'Model',
    //   BrandName: 'Brand1',
    //   LocationOfRent: 'Cairo',
    //   CostPerDay: 200,
    //   Image: 'car4.jpg',
    //   RegistrationDate: new Date(),
    //   Insurance: true,
    //   GearBoxType: 'AutomaticGearbox',
    //   IsActivated: true,
    //   OwnerId: '12345678901234',
    // },

    // {
    //   VIN: '4',
    //   Color: 'Red',
    //   LicenseNumber: '123455',
    //   Seats: 4,
    //   Rate: 5,
    //   RatedPeople: 7,
    //   Mailage: 50,
    //   CarType: 'Kia',
    //   LicenseEXDate: new Date(),
    //   Year: 2020,
    //   AvailableForRent: true,
    //   ModelName: 'Model',
    //   BrandName: 'Brand1',
    //   LocationOfRent: 'Cairo',
    //   CostPerDay: 200,
    //   Image: 'car4.jpg',
    //   RegistrationDate: new Date(),
    //   Insurance: true,
    //   GearBoxType: 'AutomaticGearbox',
    //   IsActivated: true,
    //   OwnerId: '12345678901234',
    // },

    // {
    //   VIN: '4',
    //   Color: 'Red',
    //   LicenseNumber: '123455',
    //   Seats: 4,
    //   Rate: 5,
    //   RatedPeople: 7,
    //   Mailage: 50,
    //   CarType: 'Kia',
    //   LicenseEXDate: new Date(),
    //   Year: 2020,
    //   AvailableForRent: true,
    //   ModelName: 'Model',
    //   BrandName: 'Brand1',
    //   LocationOfRent: 'Cairo',
    //   CostPerDay: 200,
    //   Image: 'car4.jpg',
    //   RegistrationDate: new Date(),
    //   Insurance: true,
    //   GearBoxType: 'AutomaticGearbox',
    //   IsActivated: true,
    //   OwnerId: '12345678901234',
    // },

    // {
    //   VIN: '4',
    //   Color: 'Red',
    //   LicenseNumber: '123455',
    //   Seats: 4,
    //   Rate: 5,
    //   RatedPeople: 7,
    //   Mailage: 50,
    //   CarType: 'Kia',
    //   LicenseEXDate: new Date(),
    //   Year: 2020,
    //   AvailableForRent: true,
    //   ModelName: 'Model',
    //   BrandName: 'Brand1',
    //   LocationOfRent: 'Cairo',
    //   CostPerDay: 200,
    //   Image: 'car4.jpg',
    //   RegistrationDate: new Date(),
    //   Insurance: true,
    //   GearBoxType: 'AutomaticGearbox',
    //   IsActivated: true,
    //   OwnerId: '12345678901234',
    // },

    // {
    //   VIN: '4',
    //   Color: 'Red',
    //   LicenseNumber: '123455',
    //   Seats: 4,
    //   Rate: 5,
    //   RatedPeople: 7,
    //   Mailage: 50,
    //   CarType: 'Kia',
    //   LicenseEXDate: new Date(),
    //   Year: 2020,
    //   AvailableForRent: true,
    //   ModelName: 'Model',
    //   BrandName: 'Brand1',
    //   LocationOfRent: 'Cairo',
    //   CostPerDay: 200,
    //   Image: 'car4.jpg',
    //   RegistrationDate: new Date(),
    //   Insurance: true,
    //   GearBoxType: 'AutomaticGearbox',
    //   IsActivated: true,
    //   OwnerId: '12345678901234',
    // },

    // {
    //   VIN: '4',
    //   Color: 'Red',
    //   LicenseNumber: '123455',
    //   Seats: 4,
    //   Rate: 5,
    //   RatedPeople: 7,
    //   Mailage: 50,
    //   CarType: 'Kia',
    //   LicenseEXDate: new Date(),
    //   Year: 2020,
    //   AvailableForRent: true,
    //   ModelName: 'Model',
    //   BrandName: 'Brand1',
    //   LocationOfRent: 'Cairo',
    //   CostPerDay: 200,
    //   Image: 'car4.jpg',
    //   RegistrationDate: new Date(),
    //   Insurance: true,
    //   GearBoxType: 'AutomaticGearbox',
    //   IsActivated: true,
    //   OwnerId: '12345678901234',
    // },
  ];

  FilteredCars: ICar[] = this.Cars;


  //***************************************//
  //**** Filter By Available Cars Only ****//
  //***************************************//
  NumberOfAvailableCarsOnly: number = 0;
  private _filterByAvailableOnlyCheck: boolean = false;
  filterByAvailableOnly(check: boolean): ICar[] {
    this._filterByTopRatedOnlyCheck = false;
    this._filterByPricePerDaydOnlyValue = 0;
    this._SearchByBrand='All';
    this._MinModelYearValue=2010;
    this._MaxModelYearValue=2024;
    this._AutomaticGearboxCheck=false;
    this._ManualGearboxCheck=false;
    this._SearchByCarColorValue='';
    this._SearchByLocationValue='';

    if (check == true) {
      return this.Cars.filter((car: ICar) => car.AvailableForRent == true);
    } else {
      this.FilteredCars = this.Cars;
    }
    return this.FilteredCars;
  }

  public get filterByAvailableOnlyCheck(): boolean {
    return this._filterByAvailableOnlyCheck;
  }
  public set filterByAvailableOnlyCheck(value: boolean) {
    this._filterByAvailableOnlyCheck = !this._filterByAvailableOnlyCheck;
    this.FilteredCars = this.filterByAvailableOnly(
      this._filterByAvailableOnlyCheck
    );
  }
  //***************************************//
  //**** Filter By Top Rated Cars Only ****//
  //***************************************//

  private _filterByTopRatedOnlyCheck: boolean = false;
  filterByTopRatedOnly(check: boolean): ICar[] {
    this._filterByAvailableOnlyCheck = false;
    this._filterByPricePerDaydOnlyValue = 0;
    this._SearchByBrand='All';
    this._MinModelYearValue=2010;
    this._MaxModelYearValue=2024;
    this._AutomaticGearboxCheck=false;
    this._ManualGearboxCheck=false;
    this._SearchByCarColorValue='';
    this._SearchByLocationValue='';

    if (check == true) {
      return this.Cars.filter((car: ICar) => car.Rate == 5);
    } else {
      this.FilteredCars = this.Cars;
    }
    return this.FilteredCars;
  }

  public get filterByTopRatedOnlyCheck(): boolean {
    return this._filterByTopRatedOnlyCheck;
  }
  public set filterByTopRatedOnlyCheck(value: boolean) {
    this._filterByTopRatedOnlyCheck = !this._filterByTopRatedOnlyCheck;
    this.FilteredCars = this.filterByTopRatedOnly(
      this._filterByTopRatedOnlyCheck
    );
  }
  //***************************************//
  //****** Filter By Price Per Day ********//
  //***************************************//
  private _filterByPricePerDaydOnlyValue: number = 0;
  public get filterByPricePerDaydOnlyValue(): number {
    return this._filterByPricePerDaydOnlyValue;
  }
  public set filterByPricePerDaydOnlyValue(value: number) {
    this._filterByPricePerDaydOnlyValue = value;
    this.FilteredCars = this.filterByPricePerDaydOnly(
      this._filterByPricePerDaydOnlyValue
    );
  }
  filterByPricePerDaydOnly(value: number): ICar[] {
    this._filterByAvailableOnlyCheck = false;
    this._filterByTopRatedOnlyCheck = false;
    this._SearchByBrand='All';
    this._MinModelYearValue=2010;
    this._MaxModelYearValue=2024;
    this._AutomaticGearboxCheck=false;
    this._ManualGearboxCheck=false;
    this._SearchByCarColorValue='';
    this._SearchByLocationValue='';

    if (value == 0) {
      return this.Cars;
    }
    return this.Cars.filter(
      (car: ICar) => car.CostPerDay == this.filterByPricePerDaydOnlyValue
    );
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

  //***************************************//
  //******Filter By Top Brand Only*********//
  //***************************************//

  _SearchByBrand:string='';
  public get SearchByBrand():string{
    return this._SearchByBrand;
  }
  public set SearchByBrand(value:string){
    this._SearchByBrand = value;
    // alert(this._SearchByBrand);
    this.FilteredCars = this.filterByBrandNameOnly(
      this._SearchByBrand
    );
  }
  filterByBrandNameOnly(value:string):ICar[]
  {
    this._filterByAvailableOnlyCheck = false;
    this._filterByTopRatedOnlyCheck = false;
    this._filterByPricePerDaydOnlyValue = 0;
    this._MinModelYearValue=2010;
    this._MaxModelYearValue=2024;
    this._AutomaticGearboxCheck=false;
    this._ManualGearboxCheck=false;
    this._SearchByCarColorValue='';
    this._SearchByLocationValue='';

    if (value == 'All' || value=='Other') {
      return this.Cars;
    }
    return this.Cars.filter(
      (car: ICar) => car.BrandName == value
    );
  }

  //***************************************//
  //******Filter By Model Year Only *******//
  //***************************************//
  private _MinModelYearValue:number=2010;
  private _MaxModelYearValue:number=2024;

  public get MinModelYearValue(){
    return this._MinModelYearValue;
  }
  public set MinModelYearValue(value:number){
    this._MinModelYearValue = value;
    this.FilteredCars = this.filterByYearModel(
      value, this._MaxModelYearValue
    );
  }

  public get MaxModelYearValue(){
    return  this._MaxModelYearValue;
  }
  public set MaxModelYearValue(value:number){
    this._MaxModelYearValue = value;
    this.FilteredCars = this.filterByYearModel(
      this._MaxModelYearValue, value
    );
  }

  filterByYearModel(min:number, max:number):ICar[]{
    this._filterByAvailableOnlyCheck = false;
    this._filterByTopRatedOnlyCheck = false;
    this._filterByPricePerDaydOnlyValue = 0;
    this._SearchByBrand='';
    this._AutomaticGearboxCheck=false;
    this._ManualGearboxCheck=false;
    this._SearchByCarColorValue='';
    this._SearchByLocationValue='';

    return this.Cars.filter(
      (car: ICar) => car.Year <= this._MaxModelYearValue && car.Year >= this._MinModelYearValue
    );
  }

  //***************************************//
  //***Filter By Auto GearBox Type Only ***//
  //***************************************//
  private _AutomaticGearboxCheck:boolean=false;
  public get AutomaticGearbox(){
    return this._AutomaticGearboxCheck;
  }
  public set AutomaticGearbox(value:boolean){
    this._AutomaticGearboxCheck = value;
    this.FilteredCars = this.filterByAutoGearBox(value);
  }

  filterByAutoGearBox(value:boolean):ICar[]{
    this._filterByAvailableOnlyCheck = false;
    this._filterByTopRatedOnlyCheck = false;
    this._filterByPricePerDaydOnlyValue = 0;
    this._SearchByBrand='';
    this._MinModelYearValue=2010;
    this._MaxModelYearValue=2024;
    this._ManualGearboxCheck=false;
    this._SearchByCarColorValue='';
    this._SearchByLocationValue='';

    if(value == true)
    return this.Cars.filter(
      (car: ICar) => car.GearBoxType == "AutomaticGearbox"
    );
    else{
      return this.Cars
    }
  }

  //***************************************//
  //**Filter By Manual GearBox Type Only **//
  //***************************************//

  private _ManualGearboxCheck:boolean=false;
  public get ManualGearbox(){
    return this._ManualGearboxCheck;
  }
  public set ManualGearbox(value:boolean){
    this._ManualGearboxCheck = value;
    this.FilteredCars = this.filterByManualGearBox(value);
  }

  filterByManualGearBox(value:boolean):ICar[]{
    this._filterByAvailableOnlyCheck = false;
    this._filterByTopRatedOnlyCheck = false;
    this._filterByPricePerDaydOnlyValue = 0;
    this._SearchByBrand='';
    this._MinModelYearValue=2010;
    this._MaxModelYearValue=2024;
    this._AutomaticGearboxCheck=false;
    this._SearchByCarColorValue='';
    this._SearchByLocationValue='';

    if(value == true)
    return this.Cars.filter(
      (car: ICar) => car.GearBoxType == "ManualGearbox"
    );
    else{
      return this.Cars
    }
  }
  //***************************************//
  //****** Filter By Car Color Only *******//
  //***************************************//
  private _SearchByCarColorValue='';
  public get SearchByCarColorValue(){
    return this._SearchByCarColorValue;
  }
  public set SearchByCarColorValue(value:string){
    this._SearchByCarColorValue = value;
    this.FilteredCars = this.SearchByCarColor(value);
  }
  SearchByCarColor(value:string):ICar[]{
    this._filterByAvailableOnlyCheck = false;
    this._filterByTopRatedOnlyCheck = false;
    this._filterByPricePerDaydOnlyValue = 0;
    this._SearchByBrand='';
    this._MinModelYearValue=2010;
    this._MaxModelYearValue=2024;
    this._AutomaticGearboxCheck=false;
    this._ManualGearboxCheck=false;
    this._SearchByLocationValue='';

    if(value == 'All' || value=='Other'){
      return this.Cars
    }
    else{
      return this.Cars.filter(
      (car: ICar) => car.Color == value);
    }
  }



  private _SearchByLocationValue='';
  public get SearchByLocationValue(){
    return this._SearchByLocationValue;
  }
  public set SearchByLocationValue(value:string){
    this._SearchByLocationValue = value;
    this.FilteredCars = this.SearchByLocation(value);
  }

  SearchByLocation(value:string):ICar[]{
    this._filterByAvailableOnlyCheck = false;
    this._filterByTopRatedOnlyCheck = false;
    this._filterByPricePerDaydOnlyValue = 0;
    this._SearchByBrand='';
    this._MinModelYearValue=2010;
    this._MaxModelYearValue=2024;
    this._AutomaticGearboxCheck=false;
    this._ManualGearboxCheck=false;
    this._SearchByCarColorValue='';

    if(value == 'All'){
      return this.Cars
    }
    else{
      return this.Cars.filter(
      (car: ICar) => car.LocationOfRent == value);
    }
  }



  public pageSlice = this.FilteredCars.slice(0,12);
  OnPageChanges(event: PageEvent){
    const startIndex = event.pageIndex * event.pageSize;
    let endIndex = startIndex + event.pageSize;
    if(endIndex> this.FilteredCars.length){
      endIndex = this.FilteredCars.length;
    }
    this.pageSlice = this.FilteredCars.slice(startIndex,endIndex)
  }
}
