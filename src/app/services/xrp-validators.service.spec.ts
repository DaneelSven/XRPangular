import { TestBed } from '@angular/core/testing';

import { XrpValidatorsService } from './xrp-validators.service';

describe('XrpValidatorsService', () => {
  let service: XrpValidatorsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(XrpValidatorsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
