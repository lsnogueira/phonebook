import { DebugElement, NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import {
  BrowserAnimationsModule,
  NoopAnimationsModule,
} from '@angular/platform-browser/animations';
import { of } from 'rxjs';
import { SharedModule } from 'src/app/shared/shared.module';
import { AppointmentsControllerService } from '../controllers/appointments/appointments-controller.service';
import { ViewModule } from '../view.module';

import { PagesComponent } from './pages.component';

describe('PagesComponent', () => {
  let component: PagesComponent;
  let fixture: ComponentFixture<PagesComponent>;
  let el: DebugElement;
  let appointmentsService: any;

  beforeEach(async () => {
    const appointmentsServiceSpy = jasmine.createSpyObj(
      'AppointmentsControllerService',
      ['insert', 'getAll']
    );

    await TestBed.configureTestingModule({
      declarations: [PagesComponent],
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
      ],
      schemas: [NO_ERRORS_SCHEMA],
    })
      .compileComponents()
      .then(() => {
        fixture = TestBed.createComponent(PagesComponent);
        component = fixture.componentInstance;
        el = fixture.debugElement;
        appointmentsService = TestBed.inject(AppointmentsControllerService);
      });
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should insert new appointment', () => {
    const appointment = [
      {
        id: 2,
        message: 'mensagem legalzinha',
        sendTime: '2020-10-20T09:15',
        telNumbers: [923123134, 923234221],
      },
    ];

    appointmentsService.getAll.and.returnValue(of(appointment));

    fixture.detectChanges();

    const cards = el.queryAll(By.css('.mat-card'));

    expect(cards.length).toBeTruthy();
  });
});
