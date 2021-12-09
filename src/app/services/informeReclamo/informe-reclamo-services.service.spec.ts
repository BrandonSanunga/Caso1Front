import { TestBed } from '@angular/core/testing';

import { InformeReclamoServicesService } from './informe-reclamo-services.service';

describe('InformeReclamoServicesService', () => {
  let service: InformeReclamoServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InformeReclamoServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
