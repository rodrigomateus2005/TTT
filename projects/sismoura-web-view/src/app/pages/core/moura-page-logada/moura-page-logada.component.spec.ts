import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MouraPageLogadaComponent } from './moura-page-logada.component';

describe('MouraPageLogadaComponent', () => {
  let component: MouraPageLogadaComponent;
  let fixture: ComponentFixture<MouraPageLogadaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MouraPageLogadaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MouraPageLogadaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
