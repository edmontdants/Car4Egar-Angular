import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { ISystemUser } from 'src/app/Models/isystem-user';
import { RegistrationService } from 'src/app/Services/registration.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pop-register',
  templateUrl: './pop-register.component.html',
  styleUrls: ['./pop-register.component.scss'],
})
export class PopRegisterComponent implements OnInit {
  datenow:string =this.getCurrentDateTime()
  newUser: ISystemUser = {
    nid: '',
    userName: '',
    email: '',
    password: '',
    role: '',
    isActivated: true,
    address: '',
    phoneNumber: '',
    gender: '',
    birthDate: '',
    photo: '',
    identityPhoto: '',
    driverLicenceNumber: '',
    driverLicencePhoto: '',
    driverLicenceEXDate: '',
    bank_AccountNumber: '',
    bank_NID: '',
    bank_Name: '',
    bank_Branch: '',
    card_EXDate: '',
    card_Number: '',
    card_CVC: '',
    card_HolderName: '',
    balance: 0,
    fine: 0,
    rate: 0,
    ratedPeople: 0,
  };

  constructor(
    public dialogRef: MatDialogRef<PopRegisterComponent>,
    private userRegister: RegistrationService,
    private router: Router
  ) {}
  ngOnInit(): void {
    //alert(`${this.datenow}`)
  }

  addnewuser() {
    const observer = {
      next: (user: ISystemUser) => {
        console.log('Registration is Done');
        this.dialogRef.close(); // not recommended
        // Use instead Toast (snackbar: https://material.angular.io/components/snack-bar/overview), BS Alert,...
        this.router.navigateByUrl('/UserDashBoard');
      },
      error: (err: Error) => {
        //alert(err.message);
      },
    };

    this.userRegister.RegistrationNewUser(this.newUser).subscribe(observer);
  }
  getCurrentDateTime(): string {
    let now: Date = new Date();
    let year: number = now.getFullYear();
    let month: number = now.getMonth() + 1; // month is zero-indexed, so add 1 to get the correct month
    let day: number = now.getDate();
    let hour: number = now.getHours();
    let minute: number = now.getMinutes();
    let second: number = now.getSeconds();
    let monthStr: string = month.toString().padStart(2, '0');
  let dayStr: string = day.toString().padStart(2, '0');
  let hourStr: string = hour.toString().padStart(2, '0');
  let minuteStr: string = minute.toString().padStart(2, '0');
  let secondStr: string = second.toString().padStart(2, '0');
  return `${year}-${monthStr}-${dayStr} ${hourStr}:${minuteStr}:${secondStr}`;

}

}
