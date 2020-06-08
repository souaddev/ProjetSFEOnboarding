import { TestBed } from '@angular/core/testing';

import { DemandeMoyenService } from './demande-moyen.service';

describe('DemandeMoyenService', () => {
  let service: DemandeMoyenService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DemandeMoyenService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
