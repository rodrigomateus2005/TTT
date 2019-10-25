import { Component, OnInit, ElementRef } from '@angular/core';
import { MouraControlComponent } from '../../core/moura-control/moura-control.component';

@Component({
  selector: 'moura-accordion',
  templateUrl: './moura-accordion.component.html',
  styleUrls: ['./moura-accordion.component.scss']
})
export class MouraAccordionComponent  extends MouraControlComponent {

  private $titulo: string;
  public get titulo(): string {
      return this.$titulo;
  }
  public set titulo(value: string) {
      this.$titulo = value;
  }

  private $expandido: boolean;
  public get expandido(): boolean {
      if (this.$expandido == null || this.$expandido === undefined) {
          return true;
      }
      return this.$expandido;
  }
  public set expandido(value: boolean) {
      this.$expandido = value;
  }

  public get maisMenos(): string {
      if (this.expandido) {
          return '-';
      } else {
          return '+';
      }
  }

  public constructor() {
    super();
  }

  public toggle() {
      this.expandido = !this.expandido;
  }

}
