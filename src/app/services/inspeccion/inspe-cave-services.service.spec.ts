import { TestBed } from '@angular/core/testing';

import { InspeCaveTallerService } from './inspe-cave-services.service';

describe('InspeCaveTallerService', () => {
  let service: InspeCaveTallerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InspeCaveTallerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
