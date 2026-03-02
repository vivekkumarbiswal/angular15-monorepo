import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavigatingRoutesComponent } from './navigating-routes.component';

describe('NavigatingRoutesComponent', () => {
  let component: NavigatingRoutesComponent;
  let fixture: ComponentFixture<NavigatingRoutesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavigatingRoutesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavigatingRoutesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
