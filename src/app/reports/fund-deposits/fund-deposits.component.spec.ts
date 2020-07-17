import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FundDepositsComponent } from './fund-deposits.component';

describe('FundDepositsComponent', () => {
  let component: FundDepositsComponent;
  let fixture: ComponentFixture<FundDepositsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FundDepositsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FundDepositsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
