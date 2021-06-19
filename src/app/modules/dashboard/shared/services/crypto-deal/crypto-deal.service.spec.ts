import { TestBed } from '@angular/core/testing';

import { CryptoDealService } from './crypto-deal.service';

describe('CryptoDealService', () => {
  let service: CryptoDealService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CryptoDealService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
