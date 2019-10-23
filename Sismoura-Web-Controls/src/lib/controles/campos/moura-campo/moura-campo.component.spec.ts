import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MouraCampoComponent } from './moura-campo.component';

describe('MouraCampoComponent', () => {
  let component: MouraCampoComponent;
  let fixture: ComponentFixture<MouraCampoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MouraCampoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MouraCampoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
