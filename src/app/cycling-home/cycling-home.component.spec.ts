import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CyclingHomeComponent } from './cycling-home.component';

describe('CyclingHomeComponent', () => {
  let component: CyclingHomeComponent;
  let fixture: ComponentFixture<CyclingHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CyclingHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CyclingHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
