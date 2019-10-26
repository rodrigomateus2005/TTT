declare class R_Arrend extends MouraPageRelacaoAngular {
    readonly AccordionFiltros: MouraAccordion;
    Resultados: any[];
    readonly txtProduto: MouraTextBoxProcura;
    readonly Grid: MouraGridViewJSEditavel;
    protected Init(): void;
    OnPageLoad(): void;
    protected MudouForma(): void;
    protected LimparCampos(): void;
    protected ValidarCampos(): boolean;
    protected PreencherGrade(): void;
}
declare var r_Arrend: R_Arrend;
//# sourceMappingURL=R_Arrend.d.ts.map