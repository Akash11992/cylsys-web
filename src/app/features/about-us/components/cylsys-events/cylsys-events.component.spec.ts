import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CylsysEventsComponent } from './cylsys-events.component';

describe('CylsysEventsComponent', () => {
  let component: CylsysEventsComponent;
  let fixture: ComponentFixture<CylsysEventsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CylsysEventsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CylsysEventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
