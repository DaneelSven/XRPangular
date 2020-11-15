import { TestBed } from '@angular/core/testing';

import { XrpTransactionService } from './xrp-transaction.service';

describe('XrpTransactionService', () => {
  let service: XrpTransactionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(XrpTransactionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
