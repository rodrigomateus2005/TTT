import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MouraTextBoxProcuraComponent } from './moura-text-box-procura.component';

describe('MouraTextBoxProcuraComponent', () => {
  let component: MouraTextBoxProcuraComponent;
  let fixture: ComponentFixture<MouraTextBoxProcuraComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MouraTextBoxProcuraComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MouraTextBoxProcuraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
