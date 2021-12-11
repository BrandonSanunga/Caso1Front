import { TestBed } from '@angular/core/testing';

import { ReclamoGarantiaService } from './reclamo-garantia.service';

describe('ReclamoGarantiaService', () => {
  let service: ReclamoGarantiaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReclamoGarantiaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
