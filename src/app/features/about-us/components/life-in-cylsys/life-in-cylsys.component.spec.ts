import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LifeInCylsysComponent } from './life-in-cylsys.component';

describe('LifeInCylsysComponent', () => {
  let component: LifeInCylsysComponent;
  let fixture: ComponentFixture<LifeInCylsysComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LifeInCylsysComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LifeInCylsysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
