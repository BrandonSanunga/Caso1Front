import { TestBed } from '@angular/core/testing';

import { InformeConcecionariaService } from './informe-concecionaria.service';

describe('InformeConcecionariaService', () => {
  let service: InformeConcecionariaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InformeConcecionariaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
