import { TestBed } from '@angular/core/testing';

import { GitsearchService } from './gitsearch.service';

describe('GitsearchService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GitsearchService = TestBed.get(GitsearchService);
    expect(service).toBeTruthy();
  });
});
