import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MouraSMSComponent } from './moura-sms.component';

describe('MouraSMSComponent', () => {
  let component: MouraSMSComponent;
  let fixture: ComponentFixture<MouraSMSComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MouraSMSComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MouraSMSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
