import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DepositDealsTableComponent } from './deposit-deals-table.component';

describe('DepositDealsTableComponent', () => {
  let component: DepositDealsTableComponent;
  let fixture: ComponentFixture<DepositDealsTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DepositDealsTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DepositDealsTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
