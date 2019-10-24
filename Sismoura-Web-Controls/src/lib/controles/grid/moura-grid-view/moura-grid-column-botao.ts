import { EventEmitter } from '@angular/core';
import { MouraGridColumn } from './moura-grid-column';

export class MouraGridColumnBotao extends MouraGridColumn {

  public click = new EventEmitter();

  commandName: string;
  buttonText: string;

  protected getOptDevExpressColumn(): DevExpress.ui.dxDataGridColumn {
      const opt: DevExpress.ui.dxDataGridColumn = super.getOptDevExpressColumn();

      Object.assign(opt, {
          cellTemplate: (container, options) => this.templateCell(container, options)
      } as DevExpress.ui.dxDataGridColumn);

      return opt;
  }

  protected settarTodasAsPropriedades(): void {
      super.settarTodasAsPropriedades();

      this.setColumnOption('cellTemplate', (container, options) => this.templateCell(container, options));
  }

  protected get botaoTemplate(): JQuery {
      return $('<input type="button" value="' + this.buttonText + '" />');
  }

  public templateCell(container, options) {
      if (options.rowType === 'data') {
          const botao = this.botaoTemplate;

          botao.on('click', () => {
              this.onClick(container, options);
          });

          botao.appendTo(container);
      }
  }

  protected onClick(container, options) {
      const args: MouraGridViewJSClickBotaoLinhaEventArgs = {} as any;

      args.buttonText = this.buttonText;
      args.columnIndex = options.columnIndex;
      args.commandName = this.commandName;
      args.data = options.data;
      args.rowIndex = options.rowIndex;
      // if (!options.value && !String.IsNullOrWhiteSpace(this.CampoID) && options.data[this.CampoID]) {
      //    args.rowKey = options.data[this.CampoID];
      // } else {
      args.rowKey = options.value;
      // }
      args.cellElement = options.cellElement;

      this.click.emit(args);

      // this.mouraGridViewController.$scope.$applyAsync();
  }

}
