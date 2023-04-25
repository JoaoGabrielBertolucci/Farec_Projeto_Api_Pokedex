import { TestBed } from '@angular/core/testing';

import { PokeeService } from './pokee.service';

describe('PokeeService', () => {
  let service: PokeeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PokeeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
