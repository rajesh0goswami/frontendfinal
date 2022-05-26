import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowRevinueComponent } from './show-revinue.component';

describe('ShowRevinueComponent', () => {
  let component: ShowRevinueComponent;
  let fixture: ComponentFixture<ShowRevinueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowRevinueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowRevinueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
