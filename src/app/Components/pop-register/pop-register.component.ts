import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-pop-register',
  templateUrl: './pop-register.component.html',
  styleUrls: ['./pop-register.component.scss']
})
export class PopRegisterComponent {
  constructor(
    public dialogRef: MatDialogRef<PopRegisterComponent>,
    //@Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  onSubmit(form: any): void {
    if (!form.valid) {
      return;
    }

    const registrationData = {
      username: form.value.username,
      email: form.value.email,
      password: form.value.password,
      nid: form.value.nid
    };

    this.dialogRef.close(registrationData);
  }

}


