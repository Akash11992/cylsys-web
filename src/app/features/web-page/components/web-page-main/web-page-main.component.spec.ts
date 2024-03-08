import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebPageMainComponent } from './web-page-main.component';

describe('WebPageMainComponent', () => {
  let component: WebPageMainComponent;
  let fixture: ComponentFixture<WebPageMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WebPageMainComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WebPageMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
