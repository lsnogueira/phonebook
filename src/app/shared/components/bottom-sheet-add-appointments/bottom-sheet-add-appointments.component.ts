import { Component, OnInit } from '@angular/core';
import { MatBottomSheetRef } from '@angular/material/bottom-sheet';

@Component({
  selector: 'app-bottom-sheet-add-appointments',
  templateUrl: './bottom-sheet-add-appointments.component.html',
  styleUrls: ['./bottom-sheet-add-appointments.component.scss'],
})
export class BottomSheetAddAppointmentsComponent implements OnInit {
  step = 0;
  enableSecondStep = false;
  enableThirdStep = false;

  constructor(
    private bottomSheetRef: MatBottomSheetRef<
      BottomSheetAddAppointmentsComponent
    >
  ) {}

  ngOnInit(): void {}

  setStep(index: number): void {
    this.step = index;
  }

  nextStep(): void {
    this.step++;

    if (this.step === 1) {
      this.enableSecondStep = true;
    } else if (this.step === 2) {
      this.enableThirdStep = true;
    }
  }

  prevStep(): void {
    this.step--;
  }

  close(event: MouseEvent): void {
    this.bottomSheetRef.dismiss();
    event.preventDefault();
  }
}
