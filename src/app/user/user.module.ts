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
import {MatTabsModule} from '@angular/material/tabs';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';




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
    CommonModule,
    MatTabsModule,
    MatIconModule,
    MatButtonModule,
    MatFormFieldModule
  ]
})
export class UserModule { }
