import { Component, OnInit, Input } from '@angular/core';
import { MouraService, TamanhosCampo } from 'sismoura-web-controls';

@Component({
  selector: 'moura-page',
  templateUrl: './moura-page.component.html',
  styleUrls: ['./moura-page.component.scss']
})
export class MouraPageComponent implements OnInit {


  @Input()
  public base: MouraPageComponent;

  public get ctrl() {
    return this.base ? this.base : this;
  }

  public get TamanhosCampo(): any {
    return TamanhosCampo;
  }

  public get TextBoxCasasDecimais(): any {
    // return TextBoxCasasDecimais;
    return null;
  }

  public get TextBoxTipo(): any {
    // return TextBoxTipo;
    return null;
  }

  public constructor(public mouraService: MouraService) {
  }

  ngOnInit(): void {
  }

}

