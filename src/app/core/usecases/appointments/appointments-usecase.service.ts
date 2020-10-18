import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AppointmentsModel } from '../../entities/models/appointments-model';
import { AppointmentsRepositoryInterface } from '../../interfaces/repositories/appointments-repository.interface';
import { AppointmentsUsecaseInterface } from '../../interfaces/usecases/appointments-usecase.interface';

@Injectable({
  providedIn: 'root'
})
export class AppointmentsUsecaseService implements AppointmentsUsecaseInterface {

  constructor(
    private appointmentsRepository: AppointmentsRepositoryInterface
  ) {}

  getAll(): Observable<AppointmentsModel[]> {
    return this.appointmentsRepository.getAll();
  }
  insert(appointment: AppointmentsModel): Observable<any> {
    return this.appointmentsRepository.insert(appointment);
  }
  edit(newAppointment: AppointmentsModel): Observable<any> {
    return this.appointmentsRepository.edit(newAppointment);
  }
  remove(id: number): Observable<any> {
    return this.appointmentsRepository.remove(id);
  }
}
