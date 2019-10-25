import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MouraTextBoxCPFComponent } from './moura-text-box-cpf.component';

describe('MouraTextBoxCPFComponent', () => {
  let component: MouraTextBoxCPFComponent;
  let fixture: ComponentFixture<MouraTextBoxCPFComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MouraTextBoxCPFComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MouraTextBoxCPFComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
