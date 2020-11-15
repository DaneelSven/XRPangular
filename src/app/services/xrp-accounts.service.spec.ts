import { TestBed } from '@angular/core/testing';

import { XrpAccountsService } from './xrp-accounts.service';

describe('XrpAccountsService', () => {
  let service: XrpAccountsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(XrpAccountsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
