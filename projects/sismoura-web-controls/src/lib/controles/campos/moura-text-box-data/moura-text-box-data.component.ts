import { Component, ElementRef, Input } from '@angular/core';
import { MouraCampoComponent } from '../moura-campo/moura-campo.component';

@Component({
  selector: 'moura-text-box-data',
  templateUrl: './moura-text-box-data.component.html',
  styleUrls: ['./moura-text-box-data.component.scss']
})
export class MouraTextBoxDataComponent extends MouraCampoComponent {

  private $ngModelMoura;
  public get ngModelMoura(): any {
    return this.$ngModelMoura;
  }
  @Input()
  public set ngModelMoura(value: any) {
    this.$ngModelMoura = value;
  }

  public constructor() {
    super();
  }

}
