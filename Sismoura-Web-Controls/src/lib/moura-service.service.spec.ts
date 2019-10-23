import { TestBed } from '@angular/core/testing';

import { MouraServiceService } from './moura-service.service';

describe('MouraServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MouraServiceService = TestBed.get(MouraServiceService);
    expect(service).toBeTruthy();
  });
});
