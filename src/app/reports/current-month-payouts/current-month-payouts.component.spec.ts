import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentMonthPayoutsComponent } from './current-month-payouts.component';

describe('CurrentMonthPayoutsComponent', () => {
  let component: CurrentMonthPayoutsComponent;
  let fixture: ComponentFixture<CurrentMonthPayoutsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CurrentMonthPayoutsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrentMonthPayoutsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
