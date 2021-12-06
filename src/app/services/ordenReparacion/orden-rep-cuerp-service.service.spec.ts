import { TestBed } from '@angular/core/testing';

import { OrdenRepCuerpServiceService } from './orden-rep-cuerp-service.service';

describe('OrdenRepCuerpServiceService', () => {
  let service: OrdenRepCuerpServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OrdenRepCuerpServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
