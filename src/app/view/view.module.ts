import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppointmentsControllerInterface } from '../core/interfaces/controllers/appointments-controller.interface';
import { AppointmentsControllerService } from './controllers/appointments/appointments-controller.service';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    { provide: AppointmentsControllerInterface, useClass: AppointmentsControllerService }
  ]
})
export class ViewModule { }
