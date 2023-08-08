import { TestBed } from '@angular/core/testing';

import { GenGrid2Service } from './gen-grid2.service';

describe('GenGrid2Service', () => {
  let service: GenGrid2Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GenGrid2Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
