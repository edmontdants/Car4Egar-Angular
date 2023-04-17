import { Component, ElementRef, OnChanges, OnInit } from '@angular/core';
import { MatDialogConfig, MatDialogRef } from '@angular/material/dialog';
import { ISystemUser } from 'src/app/Models/isystem-user';
import { RegistrationService } from 'src/app/Services/registration.service';
import { Router } from '@angular/router';
import { FormGroup, NgModel, ValidationErrors, ValidatorFn } from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-pop-register',
  templateUrl: './pop-register.component.html',
  styleUrls: ['./pop-register.component.scss'],
})
export class  PopRegisterComponent
{
  //datenow:string =this.getCurrentDateTime()
  hide1:boolean=true;
  hide2:boolean=true;
  confirmPassword?: string;
  durationInSeconds = 5;
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
    private router: Router,private _snackBar: MatSnackBar
  ) {

  }


  addnewuser() {
    const observer = {
      next: (user: ISystemUser) => {
        console.log('Registration is Done');
        this.dialogRef.close();
        // not recommended
        // Use instead Toast (snackbar: https://material.angular.io/components/snack-bar/overview), BS Alert,...
        this.router.navigateByUrl('/UserDashBoard');
      },
      error:  (error: HttpErrorResponse) => {
        this._snackBar.open(`${error.error}`, 'Dismiss', {
          duration: 3000,
          panelClass: ['my-snackbar'],
        });
      },
    };

    this.userRegister.RegistrationNewUser(this.newUser).subscribe(observer);
  }



}






