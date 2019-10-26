declare class R_Fornec extends MouraPageRelacaoAngular {
    readonly AccordionFiltros: MouraAccordion;
    readonly grid: MouraGridViewJS;
    readonly chkRepresentantes: MouraCheckBox;
    Entity: any;
    OnPageLoad(): void;
    Init(): void;
    protected OnSelecionouLinha(s: any, e: MouraGridViewJSClickBotaoLinhaEventArgs): void;
    protected LimparCampos(): void;
    protected PreencherGrade(): void;
    OnchkRepresentantes(): void;
}
declare const r_Fornec: R_Fornec;
//# sourceMappingURL=R_Fornec.d.ts.map