import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyWithdrawalRequestsComponent } from './my-withdrawal-requests.component';

describe('MyWithdrawalRequestsComponent', () => {
  let component: MyWithdrawalRequestsComponent;
  let fixture: ComponentFixture<MyWithdrawalRequestsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyWithdrawalRequestsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyWithdrawalRequestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
