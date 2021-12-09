import { TestBed } from '@angular/core/testing';

import { OrdenRepCaveServiceService } from './orden-rep-cave-service.service';

describe('OrdenRepCaveServiceService', () => {
  let service: OrdenRepCaveServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OrdenRepCaveServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
