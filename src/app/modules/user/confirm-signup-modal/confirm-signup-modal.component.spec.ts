import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmSignupModalComponent } from './confirm-signup-modal.component';

describe('ConfirmSignupModalComponent', () => {
  let component: ConfirmSignupModalComponent;
  let fixture: ComponentFixture<ConfirmSignupModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfirmSignupModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfirmSignupModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
