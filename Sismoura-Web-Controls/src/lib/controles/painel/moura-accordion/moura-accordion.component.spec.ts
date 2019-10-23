import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MouraAccordionComponent } from './moura-accordion.component';

describe('MouraAccordionComponent', () => {
  let component: MouraAccordionComponent;
  let fixture: ComponentFixture<MouraAccordionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MouraAccordionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MouraAccordionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
