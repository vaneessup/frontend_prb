import { TestBed } from '@angular/core/testing';

import {agenteService } from './agente.service';

describe('CarsService', () => {
  let service: agenteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(agenteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
