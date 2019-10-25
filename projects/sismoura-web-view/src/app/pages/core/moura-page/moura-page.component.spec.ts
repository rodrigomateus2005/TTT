import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MouraPageComponent } from './moura-page.component';

describe('MouraPageComponent', () => {
  let component: MouraPageComponent;
  let fixture: ComponentFixture<MouraPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MouraPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MouraPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
