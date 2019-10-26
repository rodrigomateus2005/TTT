declare class R_ConOng extends MouraPageRelacaoAngular {
    readonly AccordionFiltros: MouraAccordion;
    readonly hdnRacas: HTMLInputElement;
    readonly grid: MouraGridViewJS;
    readonly txtPeriodo: MouraTextBoxPeriodo;
    readonly lstEmpresa: MouraListBoxEmpresa;
    readonly cboRaca: MouraComboBox;
    readonly cboEspecie: MouraComboBox;
    readonly cboSituacao: MouraComboBox;
    readonly cboTipoPeriodo: MouraComboBox;
    readonly txtOng: MouraTextBoxProcura;
    OnPageLoad(): void;
    protected Init(): void;
    private OnPreencheuGrid;
    private onCboEspecie_Changed;
    protected LimparCampos(): void;
    protected PreencherGrade(): void;
    private GetDadosRelacao;
    protected OnGrdClicouBotao(s: any, e: MouraGridViewJSClickBotaoLinhaEventArgs): void;
}
declare var r_ConOng: R_ConOng;
//# sourceMappingURL=R_ConOng.d.ts.map