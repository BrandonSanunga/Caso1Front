import { TestBed } from '@angular/core/testing';

import { InformeReclamoTallerService } from './informe-reclamo-services.service';

describe('InformeReclamoTallerService', () => {
  let service: InformeReclamoTallerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InformeReclamoTallerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
