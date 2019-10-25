import { Component, ElementRef, OnInit, Input, ViewChild } from '@angular/core';
import { MouraControlComponent } from '../../core/moura-control/moura-control.component';

@Component({
  selector: 'moura-modal',
  templateUrl: './moura-modal.component.html',
  styleUrls: ['./moura-modal.component.scss'],
  exportAs: 'mouraModal'
})
export class MouraModalComponent extends MouraControlComponent implements OnInit {

  @ViewChild('divModal', { static: true })
  public divModal: ElementRef;

  private resolve: () => void;
  private reject: (err) => void;

  private instance: any;

  private $draggable: boolean;
  public get draggable(): boolean {
    return this.$draggable;
  }
  @Input()
  public set draggable(value: boolean) {
    this.$draggable = value;

    if (this.instance) {
      $(this.divModal.nativeElement).dialog('option', 'draggable', value);
    }
  }

  private $fullScreen: boolean;
  public get fullScreen(): boolean {
    return this.$fullScreen;
  }
  @Input()
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
  @Input()
  public set titulo(value: string) {
    this.$titulo = value;
    if (this.instance) {
      $(this.divModal.nativeElement).dialog('option', 'title', value);
    }
  }

  constructor() {
    super();
  }

  ngOnInit(): void {
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

    this.instance = $(this.divModal.nativeElement).dialog(dialogOptions).dialog('instance');
    // $(this.$element).appendTo("body");

    this.atualizarTamanhos();
  }

  private atualizarTamanhos() {
    if (this.fullScreen) {
      this.draggable = false;

      const w = $(window).width() - 10;
      const h = $(window).height();

      $(this.divModal.nativeElement).dialog('option', 'height', h);
      $(this.divModal.nativeElement).dialog('option', 'width', w);
    } else {

    }
  }

  public abrir(): Promise<any> {
    return new Promise((resolve, reject) => {
      $(this.divModal.nativeElement).dialog('open');

      this.resolve = resolve;
      this.reject = reject;
    });
  }

  public fechar(): void {
    $(this.divModal.nativeElement).dialog('close');
  }

  public onClose(): void {
    this.resolve();
  }
}
