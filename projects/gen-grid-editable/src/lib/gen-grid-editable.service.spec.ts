import { TestBed } from '@angular/core/testing';

import { GenGridEditableService } from '../gen-grid-editable.service';

describe('GenGridEditableService', () => {
  let service: GenGridEditableService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GenGridEditableService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
