import { Component, ElementRef } from '@angular/core';
import { MouraControlComponent } from '../../core/moura-control/moura-control.component';

export enum TamanhosCampo {
  pequeno = 2
  , medio = 4
  , grande = 6
  , gigante = 8
  , full = 12
}

@Component({
  selector: 'moura-campo',
  templateUrl: './moura-campo.component.html',
  styleUrls: ['./moura-campo.component.scss']
})
export class MouraCampoComponent extends MouraControlComponent {

  public obrigatorio: boolean;
  public tamanhoCampo: TamanhosCampo;

  private $label: string;
  public get label(): string {
    return this.getLabel();
  }
  public set label(value: string) {
    this.$label = value;
  }

  public get ctrlCampo(): MouraCampoComponent {
    return this.ctrl as any;
  }

  public get cssTamanho(): string {
    if (!this.tamanhoCampo) {
      this.tamanhoCampo = TamanhosCampo.full;
    }
    return 'col-sm-' + this.tamanhoCampo;
  }

  public get labelControle(): string {
    let retorno = '';

    if (this.obrigatorio) {
      retorno += '* ';
    }

    retorno += this.label;

    return retorno;
  }

  constructor() {
    super();
    this.tamanhoCampo = TamanhosCampo.full;
  }

  protected getLabel(): string {
    return this.$label;
  }

}
