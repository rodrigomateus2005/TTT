import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalProcuraComponent } from './modal-procura.component';

describe('ModalProcuraComponent', () => {
  let component: ModalProcuraComponent;
  let fixture: ComponentFixture<ModalProcuraComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalProcuraComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalProcuraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
