import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MouraMenuComponent } from './moura-menu.component';

describe('MouraMenuComponent', () => {
  let component: MouraMenuComponent;
  let fixture: ComponentFixture<MouraMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MouraMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MouraMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
