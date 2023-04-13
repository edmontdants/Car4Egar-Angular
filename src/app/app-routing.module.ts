import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserDashBoardComponent } from './user/user-dash-board/user-dash-board.component';
import { MyAccountComponent } from './user/my-account/my-account.component';
import { MyCarsComponent } from './user/my-cars/my-cars.component';
import { MyPaymentsComponent } from './user/my-payments/my-payments.component';
import { MyBorrowingsComponent } from './user/my-borrowings/my-borrowings.component';

const routes: Routes = [
  {path: 'UserDashBoard', component:UserDashBoardComponent}
//,children:[
//   {path: 'MyAccount', component:MyAccountComponent},
//   {path: 'MyCars', component:MyCarsComponent},
//   {path: 'MyRequests', component:MyPaymentsComponent},
//   {path: 'MyBorrowings', component:MyBorrowingsComponent},
//   {path: 'MyPayments', component:MyBorrowingsComponent},
//   ]}
 ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
