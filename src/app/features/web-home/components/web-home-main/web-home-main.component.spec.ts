import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebHomeMainComponent } from './web-home-main.component';

describe('WebHomeMainComponent', () => {
  let component: WebHomeMainComponent;
  let fixture: ComponentFixture<WebHomeMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WebHomeMainComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WebHomeMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
