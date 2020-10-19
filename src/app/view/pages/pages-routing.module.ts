import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PagesComponent } from './pages.component';
import { AppointmentsComponent } from './components/appointments/appointments.component';

const routes: Routes = [
  {
    path: '',
    component: PagesComponent,
    children: [{ path: 'agendamentos', component: AppointmentsComponent }],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {}
