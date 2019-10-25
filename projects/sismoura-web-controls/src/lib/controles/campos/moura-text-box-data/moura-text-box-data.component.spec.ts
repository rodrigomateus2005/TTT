import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MouraTextBoxDataComponent } from './moura-text-box-data.component';

describe('MouraTextBoxDataComponent', () => {
  let component: MouraTextBoxDataComponent;
  let fixture: ComponentFixture<MouraTextBoxDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MouraTextBoxDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MouraTextBoxDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
