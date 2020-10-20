import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppointmentsRepositoryInterface } from '../core/interfaces/repositories/appointments-repository.interface';
import { AppointmentsRepositoryService } from './appointments/appointments-repository.service';

@NgModule({
  declarations: [],
  imports: [CommonModule],
  providers: [
    {
      provide: AppointmentsRepositoryInterface,
      useClass: AppointmentsRepositoryService,
    },
  ],
})
export class DataModule {}
