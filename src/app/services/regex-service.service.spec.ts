import { TestBed } from '@angular/core/testing';

import { RegexServiceService } from './regex-service.service';

describe('RegexServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RegexServiceService = TestBed.get(RegexServiceService);
    expect(service).toBeTruthy();
  });
});
