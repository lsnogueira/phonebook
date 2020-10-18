import { TestBed } from '@angular/core/testing';

import { AppointmentsRepositoryService } from './appointments-repository.service';

describe('AppointmentsRepositoryService', () => {
  let service: AppointmentsRepositoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AppointmentsRepositoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
