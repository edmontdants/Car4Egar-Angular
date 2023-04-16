import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PopLoginComponent } from 'src/app/Components/pop-login/pop-login.component';
import { PopRegisterComponent } from 'src/app/Components/pop-register/pop-register.component';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent {

  constructor(public dialog: MatDialog) {}

  openRegistrationDialog(): void {
    const dialogRef = this.dialog.open(PopRegisterComponent, {
      width: '500px'
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        console.log(result); // This is where you would handle the registration data
      }
    });
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


}
