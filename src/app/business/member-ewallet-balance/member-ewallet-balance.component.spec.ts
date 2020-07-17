import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MemberEwalletBalanceComponent } from './member-ewallet-balance.component';

describe('MemberEwalletBalanceComponent', () => {
  let component: MemberEwalletBalanceComponent;
  let fixture: ComponentFixture<MemberEwalletBalanceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MemberEwalletBalanceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MemberEwalletBalanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
