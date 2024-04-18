import { TestBed } from '@angular/core/testing';

import { VariableAuthService } from './variable-auth.service';

describe('VariableAuthService', () => {
  let service: VariableAuthService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VariableAuthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
