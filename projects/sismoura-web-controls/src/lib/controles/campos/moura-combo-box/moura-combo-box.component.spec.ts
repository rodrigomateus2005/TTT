import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MouraComboBoxComponent } from './moura-combo-box.component';

describe('MouraComboBoxComponent', () => {
  let component: MouraComboBoxComponent;
  let fixture: ComponentFixture<MouraComboBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MouraComboBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MouraComboBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
