import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllEpinsComponent } from './all-epins.component';

describe('AllEpinsComponent', () => {
  let component: AllEpinsComponent;
  let fixture: ComponentFixture<AllEpinsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllEpinsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllEpinsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
