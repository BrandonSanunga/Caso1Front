import { TestBed } from '@angular/core/testing';

import { VehiculoCatalogoService } from './vehiculo-catalogo.service';

describe('VehiculoCatalogoService', () => {
  let service: VehiculoCatalogoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VehiculoCatalogoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
