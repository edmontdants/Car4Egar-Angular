import { HttpErrorResponse } from '@angular/common/http';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ISystemUser } from 'src/app/Models/isystem-user';
import { RegistrationService } from 'src/app/Services/registration.service';

@Component({
  selector: 'app-my-account',
  templateUrl: './my-account.component.html',
  styleUrls: ['./my-account.component.scss'],
})
export class MyAccountComponent implements OnInit  {
  hide1 = true;
  hide2 = true;
  hide3 = true;
  hide4 = true;
  @ViewChild('fileInput') fileInput!: ElementRef;
  fileAttr = 'Driver Licence';
  fileAttr2 = 'Identity Doc';
  UsarLogine?:ISystemUser;
  userLoginNID!:string;

  constructor(
    private userRegister: RegistrationService,
    private _snackBar: MatSnackBar
  ){}



  ngOnInit(): void {

// this.userLoginNID = sessionStorage.getItem('userNID')?.toString()

// const observer = {
//   next: (userlogin: ISystemUser) => {

//   },
//   error: (error: HttpErrorResponse) => {
//     if (error.error == 'Not Register User') {
//       this._snackBar.open(`${error.error}`, 'Dismiss', {
//         duration: 3000,
//         panelClass: ['my-snackbar'],
//       });
//     } else {
//       this._snackBar.open('Cant Connect To The Server', 'Dismiss', {
//         duration: 3000,
//         panelClass: ['my-snackbar'],
//       });
//     }
//   },
// };


// this.userRegister.getuserByNID((sessionStorage.getItem('userNID'))?).subscribe(observer)




  }
;
  uploadFileEvt(imgFile: any) {
    if (imgFile.target.files && imgFile.target.files[0]) {
      this.fileAttr = '';
      Array.from(imgFile.target.files).forEach((file: any) => {
        this.fileAttr += file.name + ' - ';
      });
      // HTML5 FileReader API
      let reader = new FileReader();
      reader.onload = (e: any) => {
        let image = new Image();
        image.src = e.target.result;
        image.onload = (rs) => {
          let imgBase64Path = e.target.result;
        };
      };
      reader.readAsDataURL(imgFile.target.files[0]);
      // Reset if duplicate image uploaded again
      this.fileInput.nativeElement.value = '';
    } else {
      this.fileAttr = 'Driver Licence';
    }
  }
  @ViewChild('fileInput2') fileInput2!: ElementRef;

  uploadFileEvt2(imgFile: any) {
    if (imgFile.target.files && imgFile.target.files[0]) {
      this.fileAttr2 = '';
      Array.from(imgFile.target.files).forEach((file: any) => {
        this.fileAttr2 += file.name + ' - ';
      });
      // HTML5 FileReader API
      let reader = new FileReader();
      reader.onload = (e: any) => {
        let image = new Image();
        image.src = e.target.result;
        image.onload = (rs) => {
          let imgBase64Path = e.target.result;
        };
      };
      reader.readAsDataURL(imgFile.target.files[0]);
      // Reset if duplicate image uploaded again
      this.fileInput2.nativeElement.value = '';
    } else {
      this.fileAttr2 = 'Identity Doc';
    }
  }
}
