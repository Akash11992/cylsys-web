import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CareerFresherComponent } from './career-fresher.component';

describe('CareerFresherComponent', () => {
  let component: CareerFresherComponent;
  let fixture: ComponentFixture<CareerFresherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CareerFresherComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CareerFresherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
