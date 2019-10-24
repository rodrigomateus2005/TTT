import { TestBed } from '@angular/core/testing';

import { MouraService } from './moura.service';

describe('MouraService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MouraService = TestBed.get(MouraService);
    expect(service).toBeTruthy();
  });
});
