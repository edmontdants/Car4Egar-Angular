import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ICar } from 'src/app/Models/ICar';
import { CarService } from 'src/app/car/Services/car.service';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.scss']
})
export class AdminDashboardComponent {
  /**
   *
   */
  constructor(private carService: CarService, public dialog: MatDialog) {}
  AllCars:ICar[]=[];
  NumberOfAvailableCarsOnly:number=0;
  ngOnInit(): void {
    this.carService.getAllCars()
    .subscribe({
      next : (cars) => {
        this.AllCars = cars;
        this.NumberOfAvailableCarsOnly = this.AllCars.filter(
          (car: ICar) => car.available == true
        ).length;
        console.log("Iam Here! in this Car Service Of Admin");
      },
      error : (response)=> {console.log(response)}
    });
  }
}
