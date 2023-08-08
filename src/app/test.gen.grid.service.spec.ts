import { TestBed } from '@angular/core/testing';

import { TestGenGridService } from './test.gen.grid.service';

describe('TestGenGridService', () => {
  let service: TestGenGridService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TestGenGridService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
