import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WithdrawalsOutwardFundsComponent } from './withdrawals-outward-funds.component';

describe('WithdrawalsOutwardFundsComponent', () => {
  let component: WithdrawalsOutwardFundsComponent;
  let fixture: ComponentFixture<WithdrawalsOutwardFundsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WithdrawalsOutwardFundsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WithdrawalsOutwardFundsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
