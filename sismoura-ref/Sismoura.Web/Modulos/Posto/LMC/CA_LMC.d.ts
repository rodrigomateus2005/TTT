declare class CA_LMC extends MouraPageAngular {
    readonly txtNumOrdem: MouraTextBox;
    readonly txtData: MouraTextBoxData;
    readonly txtPaginas: MouraTextBox;
    readonly txtPaginaInicial: MouraTextBox;
    readonly txtPaginaFinal: MouraTextBox;
    readonly txtOperando: MouraTextBox;
    readonly txtCapacidade: MouraTextBox;
    readonly cboEmpresa: MouraComboBoxEmpresa;
    OnPageLoad(): void;
    protected Init(): void;
    protected OnClickBotaoLimpar(): void;
    protected OnClickBotaoImprimir(): void;
}
declare var cA_LMC: CA_LMC;
//# sourceMappingURL=CA_LMC.d.ts.map