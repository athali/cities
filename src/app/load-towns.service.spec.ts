import { TestBed } from '@angular/core/testing';

import { LoadTownsService } from './load-towns.service';

describe('LoadTownsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LoadTownsService = TestBed.get(LoadTownsService);
    expect(service).toBeTruthy();
  });
});
