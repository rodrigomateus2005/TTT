import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MouraMenuItemComponent } from './moura-menu-item.component';

describe('MouraMenuItemComponent', () => {
  let component: MouraMenuItemComponent;
  let fixture: ComponentFixture<MouraMenuItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MouraMenuItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MouraMenuItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
