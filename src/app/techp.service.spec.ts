import { TestBed } from '@angular/core/testing';

import { TechpService } from './techp.service';

describe('TechpService', () => {
  let service: TechpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TechpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
