import { TestBed } from '@angular/core/testing';

import { InspeCaveServicesService } from './inspe-cave-services.service';

describe('InspeCaveServicesService', () => {
  let service: InspeCaveServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InspeCaveServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
