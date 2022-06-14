import { TestBed } from '@angular/core/testing';

import { dptoService } from './dpto.service';

describe('dptoService', () => {
  let service: dptoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(dptoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});