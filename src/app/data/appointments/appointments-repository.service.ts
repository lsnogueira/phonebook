import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AppointmentsModel } from 'src/app/core/entities/models/appointments-model';
import { AppointmentsRepositoryInterface } from 'src/app/core/interfaces/repositories/appointments-repository.interface';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AppointmentsRepositoryService implements AppointmentsRepositoryInterface {

  constructor(private http: HttpClient) {}

  getAll(): Observable<AppointmentsModel[]> {
    return this.http.get<AppointmentsModel[]>(environment.appointments.route);
  }

  insert(appointment: AppointmentsModel): Observable<any> {
    return this.http.post(environment.appointments.route, appointment);
  }

  edit(newAppointment: AppointmentsModel): Observable<any> {
    return this.http.put(
      `${environment.appointments.route}/${newAppointment.id}`,
      newAppointment
    );
  }

  remove(id: number): Observable<any> {
    return this.http.delete(`${environment.appointments.route}/${id}`);
  }
}
