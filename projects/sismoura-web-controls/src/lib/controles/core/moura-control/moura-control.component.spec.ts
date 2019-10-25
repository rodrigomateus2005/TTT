import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MouraControlComponent } from './moura-control.component';

describe('MouraControlComponent', () => {
  let component: MouraControlComponent;
  let fixture: ComponentFixture<MouraControlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MouraControlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MouraControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
