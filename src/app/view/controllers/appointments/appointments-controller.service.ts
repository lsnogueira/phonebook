import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AppointmentsModel } from 'src/app/core/entities/models/appointments-model';
import { AppointmentsControllerInterface } from 'src/app/core/interfaces/controllers/appointments-controller.interface';
import { AppointmentsUsecaseInterface } from 'src/app/core/interfaces/usecases/appointments-usecase.interface';

@Injectable({
  providedIn: 'root'
})
export class AppointmentsControllerService implements AppointmentsControllerInterface {

  constructor(private appointmentsUsecase: AppointmentsUsecaseInterface) { }

  getAll(): Observable<AppointmentsModel[]> {
    return this.appointmentsUsecase.getAll();
  }
  insert(appointment: AppointmentsModel): Observable<any> {
    return this.appointmentsUsecase.insert(appointment);
  }
  edit(newAppointment: AppointmentsModel): Observable<any> {
    return this.appointmentsUsecase.edit(newAppointment);
  }
  remove(id: number): Observable<any> {
    return this.appointmentsUsecase.remove(id);
  }
}
