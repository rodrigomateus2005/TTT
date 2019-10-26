import { Component, OnInit } from '@angular/core';
import { MouraPageComponent } from '../moura-page/moura-page.component';
import { MouraService } from 'sismoura-web-controls';

@Component({
  selector: 'moura-page-logada',
  templateUrl: './moura-page-logada.component.html',
  styleUrls: ['./moura-page-logada.component.scss']
})
export class MouraPageLogadaComponent extends MouraPageComponent {

  public isMenuAberto: boolean;

    public get nomeTela(): string {
        return '';
    }

    public get nomeModulo(): string {
        return '';
    }

    public get UsuarioNome(): string {
        if (this.mouraService && this.mouraService.sessao) {
            return this.mouraService.sessao.usuario.Abreviacao;
        }

        return '';
    }

    public get UsuarioEmpresa(): string {
        if (this.mouraService && this.mouraService.sessao) {
            return this.mouraService.sessao.empresa.Fantasia;
        }

        return '';
    }

    public get ctrlLogado(): MouraPageLogadaComponent {
        return this.ctrl as MouraPageLogadaComponent;
    }

    public get titulo(): string {
        return '';
    }

    public constructor(mouraService: MouraService) {
        super(mouraService);
        this.isMenuAberto = true;
    }

    public toggleMenu() {
        this.isMenuAberto = !this.isMenuAberto;
    }

    public abrirMenu() {
        this.isMenuAberto = true;
    }

    public fecharMenu() {
        this.isMenuAberto = false;
    }

    public abrirAjudaTela() {
        let nomeTela = this.nomeTela;
        const nomeModulo = this.nomeModulo;

        if (nomeTela.endsWith(".aspx")) {
            nomeTela = nomeTela.substr(0, nomeTela.length - 5);
        }

        window.open(`http://jnmoura.com.br/Helper/Helper.aspx?Tela=${nomeTela}&Modulo=${nomeModulo}`, '_blank');
    }

    public clickDeslogar() {
        this.mouraService.deslogarSismoura();
    }

}
