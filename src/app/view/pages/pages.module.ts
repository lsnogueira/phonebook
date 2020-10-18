import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { AppointmentsComponent } from './components/appointments/appointments.component';
import { PagesComponent } from './pages.component';
import { AppMaterialModule } from 'src/app/app-material.module';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [AppointmentsComponent, PagesComponent],
  imports: [
    CommonModule,
    PagesRoutingModule,
    AppMaterialModule,
    SharedModule,
  ]
})
export class PagesModule { }
