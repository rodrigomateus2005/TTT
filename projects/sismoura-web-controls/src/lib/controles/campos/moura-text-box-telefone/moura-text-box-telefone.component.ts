import { Component, OnInit, ElementRef, Input } from '@angular/core';
import { MouraCampoComponent } from '../moura-campo/moura-campo.component';
import { MouraService } from '../../../services/moura.service';

@Component({
  selector: 'moura-text-box-telefone',
  templateUrl: './moura-text-box-telefone.component.html',
  styleUrls: ['./moura-text-box-telefone.component.scss']
})
export class MouraTextBoxTelefoneComponent extends MouraCampoComponent {

  private $ngModelMouraDdd;
  public get ngModelMouraDdd(): any {
    return this.$ngModelMouraDdd;
  }
  @Input()
  public set ngModelMouraDdd(value: any) {
    this.$ngModelMouraDdd = value;
  }

  private $ngModelMouraTelefone;
  public get ngModelMouraTelefone(): any {
    return this.$ngModelMouraTelefone;
  }
  @Input()
  public set ngModelMouraTelefone(value: any) {
    this.$ngModelMouraTelefone = value;
  }

  public constructor(public mouraService: MouraService) {
    super();
  }

}
