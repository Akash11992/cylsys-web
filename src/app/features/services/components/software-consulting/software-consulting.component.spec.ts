import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SoftwareConsultingComponent } from './software-consulting.component';

describe('SoftwareConsultingComponent', () => {
  let component: SoftwareConsultingComponent;
  let fixture: ComponentFixture<SoftwareConsultingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SoftwareConsultingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SoftwareConsultingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
