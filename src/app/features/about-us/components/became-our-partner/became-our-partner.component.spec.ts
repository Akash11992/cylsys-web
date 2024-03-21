import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BecameOurPartnerComponent } from './became-our-partner.component';

describe('BecameOurPartnerComponent', () => {
  let component: BecameOurPartnerComponent;
  let fixture: ComponentFixture<BecameOurPartnerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BecameOurPartnerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BecameOurPartnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
