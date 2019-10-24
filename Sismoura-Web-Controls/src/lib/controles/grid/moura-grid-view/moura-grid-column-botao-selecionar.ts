class MouraGridColumnBotaoSelecionar extends MouraGridColumnBotao {
  constructor() {
      super('selecionar');
      this.width = 50;
  }

  protected get botaoTemplate(): JQuery {
      return $('<input type="button" value="" class="gridDevExtremeBotaoSelecionar" />');
  }

  protected onClick(container, options) {
      if (this.mouraGridViewController.onSelecionouLinha) {
          this.mouraGridViewController.onSelecionouLinha({ $options: options });
      }

      this.mouraGridViewController.$scope.$applyAsync();
  }
}
