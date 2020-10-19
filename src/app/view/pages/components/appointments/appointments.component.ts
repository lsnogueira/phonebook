import { Component, OnInit } from '@angular/core';
import { AppointmentsControllerService } from 'src/app/view/controllers/appointments/appointments-controller.service';

@Component({
  selector: 'app-appointments',
  templateUrl: './appointments.component.html',
  styleUrls: ['./appointments.component.scss']
})
export class AppointmentsComponent implements OnInit {

  constructor(private appointmentsController: AppointmentsControllerService) { }

  ngOnInit(): void {
    this.appointmentsController.getAll().subscribe(res => {
      res
      debugger
    }, rej => {});
  }

}
