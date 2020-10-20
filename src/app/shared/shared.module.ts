import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BottomSheetAddAppointmentsComponent } from './components/bottom-sheet-add-appointments/bottom-sheet-add-appointments.component';
import { AppMaterialModule } from '../app-material.module';
import { AppointmentItemComponent } from './components/appointment-item/appointment-item.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LayoutModule } from '@angular/cdk/layout';
import { ResponsiveSidenavDirective } from './directives/responsive-sidenav/responsive-sidenav.directive';

const components = [
  BottomSheetAddAppointmentsComponent,
  AppointmentItemComponent,
];

@NgModule({
  declarations: [...components, ResponsiveSidenavDirective],
  imports: [
    CommonModule,
    AppMaterialModule,
    FormsModule,
    ReactiveFormsModule,
    LayoutModule,
  ],
  exports: [...components, ResponsiveSidenavDirective],
})
export class SharedModule {}
