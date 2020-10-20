import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';

import { AppointmentsRepositoryService } from './appointments-repository.service';
import { environment } from 'src/environments/environment';
import { DataModule } from '../data.module';
import { SharedModule } from 'src/app/shared/shared.module';

describe('AppointmentsRepositoryService', () => {
  let service: AppointmentsRepositoryService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, DataModule, SharedModule],
    });
    service = TestBed.inject(AppointmentsRepositoryService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get all appointments', () => {
    service.getAll().subscribe((appointments) => {
      expect(appointments).toBeTruthy(`can't get all appointments`);
      expect(appointments.length).toEqual(2);
      const [appointment] = appointments;
      expect(appointment.id).toEqual(1);
    });

    const req = httpTestingController.expectOne(environment.appointments.route);
    expect(req.request.method).toEqual('GET');
    const response = [
      {
        id: 1,
        telNumbers: [953823288],
        message: 'bla bla bla bla bla bla bla bla bla bla bla bla bla',
        sendTime: '2020-10-20T12:30',
      },
      {
        id: 2,
        message: 'mensagem legalzinha',
        sendTime: '2020-10-20T09:15',
        telNumbers: [923123134, 923234221],
      },
    ];
    req.flush(response);
  });
});
