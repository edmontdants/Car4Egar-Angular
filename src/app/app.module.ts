import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PopLoginComponent } from './Components/pop-login/pop-login.component';
import { PopRegisterComponent } from './Components/pop-register/pop-register.component';
<<<<<<< HEAD
import { UserModule } from './user/user.module';

=======
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CarModule } from './car/car.module';
>>>>>>> 3f358e347ca28f809ee43613199a98fb29821e5f
@NgModule({
  declarations: [
    AppComponent,
    PopLoginComponent,
    PopRegisterComponent,
<<<<<<< HEAD
=======

>>>>>>> 3f358e347ca28f809ee43613199a98fb29821e5f
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
<<<<<<< HEAD
    UserModule
=======
    BrowserAnimationsModule,
    CarModule,
>>>>>>> 3f358e347ca28f809ee43613199a98fb29821e5f
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
