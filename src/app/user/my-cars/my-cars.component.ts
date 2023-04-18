import { Component, OnInit } from '@angular/core';
import { CarModelDialogComponent } from '../car-model-dialog/car-model-dialog.component';
import { MatDialog } from '@angular/material/dialog';


@Component({
  selector: 'app-my-cars',
  templateUrl: './my-cars.component.html',
  styleUrls: ['./my-cars.component.scss']
})
export class MyCarsComponent implements OnInit {
  constructor(private dialog: MatDialog){}
  openDialog() {
    this.dialog.open(CarModelDialogComponent)
  }


  ngOnInit(): void {

  }

}
