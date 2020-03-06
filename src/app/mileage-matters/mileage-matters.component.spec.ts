import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MileageMattersComponent } from './mileage-matters.component';

describe('MileageMattersComponent', () => {
  let component: MileageMattersComponent;
  let fixture: ComponentFixture<MileageMattersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MileageMattersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MileageMattersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
