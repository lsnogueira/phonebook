import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AppointmentsModel } from 'src/app/core/entities/models/appointments-model';
import { AppointmentsControllerService } from 'src/app/view/controllers/appointments/appointments-controller.service';

@Component({
  selector: 'app-appointments',
  templateUrl: './appointments.component.html',
  styleUrls: ['./appointments.component.scss'],
})
export class AppointmentsComponent implements OnInit, OnDestroy {
  appointments: AppointmentsModel[];
  subscriptions: Subscription;

  constructor(private appointmentsController: AppointmentsControllerService) {}

  ngOnInit(): void {
    this.subscriptions = new Subscription();

    this.subscriptions.add(
      this.appointmentsController.getAll().subscribe(
        (res) => {
          if (!res) {
            return;
          }
          this.appointments = res;

        },
        (rej) => {
          console.error(rej);
        }
      )
    );
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }
}
