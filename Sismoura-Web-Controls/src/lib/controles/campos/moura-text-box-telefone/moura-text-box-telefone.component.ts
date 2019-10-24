import { Component, OnInit, ElementRef } from '@angular/core';
import { MouraCampoComponent } from '../moura-campo/moura-campo.component';
import { MouraService } from 'src/lib/services/moura.service';

@Component({
  selector: 'moura-text-box-telefone',
  templateUrl: './moura-text-box-telefone.component.html',
  styleUrls: ['./moura-text-box-telefone.component.scss']
})
export class MouraTextBoxTelefoneComponent extends MouraCampoComponent {

  public constructor(elementRef: ElementRef, public mouraService: MouraService) {
    super(elementRef);
  }

}
