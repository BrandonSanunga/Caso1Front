import { TestBed } from '@angular/core/testing';

import { FaturacliService } from './faturacli.service';

describe('FaturacliService', () => {
  let service: FaturacliService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FaturacliService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
