import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MouraTabPageComponent } from './moura-tab-page.component';

describe('MouraTabPageComponent', () => {
  let component: MouraTabPageComponent;
  let fixture: ComponentFixture<MouraTabPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MouraTabPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MouraTabPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
