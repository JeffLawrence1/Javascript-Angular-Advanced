import { TestBed, inject } from '@angular/core/testing';

import { MarketInfoService } from './market-info.service';

describe('MarketInfoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MarketInfoService]
    });
  });

  it('should be created', inject([MarketInfoService], (service: MarketInfoService) => {
    expect(service).toBeTruthy();
  }));
});
