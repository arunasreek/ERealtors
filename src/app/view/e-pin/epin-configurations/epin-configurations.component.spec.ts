import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EpinConfigurationsComponent } from './epin-configurations.component';

describe('EpinConfigurationsComponent', () => {
  let component: EpinConfigurationsComponent;
  let fixture: ComponentFixture<EpinConfigurationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EpinConfigurationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EpinConfigurationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
