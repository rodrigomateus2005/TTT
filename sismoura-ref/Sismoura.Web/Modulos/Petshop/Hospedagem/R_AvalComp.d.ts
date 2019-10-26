declare class R_AvalComp extends MouraPageRelacaoAngular {
    readonly AccordionFiltros: MouraAccordion;
    readonly grid: MouraGridViewJS;
    readonly txtPeriodo: MouraTextBoxPeriodo;
    readonly txtPet: MouraTextBoxProcuraProprietarioAnimal;
    OnPageLoad(): void;
    protected Init(): void;
    protected LimparCampos(): void;
    protected PreencherGrade(): void;
    private GetDadosRelacao;
    private ValidadarFiltros;
}
declare var r_AvalComp: R_AvalComp;
//# sourceMappingURL=R_AvalComp.d.ts.map