declare class R_SolPe extends MouraPageRelacaoAngular {
    readonly AccordionFiltros: MouraAccordion;
    readonly grid: MouraGridViewJS;
    Entity: any;
    readonly Status: MouraComboBox;
    OnPageLoad(): void;
    Init(): void;
    protected LimparCampos(): void;
    protected PreencherGrade(): void;
    protected OnSelecionouLinha(s: any, e: MouraGridViewJSClickBotaoLinhaEventArgs): void;
}
declare const r_SolPe: R_SolPe;
//# sourceMappingURL=R_SolPe.d.ts.map