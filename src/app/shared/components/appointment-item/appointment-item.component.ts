import { Component, Input, OnInit } from '@angular/core';
import { AppointmentsModel } from 'src/app/core/entities/models/appointments-model';

@Component({
  selector: 'app-appointment-item',
  templateUrl: './appointment-item.component.html',
  styleUrls: ['./appointment-item.component.scss'],
})
export class AppointmentItemComponent implements OnInit {
  appointment: AppointmentsModel;
  editMode: boolean;

  @Input()
  set setItem(item: AppointmentsModel) {
    this.appointment = item;
  }

  constructor() {}

  ngOnInit(): void {}
}
