import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MouraTabPanelComponent } from './moura-tab-panel.component';

describe('MouraTabPanelComponent', () => {
  let component: MouraTabPanelComponent;
  let fixture: ComponentFixture<MouraTabPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MouraTabPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MouraTabPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
