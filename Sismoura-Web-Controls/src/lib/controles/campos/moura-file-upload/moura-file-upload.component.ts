import { Component, ElementRef } from '@angular/core';
import { MouraCampoComponent } from '../moura-campo/moura-campo.component';

@Component({
  selector: 'moura-file-upload',
  templateUrl: './moura-file-upload.component.html',
  styleUrls: ['./moura-file-upload.component.scss']
})
export class MouraFileUploadComponent extends MouraCampoComponent {

  constructor(elementRef: ElementRef) {
    super(elementRef);
  }

}
