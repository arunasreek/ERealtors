import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EpinHistoryComponent } from './epin-history.component';

describe('EpinHistoryComponent', () => {
  let component: EpinHistoryComponent;
  let fixture: ComponentFixture<EpinHistoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EpinHistoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EpinHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
