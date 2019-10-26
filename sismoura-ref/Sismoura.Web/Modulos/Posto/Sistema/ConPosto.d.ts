declare class ConPosto extends MouraPageAngular {
    readonly cboTipoLMC: MouraComboBox;
    readonly txtCombustivel: MouraTextBox;
    readonly chkConsPlaca: MouraCheckBox;
    readonly hdnCodConfiguracao: HTMLInputElement;
    OnPageLoad(): void;
    protected Init(): void;
    protected PreencherTela(): void;
    protected ClicouBtnAtualizarConfig(): void;
}
declare var conPosto: ConPosto;
//# sourceMappingURL=ConPosto.d.ts.map