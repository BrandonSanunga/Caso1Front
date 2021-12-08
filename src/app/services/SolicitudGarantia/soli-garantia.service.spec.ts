import { TestBed } from '@angular/core/testing';

import { SoliGarantiaService } from './soli-garantia.service';

describe('SoliGarantiaService', () => {
  let service: SoliGarantiaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SoliGarantiaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
