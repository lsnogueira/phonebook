import { Observable } from 'rxjs';
import { AppointmentsModel } from '../../entities/models/appointments-model';

export abstract class AppointmentsRepositoryInterface {
  abstract getAll(): Observable<AppointmentsModel[]>;
  abstract insert(appointment: AppointmentsModel): Observable<any>;
  abstract edit(newAppointment: AppointmentsModel): Observable<any>;
  abstract remove(id: number): Observable<any>;
}
