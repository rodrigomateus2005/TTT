declare class R_MensAtras extends MouraPageRelacaoAngular {
    readonly AccordionFiltros: MouraAccordion;
    readonly grid: MouraGridViewJS;
    readonly lstEmpresa: MouraListBoxEmpresa;
    readonly cboRaca: MouraComboBox;
    readonly txtPeriodo: MouraTextBoxPeriodo;
    OnPageLoad(): void;
    protected Init(): void;
    protected OnGrdClicouBotao(s: any, e: MouraGridViewJSClickBotaoLinhaEventArgs): void;
    private OnPreencheuGrid;
    protected LimparCampos(): void;
    protected PreencherGrade(): void;
    private GetDadosRelacao;
}
declare var r_MensAtras: R_MensAtras;
//# sourceMappingURL=R_MensAtras.d.ts.map