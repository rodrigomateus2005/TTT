declare class R_PB_PP extends MouraPageRelacaoAngular {
    readonly AccordionFiltros: MouraAccordion;
    readonly lstContaCorrente: MouraContaCorrenteLista;
    readonly lstEmpresa: MouraListBoxEmpresa;
    readonly gridAnalitica: MouraGridViewJS;
    readonly gridSintetica: MouraGridViewJS;
    readonly txtNumeroCheque: MouraTextBox;
    readonly tabResultado: MouraTabPanel;
    readonly cboTipoEmpresa: MouraComboBox;
    OnPageLoad(): void;
    Init(): void;
    LimparCampos(): void;
    PreencherGrade(): void;
    private OnMudouEmpresa;
    private PreencherGridAnalitica;
    private PreencherGridSintetica;
}
declare const r_PB_PP: R_PB_PP;
//# sourceMappingURL=R_PB_PP.d.ts.map