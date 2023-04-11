import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavCarComponent } from './nav-car.component';

describe('NavCarComponent', () => {
  let component: NavCarComponent;
  let fixture: ComponentFixture<NavCarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavCarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavCarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
