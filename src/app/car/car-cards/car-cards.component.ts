import { Component } from '@angular/core';

@Component({
  selector: 'app-car-cards',
  templateUrl: './car-cards.component.html',
  styleUrls: ['./car-cards.component.scss']
})

export class CarCardsComponent {
  PricePerDaySearch(value: number): string {
    if (value >= 0) {
      return Math.round(value) + 'LE';
    }
    return `${value}`;
  }

  yearModelSearch(value: number): string {
    return `${value}`;
  }
  panelOpenState = false;
  states: string[] = [
    'Alabama',
    'Alaska',
    'Arizona',
    'Arkansas',
    'California',
    'Colorado',
    'Connecticut',
    'Delaware',
    'Florida',
    'Georgia',
    'Hawaii',
    'Idaho',
    'Illinois',
    'Indiana',
    'Iowa'
  ];

}
