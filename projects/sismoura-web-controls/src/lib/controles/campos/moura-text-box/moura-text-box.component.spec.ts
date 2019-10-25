import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MouraTextBoxComponent } from './moura-text-box.component';

describe('MouraTextBoxComponent', () => {
  let component: MouraTextBoxComponent;
  let fixture: ComponentFixture<MouraTextBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MouraTextBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MouraTextBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
