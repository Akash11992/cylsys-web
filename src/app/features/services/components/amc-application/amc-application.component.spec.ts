import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AmcApplicationComponent } from './amc-application.component';

describe('AmcApplicationComponent', () => {
  let component: AmcApplicationComponent;
  let fixture: ComponentFixture<AmcApplicationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AmcApplicationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AmcApplicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
