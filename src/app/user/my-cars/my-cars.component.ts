import { Component } from '@angular/core';
import { UserServicesService } from '../Services/user-services.service';
import { ICar } from 'src/app/Models/ICar';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { CarRegisterComponent } from '../car-register/car-register.component';


@Component({
  selector: 'app-my-cars',
  templateUrl: './my-cars.component.html',
  styleUrls: ['./my-cars.component.scss']
})
export class MyCarsComponent {
  constructor(private service:UserServicesService,private router: Router,public dialog: MatDialog) {}
  NID = String(sessionStorage.getItem('userNID'));



  years = Array.from({length: 15}, (_, i) => 2010 + i);
  car:ICar={
    vin:'',
color:'',
rate:0,
ratedPeople:0,
mailage:'0',
year:0,
available:true,
modelName:'',
locationOfRent:'',
costPerDay:0,
image:'',
insurance:true,
gearBoxType:'',
ownerId:'',
ownerPic:'',
ownerName:'',
ownerPhone:''
  }
  SubmitNewCar(){
    this.service.RegisterCar(this.car).subscribe({
      next: () => this.router.navigate(['/UserDashBoard']),
      error: (err) => console.log(err)
    });
  }
}
