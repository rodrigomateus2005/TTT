import { Component, ElementRef, ViewChild, Input } from '@angular/core';
import { MouraCampoComponent } from '../moura-campo/moura-campo.component';
import { JqueryUiSelectMenuDirective } from 'src/lib/diretivas/jquery-ui-select-menu.directive';

@Component({
  selector: 'moura-combo-box',
  templateUrl: './moura-combo-box.component.html',
  styleUrls: ['./moura-combo-box.component.scss']
})
export class MouraComboBoxComponent extends MouraCampoComponent {

  private $jqueryUiSelectMenu: JqueryUiSelectMenuDirective;
  public get jqueryUiSelectMenu(): JqueryUiSelectMenuDirective {
    return this.$jqueryUiSelectMenu;
  }
  @ViewChild('jqueryselect', { static: false })
  public set jqueryUiSelectMenu(value: JqueryUiSelectMenuDirective) {
    this.$jqueryUiSelectMenu = value;
  }

  public valueField: string;
  public textField: string;
  public textNull: string;

  private $ngDataSource: any[];
  public get ngDataSource(): any[] {
    return this.$ngDataSource;
  }
  @Input()
  public set ngDataSource(value: any[]) {
    this.$ngDataSource = value;
  }

  private $ngModelMoura;
  public get ngModelMoura(): any {
    return this.$ngModelMoura;
  }
  @Input()
  public set ngModelMoura(value: any) {
    this.$ngModelMoura = value;
  }

  private $permiteNulo;
  public get permiteNulo(): boolean {
    return this.$permiteNulo;
  }
  @Input()
  public set permiteNulo(value: boolean) {
    this.$permiteNulo = value;
  }

  constructor(elementRef: ElementRef) {
    super(elementRef);
  }

  public preparaValue(item: any) {
    if (this.valueField) {
      return item[this.valueField];
    } else {
      return item;
    }
  }

  public preparaText(item: any) {
    if (this.textField) {
      return item[this.textField];
    } else {
      return item;
    }
  }

  public preparaTextNull() {
    if (this.textNull) {
      return this.textNull;
    } else {
      return '';
    }
  }

  public onChange() {
    // this.jqueryUiSelectMenu.refresh();
  }

}
