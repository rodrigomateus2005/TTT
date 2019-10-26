import { Component, OnInit } from '@angular/core';
import { MouraPageLogadaComponent } from '../core/moura-page-logada/moura-page-logada.component';
import { MouraService } from 'sismoura-web-controls';

@Component({
  selector: 'principal-page',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.scss']
})
export class PrincipalComponent extends MouraPageLogadaComponent {

  public get titulo(): string {
    return 'Principal';
  }

  public get nomeTela(): string {
    return 'Principal';
  }

  public get nomeModulo(): string {
    return 'Retaguarda';
  }

  // @ViewChild("modalTeste")
  // public modalTeste: MouraModalController;


  public constructor(mouraService: MouraService) {
    super(mouraService);
  }
}
