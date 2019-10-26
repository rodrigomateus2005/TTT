declare class R_EnPrLt extends MouraPageRelacaoAngular {
    readonly AccordionFiltros: MouraAccordion;
    readonly grid: MouraGridViewJS;
    readonly btnGravar: MouraButton;
    Entity: any;
    OnPageLoad(): void;
    Init(): void;
    protected LimparCampos(): void;
    protected PreencherGrade(): void;
    protected btnGravar_Click(s: any, e: DevExpress.Web.Scripts.ASPxClientButtonClickEventArgs): void;
}
declare const r_EnPrLt: R_EnPrLt;
//# sourceMappingURL=R_EnPrLt.d.ts.map