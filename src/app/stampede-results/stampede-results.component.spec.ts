import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StampedeResultsComponent } from './stampede-results.component';

describe('StampedeResultsComponent', () => {
  let component: StampedeResultsComponent;
  let fixture: ComponentFixture<StampedeResultsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StampedeResultsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StampedeResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
