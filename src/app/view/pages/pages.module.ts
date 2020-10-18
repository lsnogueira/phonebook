import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { AppointmentsComponent } from './components/appointments/appointments.component';
import { PagesComponent } from './pages.component';


@NgModule({
  declarations: [AppointmentsComponent, PagesComponent],
  imports: [
    CommonModule,
    PagesRoutingModule
  ]
})
export class PagesModule { }
