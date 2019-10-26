declare class R_ParcInd extends MouraPageRelacaoAngular {
    readonly AccordionFiltros: MouraAccordion;
    readonly grid: MouraGridViewJS;
    readonly txtPeriodo: MouraTextBoxPeriodo;
    readonly cboTipoHospedagem: MouraComboBox;
    readonly cboEmpresa: MouraComboBoxEmpresa;
    OnPageLoad(): void;
    protected Init(): void;
    protected LimparCampos(): void;
    protected OnGridCellPrepared(s: any, e: MouraGridViewJSCellPreparedEventArgs): void;
    protected PreencherGrade(): void;
    private GetDadosRelacao;
}
declare var r_ParcInd: R_ParcInd;
//# sourceMappingURL=R_ParcInd.d.ts.map