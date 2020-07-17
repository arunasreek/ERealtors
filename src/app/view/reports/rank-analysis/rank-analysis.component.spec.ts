import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RankAnalysisComponent } from './rank-analysis.component';

describe('RankAnalysisComponent', () => {
  let component: RankAnalysisComponent;
  let fixture: ComponentFixture<RankAnalysisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RankAnalysisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RankAnalysisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
