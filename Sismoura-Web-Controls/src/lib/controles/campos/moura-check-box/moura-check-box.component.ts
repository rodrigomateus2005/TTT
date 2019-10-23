import { Component, ElementRef, Input } from '@angular/core';
import { MouraCampoComponent } from '../moura-campo/moura-campo.component';

@Component({
  selector: 'moura-check-box',
  templateUrl: './moura-check-box.component.html',
  styleUrls: ['./moura-check-box.component.scss']
})
export class MouraCheckBoxComponent extends MouraCampoComponent {

  private $ngModelMoura: any;
  public get ngModelMoura(): any {
    return this.$ngModelMoura;
  }
  @Input()
  public set ngModelMoura(value: any) {
    this.$ngModelMoura = value;
  }

  private $text: any;
  public get text(): any {
    return this.$text;
  }
  @Input()
  public set text(value: any) {
    this.$text = value;
  }

  constructor(elementRef: ElementRef) {
    super(elementRef);
  }

}
