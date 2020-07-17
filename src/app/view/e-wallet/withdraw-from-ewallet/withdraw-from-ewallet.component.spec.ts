import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WithdrawFromEwalletComponent } from './withdraw-from-ewallet.component';

describe('WithdrawFromEwalletComponent', () => {
  let component: WithdrawFromEwalletComponent;
  let fixture: ComponentFixture<WithdrawFromEwalletComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WithdrawFromEwalletComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WithdrawFromEwalletComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
