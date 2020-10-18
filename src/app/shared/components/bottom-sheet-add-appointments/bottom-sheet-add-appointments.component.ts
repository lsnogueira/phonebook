import { Component, OnInit } from '@angular/core';
import { MatBottomSheetRef } from '@angular/material/bottom-sheet';

@Component({
  selector: 'app-bottom-sheet-add-appointments',
  templateUrl: './bottom-sheet-add-appointments.component.html',
  styleUrls: ['./bottom-sheet-add-appointments.component.scss'],
})
export class BottomSheetAddAppointmentsComponent implements OnInit {
  constructor(
    private bottomSheetRef: MatBottomSheetRef<
      BottomSheetAddAppointmentsComponent
    >
  ) {}

  ngOnInit(): void {}

  close(event: MouseEvent): void {
    this.bottomSheetRef.dismiss();
    event.preventDefault();
  }
}
