import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MouraPageLogadaCadastroComponent } from './moura-page-logada-cadastro.component';

describe('MouraPageLogadaCadastroComponent', () => {
  let component: MouraPageLogadaCadastroComponent;
  let fixture: ComponentFixture<MouraPageLogadaCadastroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MouraPageLogadaCadastroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MouraPageLogadaCadastroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
