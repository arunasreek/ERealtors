import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SalesEarningsComponent } from './sales-earnings.component';

describe('SalesEarningsComponent', () => {
  let component: SalesEarningsComponent;
  let fixture: ComponentFixture<SalesEarningsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SalesEarningsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SalesEarningsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
