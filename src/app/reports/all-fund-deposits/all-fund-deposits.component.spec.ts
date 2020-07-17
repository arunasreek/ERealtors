import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllFundDepositsComponent } from './all-fund-deposits.component';

describe('AllFundDepositsComponent', () => {
  let component: AllFundDepositsComponent;
  let fixture: ComponentFixture<AllFundDepositsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllFundDepositsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllFundDepositsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
