import { Component, OnInit, ElementRef, Input } from '@angular/core';
import { MouraCampoComponent } from '../moura-campo/moura-campo.component';

enum TextBoxTipo {
  texto = 0
  , numerico = 1
  , mascara = 2
}

enum TextBoxCasasDecimais {
  quantidade = -3
  , valor = -2
  , manipulacao = -1
  , zero = 0
  , uma = 1
  , duas = 2
  , tres = 3
  , quatro = 4
  , cinco = 5
  , seis = 6
}

@Component({
  selector: 'moura-text-box',
  templateUrl: './moura-text-box.component.html',
  styleUrls: ['./moura-text-box.component.scss']
})
export class MouraTextBoxComponent extends MouraCampoComponent {

  public multLine: boolean;
  public tipo: TextBoxTipo;
  public casasDecimais: TextBoxCasasDecimais;
  public mascara: string;

  @Input()
  public ngModelMoura: any;

  public get casasDecimaisSoNumeros(): number {
    if (this.casasDecimais === TextBoxCasasDecimais.valor) {
      return 2;
    } else if (this.casasDecimais === TextBoxCasasDecimais.quantidade) {
      return 2;
    } else if (this.casasDecimais === TextBoxCasasDecimais.manipulacao) {
      return 4;
    } else {
      return this.casasDecimais;
    }
  }

  constructor() {
    super();
  }

}
