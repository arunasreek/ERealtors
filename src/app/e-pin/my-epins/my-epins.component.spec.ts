import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyEpinsComponent } from './my-epins.component';

describe('MyEpinsComponent', () => {
  let component: MyEpinsComponent;
  let fixture: ComponentFixture<MyEpinsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyEpinsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyEpinsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
