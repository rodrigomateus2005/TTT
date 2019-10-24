import { Component, OnInit, ElementRef } from '@angular/core';
import { MouraTabPanelComponent } from '../moura-tab-panel/moura-tab-panel.component';
import { MouraControlComponent } from '../../core/moura-control/moura-control.component';

@Component({
  selector: 'moura-tab-page',
  templateUrl: './moura-tab-page.component.html',
  styleUrls: ['./moura-tab-page.component.scss']
})
export class MouraTabPageComponent extends MouraControlComponent {

  private $mouraTabPanelCtrl: MouraTabPanelComponent;
  private get mouraTabPanelCtrl(): MouraTabPanelComponent {
      return this.$mouraTabPanelCtrl;
  }
  private set mouraTabPanelCtrl(value: MouraTabPanelComponent) {
      this.$mouraTabPanelCtrl = value;
      this.mouraTabPanelCtrl.adicionarTab(this);
  }

  private $titulo: string;
  public get titulo(): string {
      return this.$titulo;
  }
  public set titulo(value: string) {
      this.$titulo = value;
  }

  public get IdTab(): string {
      return 'tab-page-' + this.uniqueID;
  }

  public constructor(elementRef: ElementRef) {
    super(elementRef);
  }

  public selecionar() {
      if (this.mouraTabPanelCtrl) {
          this.mouraTabPanelCtrl.selecionar(this);
      }
  }

}
