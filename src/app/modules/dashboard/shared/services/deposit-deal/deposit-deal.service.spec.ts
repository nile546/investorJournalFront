import { TestBed } from '@angular/core/testing';

import { DepositDealService } from './deposit-deal.service';

describe('DepositDealService', () => {
  let service: DepositDealService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DepositDealService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
