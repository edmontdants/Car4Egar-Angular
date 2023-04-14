import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideBarComponent } from './side-bar/side-bar.component';
import { NavCarComponent } from './nav-car/nav-car.component';
import { CarCardsComponent } from './car-cards/car-cards.component';
import { PagingComponent } from './paging/paging.component';
import { CarProfileComponent } from './car-profile/car-profile.component';
import { PopCarCardComponent } from './pop-car-card/pop-car-card.component';
import { StarComponent } from './star/star.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import {MatBadgeModule} from '@angular/material/badge';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatNativeDateModule, MatRippleModule } from '@angular/material/core';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatSliderModule} from '@angular/material/slider';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatPaginatorModule} from '@angular/material/paginator';

@NgModule({
  declarations: [
    SideBarComponent,
    NavCarComponent,
    CarCardsComponent,
    PagingComponent,
    CarProfileComponent,
    PopCarCardComponent,
    StarComponent

  ],
  imports: [
    CommonModule,
    MatSlideToggleModule,
    MatBadgeModule,
    MatFormFieldModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    BrowserAnimationsModule,
    MatCheckboxModule,
    MatSliderModule,
    MatExpansionModule,
    MatPaginatorModule

  ],
  exports:[
    SideBarComponent,
    NavCarComponent,
    CarCardsComponent,
    PagingComponent,
    CarProfileComponent,
    PopCarCardComponent,
    StarComponent]
})

export class CarModule {

 }
