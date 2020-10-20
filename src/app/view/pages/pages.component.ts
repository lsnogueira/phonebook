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
          <div matTooltip="Em breve!" matTooltipPosition="after">
            <button mat-button disabled color="primary">Contatos</button>
          </div>
          <div matTooltip="Em breve!" matTooltipPosition="after">
            <button mat-button disabled color="primary">
              Verificar Operadora
            </button>
          </div>
          <div matTooltip="Em breve!" matTooltipPosition="after">
            <button mat-button disabled color="primary">
              Agendar telefonemas
            </button>
          </div>
        </div>
      </mat-sidenav>

      <mat-sidenav-content>
        <app-header
          (clickMenu)="sidenav.toggle()"
          (clickBottomSheet)="openBottomSheet()"
        ></app-header>
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
