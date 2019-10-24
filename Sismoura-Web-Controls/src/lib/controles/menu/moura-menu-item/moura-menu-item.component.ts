import { Component, OnInit, ElementRef } from '@angular/core';
import { MouraControlComponent } from '../../core/moura-control/moura-control.component';

@Component({
  selector: 'moura-menu-item',
  templateUrl: './moura-menu-item.component.html',
  styleUrls: ['./moura-menu-item.component.scss']
})
export class MouraMenuItemComponent extends MouraControlComponent {

  private $menu: any;
  public get menu(): any {
    return this.$menu;
  }
  public set menu(value: any) {
    this.$menu = value;
  }

  private $aberto: boolean;
  public get aberto(): boolean {
    return this.$aberto;
  }
  public set aberto(value: boolean) {
    this.$aberto = value;
  }

  public get temFilhos(): boolean {
    return this.menu.MenusFilhos && this.menu.MenusFilhos.length;
  }

  public get urlMenu(): string {
    if (this.temFilhos) {
      return null;
    }

    let retorno = this.menu.URL;

    if (retorno && retorno.startsWith('~/')) {
      retorno = retorno.substr(2);
    }

    return retorno;
  }

  public get icone(): string {
    if (!this.temFilhos) {
      return null;
    }

    if (this.aberto) {
      return 'Images/menuMenos.png';
    } else {
      if (this.menu.Titulo.toLowerCase() === 'favoritos') {
        return 'Images/imgDestaque.png';
      } else {
        return 'Images/imgMaisMenu.png';
      }
    }
  }

  public get nivelCss(): string {
    let nivel = this.nivel;

    if (nivel > 5) {
      nivel = 5;
    }

    return 'menuNivel' + nivel.toString();
  }

  public get nivel(): number {
    let parent = this.menu.parent;
    let retorno = 1;

    while (parent) {
      parent = parent.parent;
      retorno++;
    }

    return retorno;
  }

  public constructor(elementRef: ElementRef) {
    super(elementRef);

    this.aberto = false;
  }

  public clickMenu() {
    if (this.temFilhos) {
      this.aberto = !this.aberto;
    } else {
      // TODO
    }
  }

}
