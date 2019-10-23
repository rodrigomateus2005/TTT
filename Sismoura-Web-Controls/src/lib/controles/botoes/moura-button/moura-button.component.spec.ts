import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MouraButtonComponent } from './moura-button.component';

describe('MouraButtonComponent', () => {
  let component: MouraButtonComponent;
  let fixture: ComponentFixture<MouraButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MouraButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MouraButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
