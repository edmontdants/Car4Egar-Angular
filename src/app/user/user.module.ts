import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavUserComponent } from './nav-user/nav-user.component';
import { MyAccountComponent } from './my-account/my-account.component';
import { MyCarsComponent } from './my-cars/my-cars.component';
import { MyRequestsComponent } from './my-requests/my-requests.component';
import { MyBorrowingsComponent } from './my-borrowings/my-borrowings.component';
import { MyPaymentsComponent } from './my-payments/my-payments.component';
import { CarRegisterComponent } from './car-register/car-register.component';
import { UserDashBoardComponent } from './user-dash-board/user-dash-board.component';



@NgModule({
  declarations: [
    NavUserComponent,
    MyAccountComponent,
    MyCarsComponent,
    MyRequestsComponent,
    MyBorrowingsComponent,
    MyPaymentsComponent,
    CarRegisterComponent,
    UserDashBoardComponent,
  ],
  imports: [
    CommonModule
  ]
})
export class UserModule { }
