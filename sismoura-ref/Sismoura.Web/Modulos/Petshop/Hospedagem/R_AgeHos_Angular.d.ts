declare class R_AgeHos_Angular extends MouraPageRelacaoAngular {
    readonly AccordionFiltros: MouraAccordion;
    readonly grid: MouraGridViewJS;
    readonly grdAnimaisBaia: MouraGridViewJS;
    readonly txtPeriodo: MouraTextBoxPeriodo;
    readonly cboEmpresa: MouraComboBoxEmpresa;
    readonly cboTipoHospedagem: MouraComboBox;
    readonly accFiltro: MouraAccordion;
    readonly mdlAnimaisBaia: MouraModal;
    readonly lblAnimaisBaia: MouraLabel;
    readonly lblCapacidadeBaia: MouraLabel;
    protected Init(): void;
    protected OnGrdAnimaisBaiaSelecionouLinha(s: any, e: MouraGridViewJSClickBotaoLinhaEventArgs): void;
    OnPageLoad(): void;
    protected PreencherGrade(): void;
    OnGridClicouBotao(s: any, e: MouraGridViewJSClickBotaoLinhaEventArgs): void;
    private TratarData;
    GerarGrade(): void;
    private GerarGradeAnimaisBaia;
    protected LimparCampos(): void;
    protected ConfigurarGrade(): void;
    protected OnGrdAnimaisBaiaCellPrepared(s: any, e: MouraGridViewJSCellPreparedEventArgs): void;
    protected OnGridCellPrepared(s: any, e: MouraGridViewJSCellPreparedEventArgs): void;
}
declare var r_AgeHos_Angular: R_AgeHos_Angular;
//# sourceMappingURL=R_AgeHos_Angular.d.ts.map