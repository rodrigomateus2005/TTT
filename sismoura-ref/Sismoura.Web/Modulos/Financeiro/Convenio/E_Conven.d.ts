declare class E_Conven extends MouraPageRelacaoAngular {
    readonly AccordionFiltros: MouraAccordion;
    readonly rblEmpresa: MouraListBoxEmpresa;
    readonly grid: MouraGridViewJS;
    readonly gridRecalcular: MouraGridViewJS;
    readonly mdRecalcular: MouraModal;
    readonly btnRecalcular: MouraButton;
    readonly btnCancelar: MouraButton;
    OnPageLoad(): void;
    Init(): void;
    PreencherGrade(): void;
    LimparCampos(): void;
    ValidarCamposObrigatorios(): boolean;
    private OnSelecionouLinha;
    private PreencherGridRecalcular;
    private OnClickRecalcular;
    private OnClickCancelar;
    private Recalcular;
}
declare const e_Conven: E_Conven;
//# sourceMappingURL=E_Conven.d.ts.map