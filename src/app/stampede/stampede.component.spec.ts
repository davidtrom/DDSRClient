import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StampedeComponent } from './stampede.component';

describe('StampedeComponent', () => {
  let component: StampedeComponent;
  let fixture: ComponentFixture<StampedeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StampedeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StampedeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
