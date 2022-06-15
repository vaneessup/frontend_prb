import { TestBed } from '@angular/core/testing';

import { direService } from './direccion.service';

describe('direService', () => {
  let service: direService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(direService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});