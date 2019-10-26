declare class CF_LMC extends MouraPageAngular {
    readonly txtNumOrdem: MouraTextBox;
    readonly txtData: MouraTextBoxData;
    readonly txtPaginas: MouraTextBox;
    readonly txtPaginaInicial: MouraTextBox;
    readonly txtPaginaFinal: MouraTextBox;
    readonly cboEmpresa: MouraComboBoxEmpresa;
    OnPageLoad(): void;
    protected Init(): void;
    protected OnClickBotaoLimpar(): void;
    protected OnClickBotaoImprimir(): void;
}
declare var cF_LMC: CF_LMC;
//# sourceMappingURL=CF_LMC.d.ts.map