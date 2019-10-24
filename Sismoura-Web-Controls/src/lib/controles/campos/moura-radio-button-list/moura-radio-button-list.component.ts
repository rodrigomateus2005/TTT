import { Component, ElementRef } from '@angular/core';
import { MouraCampoComponent } from '../moura-campo/moura-campo.component';

@Component({
  selector: 'moura-radio-button-list',
  templateUrl: './moura-radio-button-list.component.html',
  styleUrls: ['./moura-radio-button-list.component.scss']
})
export class MouraRadioButtonListComponent extends MouraCampoComponent {

  public valueField: string;
  public textField: string;

  private $ngDataSource: any[];
  public get ngDataSource(): any[] {
      return this.$ngDataSource;
  }
  public set ngDataSource(value: any[]) {
      this.$ngDataSource = value;
  }

  private $ngModelMoura;
  public get ngModelMoura(): any {
      return this.$ngModelMoura;
  }
  public set ngModelMoura(value: any) {
      this.$ngModelMoura = value;
  }

  private $colunas;
  public get colunas(): number {
      return this.$colunas;
  }
  public set colunas(value: number) {
      value = Math.floor(value);

      if (value < 1) {
          value = 1;
      } else if (value === 5) {
          value = 6;
      } else if (value > 6) {
          value = 12;
      }

      this.$colunas = value;
  }

  public get scopeId(): number {
    return 0;
  }

  public get cssColunasRadio(): string {
      const retorno = 'col-sm-' + (12 / this.colunas).toString();

      return retorno;
  }

  constructor() {
    super();
  }

  public preparaValue(item: any) {
    if (this.valueField) {
        return item[this.valueField];
    } else {
        return item;
    }
}

public preparaText(item: any) {
    if (this.textField) {
        return item[this.textField];
    } else {
        return item;
    }
}

}
