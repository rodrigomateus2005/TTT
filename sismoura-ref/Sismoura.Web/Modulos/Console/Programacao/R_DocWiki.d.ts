declare class R_DocWiki extends MouraPageRelacaoAngular {
    readonly grid: MouraGridViewJS;
    readonly AccordionFiltros: MouraAccordion;
    readonly lstCategorias: MouraCheckBoxList;
    OnPageLoad(): void;
    Init(): void;
    protected OnGridDocWikiClickBotaoLinha(s: any, e: MouraGridViewJSClickBotaoLinhaEventArgs): void;
    PreencherGrade(): void;
    LimparCampos(): void;
}
declare const r_DocWiki: R_DocWiki;
//# sourceMappingURL=R_DocWiki.d.ts.map