import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MouraModalComponent } from './moura-modal.component';

describe('MouraModalComponent', () => {
  let component: MouraModalComponent;
  let fixture: ComponentFixture<MouraModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MouraModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MouraModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
