declare class R_V_Vend extends MouraPageRelacaoAngular {
    readonly AccordionFiltros: MouraAccordion;
    Tipo: any;
    TipoRelacao: any;
    readonly gridSubgrupo: MouraGridViewJS;
    readonly gridGrupo: MouraGridViewJS;
    readonly gridPagamento: MouraGridViewJS;
    readonly gridCliente: MouraGridViewJS;
    readonly txtPeriodo: MouraTextBoxPeriodo;
    readonly txtVendedor: MouraTextBoxProcura;
    readonly cboCaixa: MouraComboBoxCaixa;
    readonly txtCidade: MouraTextBoxProcura;
    readonly cboTipoRelacao: MouraComboBox;
    readonly cboTipo: MouraComboBox;
    readonly lstEmpresa: MouraListBoxEmpresa;
    protected Init(): void;
    OnPageLoad(): void;
    protected MudouTipo(): void;
    protected PreencherGrade(): void;
    protected LimparGrades(): void;
    protected LimparCampos(): void;
}
declare const r_V_Vend: R_V_Vend;
//# sourceMappingURL=R_V_Vend.d.ts.map