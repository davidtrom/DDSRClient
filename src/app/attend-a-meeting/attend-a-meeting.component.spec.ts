import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AttendAMeetingComponent } from './attend-a-meeting.component';

describe('AttendAMeetingComponent', () => {
  let component: AttendAMeetingComponent;
  let fixture: ComponentFixture<AttendAMeetingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AttendAMeetingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AttendAMeetingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
