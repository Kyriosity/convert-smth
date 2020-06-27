import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UnitsWeigherComponent } from './units-weigher.component';

describe('UnitsWeigherComponent', () => {
  let component: UnitsWeigherComponent;
  let fixture: ComponentFixture<UnitsWeigherComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnitsWeigherComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnitsWeigherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
