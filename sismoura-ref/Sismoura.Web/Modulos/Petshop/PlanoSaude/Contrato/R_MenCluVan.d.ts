declare class R_MenCluVan extends MouraPageRelacaoAngular {
    readonly AccordionFiltros: MouraAccordion;
    readonly txtPet: MouraTextBoxProcuraProprietarioAnimal;
    readonly txtPeriodo: MouraTextBoxPeriodo;
    readonly cboStatus: MouraComboBox;
    readonly grid: MouraGridViewJS;
    OnPageLoad(): void;
    protected Init(): void;
    protected LimparCampos(): void;
    protected PreencherGrade(): void;
    private GetDadosRelacao;
}
declare var r_MenCluVan: R_MenCluVan;
//# sourceMappingURL=R_MenCluVan.d.ts.map