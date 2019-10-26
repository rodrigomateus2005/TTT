import { MouraGridColumnBotao } from './moura-grid-column-botao';

export class MouraGridColumnBotaoSelecionar extends MouraGridColumnBotao {
  constructor() {
      super('selecionar');
      this.width = 50;
  }

  protected get botaoTemplate(): JQuery {
      return $('<input type="button" value="" class="gridDevExtremeBotaoSelecionar" />');
  }

  protected onClick(container, options) {
      if (this.mouraGridViewController.selecionouLinha) {
          this.mouraGridViewController.selecionouLinha.emit({ $options: options });
      }

      // this.mouraGridViewController.$scope.$applyAsync();
  }
}
