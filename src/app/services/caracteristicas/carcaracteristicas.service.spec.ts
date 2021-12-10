import { TestBed } from '@angular/core/testing';

import { CarcaracteristicasService } from './carcaracteristicas.service';

describe('CarcaracteristicasService', () => {
  let service: CarcaracteristicasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CarcaracteristicasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
