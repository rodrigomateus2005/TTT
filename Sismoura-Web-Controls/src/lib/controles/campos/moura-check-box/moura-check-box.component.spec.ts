import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MouraCheckBoxComponent } from './moura-check-box.component';

describe('MouraCheckBoxComponent', () => {
  let component: MouraCheckBoxComponent;
  let fixture: ComponentFixture<MouraCheckBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MouraCheckBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MouraCheckBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
