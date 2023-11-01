import { TestBed } from '@angular/core/testing';

import { UttilityService } from './uttility.service';

describe('UttilityService', () => {
  let service: UttilityService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UttilityService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
