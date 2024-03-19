import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnicornOpsComponent } from './unicorn-ops.component';

describe('UnicornOpsComponent', () => {
  let component: UnicornOpsComponent;
  let fixture: ComponentFixture<UnicornOpsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UnicornOpsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UnicornOpsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
