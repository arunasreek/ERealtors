import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommissionsExpensesComponent } from './commissions-expenses.component';

describe('CommissionsExpensesComponent', () => {
  let component: CommissionsExpensesComponent;
  let fixture: ComponentFixture<CommissionsExpensesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommissionsExpensesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommissionsExpensesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
