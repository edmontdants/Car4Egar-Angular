import { Component } from '@angular/core';
import { NgForm, Validators } from '@angular/forms';

@Component({
  selector: 'app-test',
  template: `
    <form #myForm="ngForm" (ngSubmit)="onSubmit(myForm)">
      <div ngModelGroup="passwords">
        <label>
          Password:
          <input type="password" name="password" [(ngModel)]="password" required>
        </label>
        <label>
          Confirm Password:
          <input type="password" name="confirmPassword" [(ngModel)]="confirmPassword" required>
          <div *ngIf="myForm.submitted && myForm.controls.password.valid && myForm.controls.confirmPassword.touched && myForm.controls.confirmPassword.errors?.passwordMismatch">Passwords do not match</div>
        </label>
      </div>
      <button type="submit">Submit</button>
    </form>
  `,
  styleUrls: ['./test.component.scss']
})
export class TestComponent {
password?: string;
confirmPassword?: string;

onSubmit(form: NgForm) {
  console.log(form.value);
}

ngOnInit() {
  this.addPasswordMatchValidator();
}

addPasswordMatchValidator() {
  const confirmPasswordControl = this.myForm.controls.confirmPassword;

  confirmPasswordControl.setValidators([Validators.required, this.passwordMatchValidator.bind(this)]);

  confirmPasswordControl.updateValueAndValidity();
}

passwordMatchValidator(control) {
  if (control.value !== this.myForm.controls.password.value) {
    return { passwordMismatch: true };
  }

  return null;
}
}
