import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RunningHomeComponent } from './running-home.component';

describe('RunningHomeComponent', () => {
  let component: RunningHomeComponent;
  let fixture: ComponentFixture<RunningHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RunningHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RunningHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
