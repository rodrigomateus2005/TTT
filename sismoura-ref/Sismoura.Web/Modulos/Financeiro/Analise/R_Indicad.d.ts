declare class R_Indicad extends MouraPageRelacaoAngular {
    readonly grid: MouraGridViewJS;
    readonly txtPeriodo: MouraTextBoxPeriodo;
    readonly lstEmpresa: MouraListBoxEmpresa;
    readonly mdInformacao: MouraModal;
    readonly txtInformacao: MouraTextBox;
    readonly AccordionFiltros: MouraAccordion;
    OnPageLoad(): void;
    Init(): void;
    private OnClickBotaDetalhe;
    PreencherGrade(): void;
    LimparCampos(): void;
}
declare const r_Indicad: R_Indicad;
//# sourceMappingURL=R_Indicad.d.ts.map