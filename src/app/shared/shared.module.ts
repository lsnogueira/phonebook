import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BottomSheetAddAppointmentsComponent } from './components/bottom-sheet-add-appointments/bottom-sheet-add-appointments.component';

const components = [BottomSheetAddAppointmentsComponent];

@NgModule({
  declarations: [...components],
  imports: [
    CommonModule
  ],
  exports: [...components]
})
export class SharedModule { }
