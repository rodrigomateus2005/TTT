import { Component, ElementRef } from '@angular/core';
import { MouraControlComponent } from '../../core/moura-control/moura-control.component';
import { MouraService } from '../../../services/moura.service';

@Component({
  selector: 'moura-menu',
  templateUrl: './moura-menu.component.html',
  styleUrls: ['./moura-menu.component.scss']
})
export class MouraMenuComponent extends MouraControlComponent {

  private $procurar: string;
  public get procurar(): string {
      return this.$procurar;
  }
  public set procurar(value: string) {
      this.$procurar = value;
  }

  public constructor(elementRef: ElementRef, public mouraService: MouraService) {
    super(elementRef);
  }

  public getMenus(): any[] {
      let menus: any[];
      if (this.mouraService.sessao) {
          if (this.procurar && !String.IsNullOrWhiteSpace(this.procurar)) {
              menus = this.filtrarMenus(this.mouraService.sessao.menus, null);
          } else {
              menus = this.mouraService.sessao.menus;
          }

      }
      return menus;
  }

  public filtrarMenus(menus: any[], retorno: any[]): any[] {
      if (!retorno) {
          retorno = [];
      }

      for (let i = 0; i < menus.length; i++) {
          const menu = menus[i];

          if (menu.MenusFilhos && menu.MenusFilhos.length) {
              this.filtrarMenus(menu.MenusFilhos, retorno);
          } else {
              if (menu.Titulo.ConverterCaracter()
              .toLowerCase()
              .indexOf(this.procurar.ConverterCaracter().toLowerCase()) > -1) { // Procura Aki
                  retorno.push(menu);
              }
          }
      }

      return retorno;
  }

}
