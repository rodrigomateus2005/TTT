import { Component, ElementRef, Output, Input, EventEmitter, Inject, Renderer2, ViewChild, OnInit } from '@angular/core';
import { MouraControlComponent } from '../../core/moura-control/moura-control.component';
import { inject } from '@angular/core/testing';

@Component({
  selector: 'moura-button',
  templateUrl: './moura-button.component.html',
  styleUrls: ['./moura-button.component.scss'],
  providers: []
})
export class MouraButtonComponent extends MouraControlComponent {

  @Input()
  public text: string;

  @Output()
  public mouraClick = new EventEmitter();

  constructor() {
    super();
  }

  public click() {
    this.mouraClick.emit(null);
  }

}
