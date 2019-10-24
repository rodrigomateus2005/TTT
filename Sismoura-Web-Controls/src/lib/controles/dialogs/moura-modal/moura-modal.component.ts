import { Component, ElementRef } from '@angular/core';
import { MouraControlComponent } from '../../core/moura-control/moura-control.component';

@Component({
  selector: 'moura-modal',
  templateUrl: './moura-modal.component.html',
  styleUrls: ['./moura-modal.component.scss']
})
export class MouraModalComponent extends MouraControlComponent {

  private resolve: () => void;
  private reject: (err) => void;

  private instance: any;

  public get divModal() {
    if (this.instance) {
      return this.instance.element;
    } else {
      return this.elementRef.nativeElement.children[0];
    }
  }

  private $draggable: boolean;
  public get draggable(): boolean {
    return this.$draggable;
  }
  public set draggable(value: boolean) {
    this.$draggable = value;

    if (this.instance) {
      $(this.divModal).dialog('option', 'draggable', value);
    }
  }

  private $fullScreen: boolean;
  public get fullScreen(): boolean {
    return this.$fullScreen;
  }
  public set fullScreen(value: boolean) {
    this.$fullScreen = value;

    if (this.instance) {
      this.atualizarTamanhos();
    }
  }

  private $titulo: string;
  public get titulo(): string {
    return this.$titulo;
  }
  public set titulo(value: string) {
    this.$titulo = value;
    if (this.instance) {
      $(this.divModal).dialog('option', 'title', value);
    }
  }

  constructor(elementRef: ElementRef) {
    super(elementRef);
  }

  public $postLink() {
    const dialogOptions: JQueryUI.DialogOptions = {
      autoOpen: false
      // , appendTo: this.$element[0]
      , title: this.titulo
      , modal: true
      , width: 500
      , height: 300
      , draggable: this.draggable
      , close: (event, ui) => {
        this.onClose();
      }
    };

    this.instance = $(this.divModal).dialog(dialogOptions).dialog("instance");
    // $(this.$element).appendTo("body");

    this.atualizarTamanhos();
  }

  private atualizarTamanhos() {
    if (this.fullScreen) {
      this.draggable = false;

      const w = $(window).width() - 10;
      const h = $(window).height();

      $(this.divModal).dialog('option', 'height', h);
      $(this.divModal).dialog('option', 'width', w);
    } else {

    }
  }

  public abrir(): Promise<any> {
    return new Promise((resolve, reject) => {
      $(this.divModal).dialog('open');

      this.resolve = resolve;
      this.reject = reject;
    });
  }

  public fechar(): void {
    $(this.divModal).dialog('close');
  }

  public onClose(): void {
    this.resolve();
  }
}
