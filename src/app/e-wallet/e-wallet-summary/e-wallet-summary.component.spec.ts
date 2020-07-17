import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EWalletSummaryComponent } from './e-wallet-summary.component';

describe('EWalletSummaryComponent', () => {
  let component: EWalletSummaryComponent;
  let fixture: ComponentFixture<EWalletSummaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EWalletSummaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EWalletSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
