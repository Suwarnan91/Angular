import { TestBed } from '@angular/core/testing';

import { LeaveStatusService } from './leave-status.service';

describe('LeaveStatusService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LeaveStatusService = TestBed.get(LeaveStatusService);
    expect(service).toBeTruthy();
  });
});
