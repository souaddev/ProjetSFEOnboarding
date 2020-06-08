import { TestBed } from '@angular/core/testing';

import { MoyenService } from './moyen.service';

describe('MoyenService', () => {
  let service: MoyenService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MoyenService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
