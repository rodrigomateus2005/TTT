import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { MouraTabPageComponent } from '../moura-tab-page/moura-tab-page.component';
import { MouraControlComponent } from '../../core/moura-control/moura-control.component';

@Component({
  selector: 'moura-tab-panel',
  templateUrl: './moura-tab-panel.component.html',
  styleUrls: ['./moura-tab-panel.component.scss']
})
export class MouraTabPanelComponent extends MouraControlComponent {

  @ViewChild('divTab', { static: true })
  public divTab: ElementRef;

  private instance: JQueryUI.Tabs;

  private $tabs: MouraTabPageComponent[];
  public get tabs(): MouraTabPageComponent[] {
    return this.$tabs;
  }

  private get elementTab(): JQuery {
    return $(this.divTab.nativeElement).children();
  }

  public constructor() {
    super();
  }

  public recarregar(): void {
    if (this.instance) {
      this.elementTab.tabs('refresh');
    } else {
      this.elementTab.tabs();
      this.instance = ($(this.divTab.nativeElement as any).children().tabs('instance') as any) as JQueryUI.Tabs;
    }
  }

  public adicionarTab(tab: MouraTabPageComponent): void {
    if (!this.tabs) {
      this.$tabs = [];
    }
    if (this.tabs.filter(x => x === tab).length === 0) {
      this.tabs.push(tab);
      setTimeout(() => {
        this.recarregar();
      }, 0, false);
    } else {
      this.recarregar();
    }
  }

  public selecionar(tab: MouraTabPageComponent) {
    if (this.instance) {
      this.elementTab.tabs('option', 'active', this.tabs.indexOf(tab));
    }
  }

  public getUrlFull(): string {
    return location.toString();
  }

}
