declare class R_MovAdco extends MouraPageRelacaoAngular {
    readonly AccordionFiltros: MouraAccordion;
    readonly grid: MouraGridViewJS;
    readonly txtPeriodo: MouraTextBoxPeriodo;
    readonly lstEmpresa: MouraListBoxEmpresa;
    readonly cboTipoMovimento: MouraComboBox;
    readonly txtPet: MouraTextBoxProcuraProprietarioAnimal;
    Init(): void;
    OnPageLoad(): void;
    protected OnGridCellPrepared(s: any, e: MouraGridViewJSCellPreparedEventArgs): void;
    protected LimparCampos(): void;
    protected PreencherGrade(): void;
    private GetDadosRelacao;
}
declare var r_MovAdco: R_MovAdco;
//# sourceMappingURL=R_MovAdoc.d.ts.map