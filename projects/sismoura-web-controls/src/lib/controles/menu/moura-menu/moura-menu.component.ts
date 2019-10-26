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

  public constructor(public mouraService: MouraService) {
    super();
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

      for (const menu of menus) {
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
