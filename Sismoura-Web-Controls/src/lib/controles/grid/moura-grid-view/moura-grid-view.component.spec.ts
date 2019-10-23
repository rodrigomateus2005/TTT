import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MouraGridViewComponent } from './moura-grid-view.component';

describe('MouraGridViewComponent', () => {
  let component: MouraGridViewComponent;
  let fixture: ComponentFixture<MouraGridViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MouraGridViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MouraGridViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
