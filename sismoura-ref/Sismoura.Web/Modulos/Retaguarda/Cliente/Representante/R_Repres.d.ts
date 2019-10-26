declare class R_Repres extends MouraPageRelacaoAngular {
    readonly AccordionFiltros: MouraAccordion;
    readonly grid: MouraGridViewJS;
    readonly enviarEmail: MouraEmail;
    OnPageLoad(): void;
    Init(): void;
    private OnSelecionouLinha;
    private OnEnviarEmail;
    LimparCampos(): void;
    protected PreencherGrade(): void;
}
declare const r_Repres: R_Repres;
//# sourceMappingURL=R_Repres.d.ts.map