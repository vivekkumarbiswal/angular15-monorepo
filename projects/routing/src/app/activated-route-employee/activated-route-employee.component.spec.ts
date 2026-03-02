import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivatedRouteEmployeeComponent } from './activated-route-employee.component';

describe('ActivatedRouteEmployeeComponent', () => {
  let component: ActivatedRouteEmployeeComponent;
  let fixture: ComponentFixture<ActivatedRouteEmployeeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActivatedRouteEmployeeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActivatedRouteEmployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
