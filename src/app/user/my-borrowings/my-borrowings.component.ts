import { HttpErrorResponse } from '@angular/common/http';
import { AfterViewInit, Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { IRentRequest } from 'src/app/Models/IRentRequest';
import { UserServicesService } from '../Services/user-services.service';

@Component({
  selector: 'app-my-borrowings',
  templateUrl: './my-borrowings.component.html',
  styleUrls: ['./my-borrowings.component.scss']
})
export class MyBorrowingsComponent implements AfterViewInit {
  NID = String(sessionStorage.getItem('userNID'));
  aftervin:any;
  /**
   *
   */
  constructor(private service:UserServicesService,private _snackBar: MatSnackBar) {}
  ngAfterViewInit(): void {
    throw new Error('Method not implemented.');
  }
  OnwerRequests:IRentRequest[]=[];
  ConfirmedRequests:IRentRequest[]=[];
  choosenCarVin:string =''
  ngOnInit(): void {
    this.service.getAllRentalRequests()
    .subscribe({
      next : (Requests) => {
        this.OnwerRequests = Requests.filter(r => r.borrowerId==this.NID && r.requestAcceptance==false);
        this.ConfirmedRequests = Requests.filter(r => r.borrowerId==this.NID && r.requestAcceptance==true);
        console.log("Iam Here! in this Car Service");
      },
      error : (response)=> {console.log(response)}
    });

  }

  Acceptedreq(vin:any,acc :number){


    const observer = {
      next: () => {

      },
      error: (error: HttpErrorResponse) => {
        if (error.error == 'Request Not Exist') {
          this._snackBar.open(`${error.error}`, 'Dismiss', {
            duration: 3000,
            panelClass: ['my-snackbar'],
          });
        } else {
          this._snackBar.open('Done', 'Dismiss', {
            duration: 3000,
            panelClass: ['my-snackbar'],
          });
          this.ngOnInit()
        }
      },
    };

    this.service.SetRentRequestStatus(vin,acc).subscribe(observer)
  }

  deletereq(vin:any){


    const observer = {
      next: () => {

      },
      error: (error: HttpErrorResponse) => {
        if (error.error == 'Request Not Exist') {
          this._snackBar.open(`${error.error}`, 'Dismiss', {
            duration: 3000,
            panelClass: ['my-snackbar'],
          });
        } else {
          this._snackBar.open('Done', 'Dismiss', {
            duration: 3000,
            panelClass: ['my-snackbar'],
          });
          this.ngOnInit()
        }
      },
    };

    this.service.DeleteCarRequest(vin).subscribe(observer)
  }
  // pay(amount: any) {

  //   var handler = (<any>window).StripeCheckout.configure({
  //     key: 'pk_test_51MxpbiGrFuhrPlyrDhgxHm4JMskNCS9Xqqk2lg4niIEFiGoNndiScowyR83RrrTNNJ8E06faO52ybZAC3FemEIxk005hz8Ns0m',
  //     locale: 'auto',
  //     token: function (token: any) {
  //       // You can access the token ID with `token.id`.
  //       // Get the token ID to your server-side code for use.
  //       console.log(token)
  //       alert('Payment Success !!');
  //     }
  //   });

  //   handler.open({
  //     name: 'Car 4 Egar Payment Card',
  //     description: 'all field are required',
  //     amount: amount
  //   });

  // }

  // loadStripe() {

  //   if(!window.document.getElementById('stripe-script')) {
  //     var s = window.document.createElement("script");
  //     s.id = "stripe-script";
  //     s.type = "text/javascript";
  //     s.src = "https://checkout.stripe.com/checkout.js";
  //     s.onload = () => {
  //       this.handler = (<any>window).StripeCheckout.configure({
  //         key: 'pk_test_51MxpbiGrFuhrPlyrDhgxHm4JMskNCS9Xqqk2lg4niIEFiGoNndiScowyR83RrrTNNJ8E06faO52ybZAC3FemEIxk005hz8Ns0m',
  //         locale: 'auto',
  //         token: function (token: any) {
  //           // You can access the token ID with `token.id`.
  //           // Get the token ID to your server-side code for use.
  //           console.log(token)
  //           alert('Payment Success!!');
  //         }
  //       });
  //     }

  //     window.document.body.appendChild(s);
  //   }

}
