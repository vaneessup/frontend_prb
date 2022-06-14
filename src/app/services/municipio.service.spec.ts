import { TestBed } from '@angular/core/testing';
import { municipioService } from './municipio.service';

describe('municipioService', () => {
  let service: municipioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(municipioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});