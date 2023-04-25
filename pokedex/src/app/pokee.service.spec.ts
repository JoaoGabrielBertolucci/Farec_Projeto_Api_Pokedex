import { TestBed } from '@angular/core/testing';

import { PokeService } from './pokee.service';

describe('PokeeService', () => {
  let service: PokeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PokeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
