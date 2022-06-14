import { TestBed } from '@angular/core/testing';

import { CarsService } from './cars.service';
import { clienteService } from './cliente.service';

describe('clienteService', () => {
  let service: clienteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(clienteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
