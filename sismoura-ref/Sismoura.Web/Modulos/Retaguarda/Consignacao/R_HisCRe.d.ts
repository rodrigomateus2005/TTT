declare class R_HisCRe extends MouraPageRelacaoAngular {
    readonly AccordionFiltros: MouraAccordion;
    readonly txtPeriodo: MouraTextBoxPeriodo;
    readonly txtCliente: MouraTextBoxProcura;
    readonly txtVendedor: MouraTextBoxProcura;
    readonly txtDocumento: MouraTextBoxComLista;
    readonly Grid: MouraGridViewJS;
    OnPageLoad(): void;
    readonly accCadastro: MouraAccordion;
    protected Init(): void;
    protected PreencherGrade(): void;
    protected LimparCampos(): void;
}
declare const r_HisCRe: R_HisCRe;
//# sourceMappingURL=R_HisCRe.d.ts.map