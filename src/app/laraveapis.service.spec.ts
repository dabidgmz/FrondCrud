import { TestBed } from '@angular/core/testing';

import { LaraveapisService } from './laraveapis.service';

describe('LaraveapisService', () => {
  let service: LaraveapisService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LaraveapisService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
