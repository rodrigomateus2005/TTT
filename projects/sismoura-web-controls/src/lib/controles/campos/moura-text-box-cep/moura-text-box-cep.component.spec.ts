import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MouraTextBoxCepComponent } from './moura-text-box-cep.component';

describe('MouraTextBoxCepComponent', () => {
  let component: MouraTextBoxCepComponent;
  let fixture: ComponentFixture<MouraTextBoxCepComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MouraTextBoxCepComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MouraTextBoxCepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
