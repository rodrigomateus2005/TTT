declare class R_Contra_Angular extends MouraPageRelacaoAngular {
    readonly AccordionFiltros: MouraAccordion;
    readonly Grid: MouraGridViewJS;
    readonly optTipoData: MouraRadioButtonList;
    readonly txtPeriodo: MouraTextBoxPeriodo;
    readonly txtVendedor: MouraTextBoxProcura;
    readonly txtCliente: MouraTextBoxProcura;
    readonly lstEmpresa: MouraListBoxEmpresa;
    readonly chkSomenteCortesias: MouraCheckBox;
    readonly chkSomenteEmitidos: MouraCheckBox;
    readonly chkDiscriminarParcelas: MouraCheckBox;
    readonly lblContratosParcelasPendentes: MouraLabel;
    readonly lblTotalFinal: MouraLabel;
    OnPageLoad(): void;
    Init(): void;
    LimparCampos(): void;
    protected txtVendedor_Procurou(s: any): void;
    protected txtCliente_Procurou(s: any): void;
    protected PreencherGrade(): void;
}
declare const r_Contra_Angular: R_Contra_Angular;
//# sourceMappingURL=R_Contra_Angular.d.ts.map