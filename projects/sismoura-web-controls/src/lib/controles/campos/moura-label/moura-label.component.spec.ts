import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MouraLabelComponent } from './moura-label.component';

describe('MouraLabelComponent', () => {
  let component: MouraLabelComponent;
  let fixture: ComponentFixture<MouraLabelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MouraLabelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MouraLabelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
