import { TestBed } from '@angular/core/testing';

import { DetallefacliService } from './detallefacli.service';

describe('DetallefacliService', () => {
  let service: DetallefacliService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DetallefacliService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
