declare class R_LC_Lan_Fin extends MouraPageRelacaoAngular {
    readonly AccordionFiltros: MouraAccordion;
    readonly lblTermoAbertura: MouraLabel;
    readonly lblTexto1: MouraLabel;
    readonly lblTexto2: MouraLabel;
    readonly lblTermoEncerramento: MouraLabel;
    readonly lblTexto1Enc: MouraLabel;
    readonly lblTexto2Enc: MouraLabel;
    readonly lblTexto3Enc: MouraLabel;
    readonly lblTexto4Enc: MouraLabel;
    readonly lblTexto5Enc: MouraLabel;
    readonly cboEmpresa: MouraComboBoxEmpresa;
    readonly cboContaCorrente: MouraContaCorrenteCombo;
    readonly cboContaCorrenteRes: MouraContaCorrenteCombo;
    readonly cboMes: MouraComboBox;
    readonly cboAno: MouraComboBox;
    readonly cboAnoRes: MouraComboBox;
    readonly lblTexto3: MouraLabel;
    readonly lblTexto4: MouraLabel;
    readonly lblTexto5: MouraLabel;
    readonly lblTexto6: MouraLabel;
    readonly lblEndereco: MouraLabel;
    readonly lblCidade: MouraLabel;
    readonly lblCodAtiv: MouraLabel;
    readonly lblCNPJ: MouraLabel;
    readonly lblIE: MouraLabel;
    readonly lblLivro: MouraLabel;
    readonly lblLivroEncerramento: MouraLabel;
    readonly txtDataAbertura: MouraTextBoxData;
    readonly txtLivroAbertura: MouraTextBox;
    readonly txtDataEncerramento: MouraTextBoxData;
    readonly txtLivroEncerramento: MouraTextBox;
    readonly txtFolhaEncerramento: MouraTextBox;
    readonly grid: MouraGridViewJS;
    readonly gridResumo: MouraGridViewJS;
    readonly txtFolhaLan: MouraTextBox;
    readonly txtFolhaRes: MouraTextBox;
    OnPageLoad(): void;
    Init(): void;
    montandoLayoutTermoAbertura(): void;
    montandoLayoutTermoEncerramento(): void;
    protected ImprimirAberturaTermo(): void;
    protected ImprimirFechamentoTermo(): void;
    protected ImprimirLancamento(): void;
    protected ImprimirResumo(): void;
    GetInfEmpresa(): void;
    MudarLivroAbertura(): void;
    MudarDataAbertura(): void;
    MudarLivroEncerramento(): void;
    MudarDataEncerramento(): void;
    MudarFolhaEncerramento(): void;
    LimparCampos(): void;
    GerarLancamento(): boolean;
    GerarResumo(): boolean;
    protected OnGridCellPrepared(s: any, e: MouraGridViewJSCellPreparedEventArgs): void;
    protected OnGridResumoCellPrepared(s: any, e: MouraGridViewJSCellPreparedEventArgs): void;
    OnGridColumns(): void;
}
declare const r_LC_Lan_Fin: R_LC_Lan_Fin;
//# sourceMappingURL=R_LC_Lan_Fin.d.ts.map