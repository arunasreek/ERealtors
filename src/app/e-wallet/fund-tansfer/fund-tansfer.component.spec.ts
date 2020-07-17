import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FundTansferComponent } from './fund-tansfer.component';

describe('FundTansferComponent', () => {
  let component: FundTansferComponent;
  let fixture: ComponentFixture<FundTansferComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FundTansferComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FundTansferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
