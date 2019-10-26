declare class C_PEstor extends MouraPageRelacaoAngular {
    readonly AccordionFiltros: MouraAccordion;
    readonly grid: MouraGridViewJS;
    readonly txtCodigo: HTMLInputElement;
    readonly txtFornecedor: MouraTextBoxProcura;
    OnPageLoad(): void;
    Init(): void;
    PreencherGrade(): void;
    LimparCampos(): void;
    private LimparContaSelecionado;
    private PreencherTela;
    private SelecionouLinha;
    private ClickBotaoEstornar;
    private OnSelecionouMsgBox;
    private EstornarContaPagar;
    private OnDepoisProcurou;
}
declare const c_PEstor: C_PEstor;
//# sourceMappingURL=C_PEstor.d.ts.map