import { TestBed } from '@angular/core/testing';

import { ApiCotizacionesService } from './api-cotizaciones.service';

describe('ApiCotizacionesService', () => {
  let service: ApiCotizacionesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiCotizacionesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
