import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SalesByUserComponent } from './sales-by-user.component';

describe('SalesByUserComponent', () => {
  let component: SalesByUserComponent;
  let fixture: ComponentFixture<SalesByUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SalesByUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SalesByUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
