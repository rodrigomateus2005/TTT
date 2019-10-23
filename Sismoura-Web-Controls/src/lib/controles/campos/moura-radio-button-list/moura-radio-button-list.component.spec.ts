import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MouraRadioButtonListComponent } from './moura-radio-button-list.component';

describe('MouraRadioButtonListComponent', () => {
  let component: MouraRadioButtonListComponent;
  let fixture: ComponentFixture<MouraRadioButtonListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MouraRadioButtonListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MouraRadioButtonListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
