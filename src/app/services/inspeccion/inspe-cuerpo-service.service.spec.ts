import { TestBed } from '@angular/core/testing';

import { InspeCuerpoServiceService } from './inspe-cuerpo-service.service';

describe('InspeCuerpoServiceService', () => {
  let service: InspeCuerpoServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InspeCuerpoServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
