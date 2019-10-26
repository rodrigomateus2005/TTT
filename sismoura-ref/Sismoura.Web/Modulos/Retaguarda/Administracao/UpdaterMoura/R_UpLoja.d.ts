declare class R_UpLoja extends MouraPageRelacaoAngular {
    readonly AccordionFiltros: MouraAccordion;
    readonly grid: MouraGridViewJS;
    readonly txtPeriodo: MouraTextBoxPeriodo;
    readonly lstEmpresa: MouraListBoxEmpresa;
    readonly cboPerfilLoja: MouraComboBox;
    readonly cboTipoAtualizacao: MouraComboBox;
    OnPageLoad(): void;
    protected Init(): void;
    protected onCellPrepared(args: any, event: MouraGridViewJSCellPreparedEventArgs): void;
    protected LimparCampos(): void;
    protected PreencherGrade(): void;
}
declare var r_UpLoja: R_UpLoja;
//# sourceMappingURL=R_UpLoja.d.ts.map