import { TestBed } from '@angular/core/testing';

import { StockDealService } from './stock-deal.service';

describe('StockDealService', () => {
  let service: StockDealService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StockDealService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
