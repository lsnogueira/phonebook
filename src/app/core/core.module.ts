import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppointmentsUsecaseInterface } from './interfaces/usecases/appointments-usecase.interface';
import { AppointmentsUsecaseService } from './usecases/appointments/appointments-usecase.service';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    { provide: AppointmentsUsecaseInterface, useClass: AppointmentsUsecaseService }
  ]
})
export class CoreModule { }
