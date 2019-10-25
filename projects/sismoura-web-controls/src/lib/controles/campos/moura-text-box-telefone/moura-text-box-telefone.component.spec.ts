import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MouraTextBoxTelefoneComponent } from './moura-text-box-telefone.component';

describe('MouraTextBoxTelefoneComponent', () => {
  let component: MouraTextBoxTelefoneComponent;
  let fixture: ComponentFixture<MouraTextBoxTelefoneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MouraTextBoxTelefoneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MouraTextBoxTelefoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
