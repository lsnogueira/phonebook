import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AppointmentsModel } from 'src/app/core/entities/models/appointments-model';
import { StateHelperService } from 'src/app/shared/services/state-helper/state-helper.service';
import { AppointmentsControllerService } from 'src/app/view/controllers/appointments/appointments-controller.service';

@Component({
  selector: 'app-appointments',
  templateUrl: './appointments.component.html',
  styleUrls: ['./appointments.component.scss'],
})
export class AppointmentsComponent implements OnInit, OnDestroy {
  appointments: AppointmentsModel[];
  subscriptions: Subscription;

  constructor(
    private appointmentsController: AppointmentsControllerService,
    private stateHelper: StateHelperService
  ) {}

  ngOnInit(): void {
    this.subscriptions = new Subscription();

    this.getAppointments();

    this.subscriptions.add(
      this.stateHelper.remakeRequest.subscribe((res) => {
        if (res) {
          this.getAppointments();
        }
      })
    );
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

  private getAppointments(): void {
    this.appointmentsController
      .getAll()
      .toPromise()
      .then((res) => {
        if (!res) {
          return;
        }
        this.appointments = res;
      });
  }
}
