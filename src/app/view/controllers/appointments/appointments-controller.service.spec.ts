import { TestBed } from '@angular/core/testing';

import { AppointmentsControllerService } from './appointments-controller.service';

describe('AppointmentsControllerService', () => {
  let service: AppointmentsControllerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AppointmentsControllerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
