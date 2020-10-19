import { Component, OnInit } from '@angular/core';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { BottomSheetAddAppointmentsComponent } from 'src/app/shared/components/bottom-sheet-add-appointments/bottom-sheet-add-appointments.component';

@Component({
  selector: 'app-pages',
  template: `
    <mat-sidenav-container>
      <mat-sidenav #sidenav [permanentAt]="960" mode="side" opened>
        <img
          src="assets/images/phone-book.svg"
          alt="agenda telefonica"
          width="105"
        />
        <div class="buttons-wrapper">
          <button mat-button color="primary" [routerLink]="['/agendamentos']">
            Agendamentos
          </button>
          <button mat-button disabled color="primary">Contatos</button>
          <button mat-button disabled color="primary">
            Verificar Operadora
          </button>
          <button mat-button disabled color="primary">
            Agendar telefonemas
          </button>
        </div>
      </mat-sidenav>

      <mat-sidenav-content>
        <mat-toolbar>
          <div class="menu-information">
            <button mat-icon-button (click)="sidenav.toggle()">
              <mat-icon>menu</mat-icon>
            </button>
            <span class="title">Phonebook</span>
          </div>
          <button
            class="appointment-button"
            mat-raised-button
            color="primary"
            (click)="openBottomSheet()"
          >
            Criar agendamento +
          </button>
        </mat-toolbar>
        <router-outlet></router-outlet>
      </mat-sidenav-content>
    </mat-sidenav-container>
  `,
})
export class PagesComponent implements OnInit {
  constructor(private bottomSheet: MatBottomSheet) {}

  ngOnInit(): void {}

  openBottomSheet(): void {
    this.bottomSheet.open(BottomSheetAddAppointmentsComponent);
  }
}
