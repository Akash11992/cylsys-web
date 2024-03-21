import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RepublicComponent } from './republic.component';

describe('RepublicComponent', () => {
  let component: RepublicComponent;
  let fixture: ComponentFixture<RepublicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RepublicComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RepublicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
