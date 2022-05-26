import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JspdfComponent } from './jspdf.component';

describe('JspdfComponent', () => {
  let component: JspdfComponent;
  let fixture: ComponentFixture<JspdfComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JspdfComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JspdfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
