import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PopLoginComponent } from './Components/pop-login/pop-login.component';
import { PopRegisterComponent } from './Components/pop-register/pop-register.component';
import { UserModule } from './user/user.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CarModule } from './car/car.module';
@NgModule({
  declarations: [
    AppComponent,
    PopLoginComponent,
    PopRegisterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UserModule,
    BrowserAnimationsModule,
    CarModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
