import { Component } from '@angular/core';
import { UserServicesService } from '../Services/user-services.service';
import { IRentRequest } from 'src/app/Models/IRentRequest';

@Component({
  selector: 'app-my-requests',
  templateUrl: './my-requests.component.html',
  styleUrls: ['./my-requests.component.scss']
})
export class MyRequestsComponent {
  NID = String(sessionStorage.getItem('userNID'));
  /**
   *
   */
  constructor(private service:UserServicesService) {}
  OnwerRequests:IRentRequest[]=[];
  ConfirmedRequests:IRentRequest[]=[];
  ngOnInit(): void {
    this.service.getAllRentalRequests()
    .subscribe({
      next : (Requests) => {
        this.OnwerRequests = Requests.filter(r => r.ownerId==this.NID && r.requestAcceptance==false);
        this.ConfirmedRequests = Requests.filter(r => r.ownerId==this.NID && r.requestAcceptance==true);
        console.log("Iam Here! in this Car Service");
      },
      error : (response)=> {console.log(response)}
    });
  }

}
