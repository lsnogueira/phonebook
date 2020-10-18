import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BottomSheetAddAppointmentsComponent } from './bottom-sheet-add-appointments.component';

describe('BottomSheetAddAppointmentsComponent', () => {
  let component: BottomSheetAddAppointmentsComponent;
  let fixture: ComponentFixture<BottomSheetAddAppointmentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BottomSheetAddAppointmentsComponent ]
    })
    .compileComponents();
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
