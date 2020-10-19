import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BottomSheetAddAppointmentsComponent } from './components/bottom-sheet-add-appointments/bottom-sheet-add-appointments.component';
import { AppMaterialModule } from '../app-material.module';
import { AppointmentItemComponent } from './components/appointment-item/appointment-item.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const components = [
  BottomSheetAddAppointmentsComponent,
  AppointmentItemComponent,
];

@NgModule({
  declarations: [...components],
  imports: [CommonModule, AppMaterialModule, FormsModule, ReactiveFormsModule],
  exports: [...components],
})
export class SharedModule {}
