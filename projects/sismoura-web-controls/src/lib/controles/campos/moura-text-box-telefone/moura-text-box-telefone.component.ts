import { Component, OnInit, ElementRef } from '@angular/core';
import { MouraCampoComponent } from '../moura-campo/moura-campo.component';
import { MouraService } from '../../../services/moura.service';

@Component({
  selector: 'moura-text-box-telefone',
  templateUrl: './moura-text-box-telefone.component.html',
  styleUrls: ['./moura-text-box-telefone.component.scss']
})
export class MouraTextBoxTelefoneComponent extends MouraCampoComponent {

  public constructor(public mouraService: MouraService) {
    super();
  }

}
