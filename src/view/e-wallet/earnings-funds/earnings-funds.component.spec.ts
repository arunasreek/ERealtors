import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EarningsFundsComponent } from './earnings-funds.component';

describe('EarningsFundsComponent', () => {
  let component: EarningsFundsComponent;
  let fixture: ComponentFixture<EarningsFundsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EarningsFundsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EarningsFundsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
