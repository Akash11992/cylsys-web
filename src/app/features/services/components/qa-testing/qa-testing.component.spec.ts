import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QaTestingComponent } from './qa-testing.component';

describe('QaTestingComponent', () => {
  let component: QaTestingComponent;
  let fixture: ComponentFixture<QaTestingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QaTestingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QaTestingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
