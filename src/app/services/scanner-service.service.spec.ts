import { TestBed } from '@angular/core/testing';

import { ScannerServiceService } from './scanner-service.service';

describe('ScannerServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ScannerServiceService = TestBed.get(ScannerServiceService);
    expect(service).toBeTruthy();
  });
});
