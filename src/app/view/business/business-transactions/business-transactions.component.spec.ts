import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BusinessTransactionsComponent } from './business-transactions.component';

describe('BusinessTransactionsComponent', () => {
  let component: BusinessTransactionsComponent;
  let fixture: ComponentFixture<BusinessTransactionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BusinessTransactionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BusinessTransactionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
