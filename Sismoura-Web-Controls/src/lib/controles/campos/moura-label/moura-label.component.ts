import { Component, OnInit, Input, ElementRef } from '@angular/core';
import { MouraCampoComponent } from '../moura-campo/moura-campo.component';

@Component({
  selector: 'moura-label',
  templateUrl: './moura-label.component.html',
  styleUrls: ['./moura-label.component.scss']
})
export class MouraLabelComponent extends MouraCampoComponent {

  private $ngModelMoura;
  public get ngModelMoura(): any {
    return this.$ngModelMoura;
  }
  @Input()
  public set ngModelMoura(value: any) {
    this.$ngModelMoura = value;
  }

  constructor(elementRef: ElementRef) {
    super(elementRef);
  }

}
