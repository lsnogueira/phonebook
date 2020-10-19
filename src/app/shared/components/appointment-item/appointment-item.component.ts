import { Component, Input, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { AppointmentsModel } from 'src/app/core/entities/models/appointments-model';
import { AppointmentsControllerService } from 'src/app/view/controllers/appointments/appointments-controller.service';
import { StateHelperService } from 'src/app/shared/services/state-helper/state-helper.service';
import { GeneralService } from '../../services/general/general.service';

@Component({
  selector: 'app-appointment-item',
  templateUrl: './appointment-item.component.html',
  styleUrls: ['./appointment-item.component.scss'],
})
export class AppointmentItemComponent implements OnInit {
  appointment: AppointmentsModel;
  editMode: boolean;
  formGroup: FormGroup;

  @Input()
  set setItem(item: AppointmentsModel) {
    this.appointment = item;
  }

  constructor(
    private appointmentsController: AppointmentsControllerService,
    private stateHelper: StateHelperService,
    private generalService: GeneralService,
  ) {}

  ngOnInit(): void {
    this.formGroup = new FormGroup({
      message: new FormControl(this.appointment.message, {
        validators: [Validators.required, Validators.minLength(5)],
      }),
      sendTime: new FormControl(this.appointment.sendTime, {
        validators: [Validators.required],
      }),
      id: new FormControl(this.appointment.id, {
        validators: [Validators.required],
      }),
      telNumbers: new FormControl(this.appointment.telNumbers.join(','), {
        validators: [Validators.required, Validators.minLength(9)],
      }),
    });
  }

  get form(): { [key: string]: AbstractControl } {
    return this.formGroup.controls;
  }

  editItem(): void {
    const telNumbers = this.generalService.generateTelNumbersForPayload(this.form.telNumbers.value);

    const appointment: AppointmentsModel = {
      id: this.form.id.value,
      message: this.form.message.value,
      sendTime: this.form.sendTime.value,
      telNumbers,
    };

    this.appointmentsController.edit(appointment).subscribe(() => {
      this.stateHelper.setRemakeRequestValue = true;
    });
  }

  removeItem(id: number): void {
    this.appointmentsController.remove(id).subscribe(() => {
      this.stateHelper.setRemakeRequestValue = true;
    });
  }
}
