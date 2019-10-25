import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MouraEmailComponent } from './moura-email.component';

describe('MouraEmailComponent', () => {
  let component: MouraEmailComponent;
  let fixture: ComponentFixture<MouraEmailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MouraEmailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MouraEmailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
