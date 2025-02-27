import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { MatBottomSheetRef } from '@angular/material/bottom-sheet';
import { AppointmentsModel } from 'src/app/core/entities/models/appointments-model';
import { AppointmentsControllerService } from 'src/app/view/controllers/appointments/appointments-controller.service';
import { GeneralService } from '../../services/general/general.service';
import { StateHelperService } from '../../services/state-helper/state-helper.service';

@Component({
  selector: 'app-bottom-sheet-add-appointments',
  templateUrl: './bottom-sheet-add-appointments.component.html',
  styleUrls: ['./bottom-sheet-add-appointments.component.scss'],
})
export class BottomSheetAddAppointmentsComponent implements OnInit {
  step = 0;
  enableSecondStep = false;
  enableThirdStep = false;
  isImportCSV = false;

  formGroup: FormGroup;

  constructor(
    private bottomSheetRef: MatBottomSheetRef<BottomSheetAddAppointmentsComponent>,
    private appointmentsController: AppointmentsControllerService,
    private stateHelper: StateHelperService,
    private generalService: GeneralService,
  ) {}

  ngOnInit(): void {
    this.initializeForm();
  }

  onSubmit(): void {
    this.appointmentsController
      .getAll()
      .toPromise()
      .then((res) => {
        if (!res?.length) {
          return;
        }

        let telNumbers: number[];

        if (!this.isImportCSV) {
          telNumbers = this.generalService.generateTelNumbersForPayload(this.form.telNumbers.value);
        } else {
          telNumbers = this.form.telNumbers.value;
        }

        if (!telNumbers.length) {
          this.form.telNumbers.reset();
          this.step = 1;
          return;
        }

        const appointment: AppointmentsModel = {
          id: res.length + 1,
          message: this.form.message.value,
          sendTime: this.form.sendTime.value,
          telNumbers,
        };

        this.appointmentsController.insert(appointment).subscribe(() => {
          this.stateHelper.setRemakeRequestValue = true;
          this.close();
        });
      });
  }

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

  close(): void {
    this.bottomSheetRef.dismiss();
  }

  uploadFile(fileEvt: Event): void {
    const file = (fileEvt.target as HTMLInputElement).files[0];
    const reader = new FileReader();

    if (file.name.endsWith('.csv')) {
      this.isImportCSV = true;
      reader.readAsText(file);

      reader.onload = () => {
        const fileData = reader.result;
        const list = (fileData as string).split('\n');
        const result = [];

        list.forEach((telNumber) => {
          result.push(Number(telNumber.replace(/[^\d\,]/g, '')));
        });

        this.form.telNumbers.setValue(result);
        this.form.telNumbers.clearValidators();
        this.form.telNumbers.updateValueAndValidity();
      };
    }
  }

  phoneNumberControlHelper(control: AbstractControl, event): void {
    const filteredValue = event.target.value.replace(/[^\d\,]/g, '');
    control.setValue(filteredValue);
  }

  get form(): { [key: string]: AbstractControl } {
    return this.formGroup.controls;
  }

  private initializeForm(): void {
    this.formGroup = new FormGroup({
      message: new FormControl('', {
        validators: [Validators.required, Validators.minLength(5)],
      }),
      sendTime: new FormControl('', { validators: [Validators.required] }),
      telNumbers: new FormControl([], {
        validators: [Validators.required],
      }),
    });
  }
}
