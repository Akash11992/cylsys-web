import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WomenDayComponent } from './women-day.component';

describe('WomenDayComponent', () => {
  let component: WomenDayComponent;
  let fixture: ComponentFixture<WomenDayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WomenDayComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WomenDayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
