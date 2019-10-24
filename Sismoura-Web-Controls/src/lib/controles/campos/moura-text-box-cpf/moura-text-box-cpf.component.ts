import { Component, ElementRef, Input } from '@angular/core';
import { MouraCampoComponent } from '../moura-campo/moura-campo.component';
import { MouraService } from 'src/lib/services/moura.service';

@Component({
  selector: 'moura-text-box-cpf',
  templateUrl: './moura-text-box-cpf.component.html',
  styleUrls: ['./moura-text-box-cpf.component.scss']
})
export class MouraTextBoxCPFComponent extends MouraCampoComponent {

  public isCpf: boolean;

  private $ngModelMoura;
  public get ngModelMoura(): any {
    return this.$ngModelMoura;
  }
  @Input()
  public set ngModelMoura(value: any) {
    this.$ngModelMoura = value;
  }

  public get mascaraCpfCnpj(): string {
    if (this.isCpf) {
      return '999.999.999-99';
    } else {
      return '99.999.999/9999-99';
    }
  }

  public constructor(elementRef: ElementRef, public mouraService: MouraService) {
    super(elementRef);
  }

  public getLabel(): string {
    if (super.getLabel()) {
      return super.getLabel();
    } else {
      if (this.isCpf) {
        return 'CPF';
      } else {
        return 'CNPJ';
      }
    }
  }

  public clickBotaoProcurar() {

  }

}
