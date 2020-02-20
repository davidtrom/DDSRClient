import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeapFrogComponent } from './leap-frog.component';

describe('LeapFrogComponent', () => {
  let component: LeapFrogComponent;
  let fixture: ComponentFixture<LeapFrogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeapFrogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeapFrogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
