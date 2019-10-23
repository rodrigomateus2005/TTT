import { Component, ElementRef, Output } from '@angular/core';
import { MouraControlComponent } from '../../core/moura-control/moura-control.component';
import { EventEmitter } from 'events';

@Component({
  selector: 'moura-button',
  templateUrl: './moura-button.component.html',
  styleUrls: ['./moura-button.component.scss']
})
export class MouraButtonComponent extends MouraControlComponent {

  @Output()
  public mouraClick = new EventEmitter();

  constructor(elementRef: ElementRef) {
    super(elementRef);
  }

  public click() {
    this.mouraClick.emit(null);
  }

}
