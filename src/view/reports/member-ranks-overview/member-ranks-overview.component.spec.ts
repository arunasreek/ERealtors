import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MemberRanksOverviewComponent } from './member-ranks-overview.component';

describe('MemberRanksOverviewComponent', () => {
  let component: MemberRanksOverviewComponent;
  let fixture: ComponentFixture<MemberRanksOverviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MemberRanksOverviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MemberRanksOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
