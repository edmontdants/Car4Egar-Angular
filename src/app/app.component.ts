import { Component } from '@angular/core';
import { LandingPageComponent } from './home/landing-page/landing-page.component';
import { LayoutModule } from '@angular/cdk/layout';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { PopLoginComponent } from './Components/pop-login/pop-login.component';
import { MatDialog } from '@angular/material/dialog';
import { PopRegisterComponent } from './Components/pop-register/pop-register.component';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private breakpointObserver: BreakpointObserver, public dialog: MatDialog,){}
  title = 'Car4Egar';
  hidden = false;

  toggleBadgeVisibility() {
    this.hidden = !this.hidden;
  }


  isLoggedIn = false;

  onLoginClick() {
    // Handle the login process
    this.isLoggedIn = true;
  }

  onLogoutClick() {
    // Handle the logout process
    this.isLoggedIn = false;
  }

  openLoginDialog(): void {
    const dialogRef = this.dialog.open(PopLoginComponent, {
      width: '500px'
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        console.log(result); // This is where you would handle the login data
      }
    });
  }


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
}
