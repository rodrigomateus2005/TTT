import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MouraFileUploadComponent } from './moura-file-upload.component';

describe('MouraFileUploadComponent', () => {
  let component: MouraFileUploadComponent;
  let fixture: ComponentFixture<MouraFileUploadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MouraFileUploadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MouraFileUploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
