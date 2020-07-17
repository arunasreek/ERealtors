import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivePayoutsComponent } from './active-payouts.component';

describe('ActivePayoutsComponent', () => {
  let component: ActivePayoutsComponent;
  let fixture: ComponentFixture<ActivePayoutsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActivePayoutsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActivePayoutsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
