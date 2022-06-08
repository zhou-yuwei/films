import { TestBed } from '@angular/core/testing';

import { GestionSeriesService } from './gestion-series.service';

describe('GestionSeriesService', () => {
  let service: GestionSeriesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GestionSeriesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
