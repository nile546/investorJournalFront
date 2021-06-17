import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StockDealDetailsComponent } from './stock-deal-details.component';

describe('StockDealDetailsComponent', () => {
  let component: StockDealDetailsComponent;
  let fixture: ComponentFixture<StockDealDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StockDealDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StockDealDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
