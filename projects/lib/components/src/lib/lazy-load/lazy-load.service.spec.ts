import { TestBed } from '@angular/core/testing';

import { LazyLoadService } from './lazy-load.service';

describe('LazyLoadService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LazyLoadService = TestBed.get(LazyLoadService);
    expect(service).toBeTruthy();
  });
});
