import { Component, Input, ElementRef } from '@angular/core';
import { MouraCampoComponent } from '../moura-campo/moura-campo.component';

@Component({
  selector: 'moura-text-box-cep',
  templateUrl: './moura-text-box-cep.component.html',
  styleUrls: ['./moura-text-box-cep.component.scss']
})
export class MouraTextBoxCepComponent extends MouraCampoComponent {

  // public ngEndereco: SiSMoura.Core.Entity.MouraTextBoxCEPRetornoPesquisa;
  public ngEndereco: any;

  private $ngModelMoura;
  public get ngModelMoura(): any {
    return this.$ngModelMoura;
  }
  @Input()
  public set ngModelMoura(value: any) {
    this.$ngModelMoura = value;

    this.ngEndereco = null;
  }

  public constructor(elementRef: ElementRef, public mouraService: MouraService) {
    super(elementRef);
  }

  public clickBotaoProcurar() {
    this.executarProcuraCEP(this.ngModelMoura);
  }

  private executarProcuraCEP(cep: string): void {

    if (String.IsNullOrWhiteSpace(cep)) {
      return;
    }

    var param: any = { CEP: cep };

    var mostrarAlertaCep = () => {
      MostrarAlerta("Ocorreu um erro ao consultar o CEP.<br />Possíveis causas: Serviço indisponível / Cep não existe / Sem conexão com a internet");
    };

    this.mouraService.executarConsultaCEP(cep).then((retorno) => {
      if (retorno && retorno.EncontrouEndereco) {

        this.ngEndereco = retorno;
      } else {
        mostrarAlertaCep();
      }
    }).catch(erro => {
      mostrarAlertaCep();
    });
  }

}
