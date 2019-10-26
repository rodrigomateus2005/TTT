import { Component, OnInit } from '@angular/core';
import { MouraPageLogadaComponent } from '../moura-page-logada/moura-page-logada.component';
import { MouraService } from 'sismoura-web-controls';

@Component({
  selector: 'moura-page-logada-cadastro',
  templateUrl: './moura-page-logada-cadastro.component.html',
  styleUrls: ['./moura-page-logada-cadastro.component.scss']
})
export class MouraPageLogadaCadastroComponent extends MouraPageLogadaComponent {

  public entity: any;

  public get campoCodigo(): string {
    return '';
  }

  public get ctrlCadastro(): MouraPageLogadaCadastroComponent {
    return this.ctrl as MouraPageLogadaCadastroComponent;
  }

  public constructor(mouraService: MouraService) {
    super(mouraService);

    this.ctrlCadastro.limpar();

    // (<angular.IScope>$scope).$watch(() => (this.ctrlCadastro.entity &&
    // this.ctrlCadastro.campoCodigo) ? this.ctrlCadastro.entity[this.campoCodigo] : null, (newValue, oldValue) => {
    //   this.onCodigoChanged(newValue, oldValue);
    // });
  }

  public clickLimpar() {
    this.ctrlCadastro.limpar();
  }

  public limpar() {
    this.ctrlCadastro.entity = {};

    this.ctrlCadastro.onDepoisLimpar();
  }

  public onDepoisLimpar() {

  }

  public onCodigoChanged(newValue, oldValue) {
    if (!this.ctrlCadastro.campoCodigo) { return; }

    let entidade: any = this.ctrlCadastro.entity;

    if (!entidade) {
      entidade = {};
    }

    if (newValue) {
      this.mouraService.executarConsultaPorCodigo(newValue.toString(), {}).then(resultado => {
        this.ctrlCadastro.entity = resultado;
      }).catch(err => {
        this.ctrlCadastro.limpar();
        console.log(err);
      });
    } else if (oldValue) {
      this.ctrlCadastro.limpar();
    }
  }

}
