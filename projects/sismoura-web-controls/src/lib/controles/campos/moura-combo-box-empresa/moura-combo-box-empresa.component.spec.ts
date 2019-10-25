import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MouraComboBoxEmpresaComponent } from './moura-combo-box-empresa.component';

describe('MouraComboBoxEmpresaComponent', () => {
  let component: MouraComboBoxEmpresaComponent;
  let fixture: ComponentFixture<MouraComboBoxEmpresaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MouraComboBoxEmpresaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MouraComboBoxEmpresaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
