import { TestBed } from '@angular/core/testing';

import { ImagenCatalogoService } from './imagen-catalogo.service';

describe('ImagenCatalogoService', () => {
  let service: ImagenCatalogoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ImagenCatalogoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
