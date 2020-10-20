import { DebugElement, NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import {
  MatBottomSheetRef,
  MAT_BOTTOM_SHEET_DATA,
} from '@angular/material/bottom-sheet';
import { By } from '@angular/platform-browser';
import {
  BrowserAnimationsModule,
  NoopAnimationsModule,
} from '@angular/platform-browser/animations';
import { AppointmentsControllerService } from 'src/app/view/controllers/appointments/appointments-controller.service';
import { ViewModule } from 'src/app/view/view.module';
import { SharedModule } from '../../shared.module';

import { BottomSheetAddAppointmentsComponent } from './bottom-sheet-add-appointments.component';

describe('BottomSheetAddAppointmentsComponent', () => {
  let component: BottomSheetAddAppointmentsComponent;
  let fixture: ComponentFixture<BottomSheetAddAppointmentsComponent>;
  let el: DebugElement;
  let appointmentsService: AppointmentsControllerService;

  beforeEach(async () => {
    const appointmentsServiceSpy = jasmine.createSpyObj(
      'AppointmentsControllerService',
      ['insert', 'getAll']
    );

    await TestBed.configureTestingModule({
      declarations: [BottomSheetAddAppointmentsComponent],
      imports: [
        SharedModule,
        ViewModule,
        NoopAnimationsModule,
        BrowserAnimationsModule,
      ],
      providers: [
        {
          provide: AppointmentsControllerService,
          useValue: appointmentsServiceSpy,
        },
        {
          provide: MatBottomSheetRef,
          useValue: BottomSheetAddAppointmentsComponent,
        },
        { provide: MAT_BOTTOM_SHEET_DATA, useValue: {} },
      ],
      schemas: [NO_ERRORS_SCHEMA],
    })
      .compileComponents()
      .then(() => {
        fixture = TestBed.createComponent(BottomSheetAddAppointmentsComponent);
        component = fixture.componentInstance;
        el = fixture.debugElement;
        appointmentsService = TestBed.inject(AppointmentsControllerService);
      });
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BottomSheetAddAppointmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
