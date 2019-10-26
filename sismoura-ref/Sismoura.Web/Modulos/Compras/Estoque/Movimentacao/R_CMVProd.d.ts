declare class R_CMVProd extends MouraPageRelacaoAngular {
    AccordionFiltros: MouraAccordion;
    readonly cboEmpresa: MouraComboBoxEmpresa;
    readonly cboDeposito: MouraComboBox;
    readonly cboTipoCusto: MouraComboBox;
    readonly cboEstoqueFechamentoInicial: MouraComboBox;
    readonly cboEstoqueFechamentoFinal: MouraComboBox;
    readonly Grid: MouraGridViewJS;
    readonly lblTotalCMV: MouraLabel;
    readonly lblEstoqueInicial: MouraLabel;
    readonly lblValorEntrada: MouraLabel;
    readonly lblEstoqueFinal: MouraLabel;
    protected Init(): void;
    protected PintarGridNegativo(s: any, e: MouraGridViewJSCellPreparedEventArgs): void;
    OnPageLoad(): void;
    protected EmpresaChange(): void;
    protected LimparCampos(): void;
    protected PreencherGrade(): void;
}
declare const r_CMVProd: R_CMVProd;
//# sourceMappingURL=R_CMVProd.d.ts.map