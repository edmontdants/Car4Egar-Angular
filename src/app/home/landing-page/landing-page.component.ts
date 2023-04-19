import { Component,OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PopLoginComponent } from 'src/app/Components/pop-login/pop-login.component';
import { PopRegisterComponent } from 'src/app/Components/pop-register/pop-register.component';
import { LayoutModule } from '@angular/cdk/layout';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { Routes } from '@angular/router';
import { UserDashBoardComponent } from 'src/app/user/user-dash-board/user-dash-board.component';
import { CarCardsComponent } from 'src/app/car/car-cards/car-cards.component';
//import {render} from 'creditcardpayments/creditCardPayments';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent {


  constructor(public dialog: MatDialog, private breakpointObserver: BreakpointObserver) {}


  openRegistrationDialog(): void {
    const dialogRef = this.dialog.open(PopRegisterComponent, {
      width: '550px'
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        console.log(result); // This is where you would handle the registration data
      }
    });
  }
  openLoginDialog(): void {
    const dialogRef = this.dialog.open(PopLoginComponent, {
      width: '550px'
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        console.log(result); // This is where you would handle the login data
      }
    });
  }




  stripeAPIKey: any = 'pk_test_51MxpbiGrFuhrPlyrDhgxHm4JMskNCS9Xqqk2lg4niIEFiGoNndiScowyR83RrrTNNJ8E06faO52ybZAC3FemEIxk005hz8Ns0m';
  handler:any = null;
  ngOnInit() {

    this.loadStripe();
  }

  pay(amount: any) {

    var handler = (<any>window).StripeCheckout.configure({
      key: 'pk_test_51MxpbiGrFuhrPlyrDhgxHm4JMskNCS9Xqqk2lg4niIEFiGoNndiScowyR83RrrTNNJ8E06faO52ybZAC3FemEIxk005hz8Ns0m',
      locale: 'auto',
      token: function (token: any) {
        // You can access the token ID with `token.id`.
        // Get the token ID to your server-side code for use.
        console.log(token)
        alert('Payment Success !!');
      }
    });

    handler.open({
      name: 'Car 4 Egar Payment Card',
      description: 'all field are required',
      amount: amount
    });

  }

  loadStripe() {

    if(!window.document.getElementById('stripe-script')) {
      var s = window.document.createElement("script");
      s.id = "stripe-script";
      s.type = "text/javascript";
      s.src = "https://checkout.stripe.com/checkout.js";
      s.onload = () => {
        this.handler = (<any>window).StripeCheckout.configure({
          key: 'pk_test_51MxpbiGrFuhrPlyrDhgxHm4JMskNCS9Xqqk2lg4niIEFiGoNndiScowyR83RrrTNNJ8E06faO52ybZAC3FemEIxk005hz8Ns0m',
          locale: 'auto',
          token: function (token: any) {
            // You can access the token ID with `token.id`.
            // Get the token ID to your server-side code for use.
            console.log(token)
            alert('Payment Success!!');
          }
        });
      }

      window.document.body.appendChild(s);
    }
  }



    //   render({
  //     id:"#MyPayPal",
  //     currency:"USD",
  //     value:this.totalAmount,
  //     onApprove(details) {
  //       alert("Payment Success");
  //     },
  //   })
  // }
  // totalAmount:string='.1';

}
