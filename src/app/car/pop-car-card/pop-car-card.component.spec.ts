import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopCarCardComponent } from './pop-car-card.component';

describe('PopCarCardComponent', () => {
  let component: PopCarCardComponent;
  let fixture: ComponentFixture<PopCarCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PopCarCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PopCarCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
