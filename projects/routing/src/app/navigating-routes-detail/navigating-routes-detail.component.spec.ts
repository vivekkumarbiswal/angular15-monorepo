import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavigatingRoutesDetailComponent } from './navigating-routes-detail.component';

describe('NavigatingRoutesDetailComponent', () => {
  let component: NavigatingRoutesDetailComponent;
  let fixture: ComponentFixture<NavigatingRoutesDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavigatingRoutesDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavigatingRoutesDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
