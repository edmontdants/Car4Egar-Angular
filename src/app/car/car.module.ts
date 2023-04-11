import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideBarComponent } from './side-bar/side-bar.component';
import { NavCarComponent } from './nav-car/nav-car.component';
import { CarCardsComponent } from './car-cards/car-cards.component';
import { PagingComponent } from './paging/paging.component';
import { CarProfileComponent } from './car-profile/car-profile.component';
import { PopCarCardComponent } from './pop-car-card/pop-car-card.component';




@NgModule({
  declarations: [
    SideBarComponent,
    NavCarComponent,
    CarCardsComponent,
    PagingComponent,
    CarProfileComponent,
    PopCarCardComponent,
  ],
  imports: [
    CommonModule
  ]
})
export class CarModule { }
