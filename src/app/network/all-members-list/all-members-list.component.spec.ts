import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllMembersListComponent } from './all-members-list.component';

describe('AllMembersListComponent', () => {
  let component: AllMembersListComponent;
  let fixture: ComponentFixture<AllMembersListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllMembersListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllMembersListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
