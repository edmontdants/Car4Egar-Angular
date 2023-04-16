import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-pop-login',
  templateUrl: './pop-login.component.html',
  styleUrls: ['./pop-login.component.scss']
})
export class PopLoginComponent {

  rememberMe = false;

  constructor(
    public dialogRef: MatDialogRef<PopLoginComponent>,
   // @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  onSubmit(form: any): void {
    if (!form.valid) {
      return;
    }

    const loginData = {
      email: form.value.email,
      password: form.value.password,
      rememberMe: this.rememberMe
    };

    this.dialogRef.close(loginData);
  }

}
