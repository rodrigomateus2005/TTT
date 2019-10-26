declare class C_RecCar extends MouraPageCadastroAngular<SiSMoura.Core.Entity.Cartao_Recebido> {
    readonly txtCodigo: MouraTextBoxProcura;
    readonly grid: MouraGridViewJS;
    readonly cboCartao: MouraComboBox;
    readonly txtValor: MouraTextBox;
    readonly txtValorFinal: MouraTextBox;
    readonly hdnValorDescontado: HTMLInputElement;
    readonly hdnJuros: HTMLInputElement;
    protected Init(): void;
    protected OnExcluiuSucesso(s: any, e: any): void;
    protected OnDepoisPesquisar(s: any, e: MouraDepoisPesquisarEventArgs): void;
    protected OnTextBoxValorChange(): void;
    protected OnComboBoxCartaoChange(): void;
    protected OnTextBoxValorFinalChange(): void;
    protected OnAntesSetEntidade(eventArg: MouraEntidadeCancelavel<SiSMoura.Core.Entity.Cartao_Recebido>): void;
    protected onGridSelecionouLinha(s: any, e: MouraGridViewJSClickBotaoLinhaEventArgs): void;
    protected OnAntesGravar(): boolean;
    private ValorDescontado;
}
declare var c_RecCar: C_RecCar;
//# sourceMappingURL=C_RecCar.d.ts.map