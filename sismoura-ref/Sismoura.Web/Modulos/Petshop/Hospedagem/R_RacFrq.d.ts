declare class R_RacFrq extends MouraPageRelacaoAngular {
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
    private ValidadarFiltros;
}
declare var r_RacFrq: R_RacFrq;
//# sourceMappingURL=R_RacFrq.d.ts.map