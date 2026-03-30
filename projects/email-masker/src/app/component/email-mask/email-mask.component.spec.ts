import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmailMaskComponent } from './email-mask.component';

describe('EmailMaskComponent', () => {
  let component: EmailMaskComponent;
  let fixture: ComponentFixture<EmailMaskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmailMaskComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmailMaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
