import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-my-account',
  templateUrl: './my-account.component.html',
  styleUrls: ['./my-account.component.scss'],
})
export class MyAccountComponent {
  hide1 = true;
  hide2 = true;
  hide3 = true;
  hide4 = true;

  @ViewChild('fileInput') fileInput!: ElementRef;
  fileAttr = 'Driver Licence';
  fileAttr2 = 'Identity Doc';
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
