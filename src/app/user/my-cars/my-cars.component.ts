import { Component } from '@angular/core';
import { UserServicesService } from '../Services/user-services.service';
import { ICar } from 'src/app/Models/ICar';


@Component({
  selector: 'app-my-cars',
  templateUrl: './my-cars.component.html',
  styleUrls: ['./my-cars.component.scss']
})
export class MyCarsComponent {
  NID = String(sessionStorage.getItem('userNID'));
  Cars:ICar[]=[];
  constructor(private service:UserServicesService) {}

  // ngOnInit(): void {
  //   this.service.getAllCars()
  //   .subscribe({
  //     next : (Requests) => {
  //       this.Cars = cars.filter(c => c.ownerId==this.NID);
  //       console.log("Iam Here! in this Car Service For Owner");
  //     },
  //     error : (response)=> {console.log(response)}
  //   });
  // }

}
