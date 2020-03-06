import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OtherRunsComponent } from './other-runs.component';

describe('OtherRunsComponent', () => {
  let component: OtherRunsComponent;
  let fixture: ComponentFixture<OtherRunsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OtherRunsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OtherRunsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
