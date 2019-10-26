declare class R_CVip extends MouraPageRelacaoAngular {
    readonly AccordionFiltros: MouraAccordion;
    readonly grid: MouraGridViewJS;
    readonly txtPeriodo: MouraTextBoxPeriodo;
    readonly cboTipoHospedagem: MouraComboBox;
    readonly lstEmpresa: MouraListBoxEmpresa;
    OnPageLoad(): void;
    protected Init(): void;
    protected LimparCampos(): void;
    protected PreencherGrade(): void;
    private GetDadosRelacao;
}
declare var r_CVip: R_CVip;
//# sourceMappingURL=R_CVip.d.ts.map