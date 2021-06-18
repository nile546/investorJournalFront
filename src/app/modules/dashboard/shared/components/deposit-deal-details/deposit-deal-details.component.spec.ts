import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DepositDealDetailsComponent } from './deposit-deal-details.component';

describe('DepositDealDetailsComponent', () => {
  let component: DepositDealDetailsComponent;
  let fixture: ComponentFixture<DepositDealDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DepositDealDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DepositDealDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
