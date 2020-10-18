import { TestBed } from '@angular/core/testing';

import { AppointmentsUsecaseService } from './appointments-usecase.service';

describe('AppointmentsUsecaseService', () => {
  let service: AppointmentsUsecaseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AppointmentsUsecaseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
