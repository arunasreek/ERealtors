import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GenerateEpinComponent } from './generate-epin.component';

describe('GenerateEpinComponent', () => {
  let component: GenerateEpinComponent;
  let fixture: ComponentFixture<GenerateEpinComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GenerateEpinComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GenerateEpinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
