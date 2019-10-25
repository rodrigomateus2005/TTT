import { Component, OnInit, Input } from '@angular/core';
import { MouraCampoComponent } from '../moura-campo/moura-campo.component';
import { MouraService } from '../../../../controls/services/moura.service';

@Component({
  selector: 'moura-combo-box-empresa',
  templateUrl: './moura-combo-box-empresa.component.html',
  styleUrls: ['./moura-combo-box-empresa.component.scss']
})
export class MouraComboBoxEmpresaComponent extends MouraCampoComponent {

  private listaVazia: any[] = [];
    public get ngDataSource(): any[] {
        if (this.mouraService.sessao) {
            return this.mouraService.sessao.empresas;
        } else {
            return this.listaVazia;
        }
    }

    public valueField: string;

    public textNull: string;

    private $textField;
    public get textField(): any {
        if (!this.$textField) {
            return 'Razao_Social';
        }
        return this.$textField;
    }
    public set textField(value: any) {
        this.$textField = value;
    }

    private $ngModelMoura;
    public get ngModelMoura(): any {
        return this.$ngModelMoura;
    }
    @Input()
    public set ngModelMoura(value: any) {
        this.$ngModelMoura = value;
    }

    private $permiteNulo;
    public get permiteNulo(): boolean {
        return this.$permiteNulo;
    }
    public set permiteNulo(value: boolean) {
        this.$permiteNulo = value;
    }

    public constructor(public mouraService: MouraService) {
        super();

        this.textField = 'Razao_Social';
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

    public preparaTextNull() {
        if (this.textNull) {
            return this.textNull;
        } else {
            return '-- SELECIONE --';
        }
    }

}
