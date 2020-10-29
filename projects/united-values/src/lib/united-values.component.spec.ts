import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UnitedValuesComponent } from './united-values.component';

describe('UnitedValuesComponent', () => {
  let component: UnitedValuesComponent;
  let fixture: ComponentFixture<UnitedValuesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnitedValuesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnitedValuesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
