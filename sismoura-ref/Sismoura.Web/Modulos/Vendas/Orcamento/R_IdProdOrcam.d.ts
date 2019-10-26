declare class R_IdPRodOrcam extends MouraPageRelacaoAngular {
    readonly AccordionFiltros: MouraAccordion;
    readonly txtFornecedor: MouraTextBoxProcura;
    readonly txtGrupo: MouraTextBoxProcura;
    readonly txtSubgrupo: MouraTextBoxProcura;
    readonly txtLinha: MouraTextBoxProcura;
    readonly txtCor: MouraTextBoxProcura;
    readonly txtMarca: MouraTextBoxProcura;
    readonly txtReferencia: MouraTextBox;
    readonly btnGravar: MouraButton;
    readonly Grid: MouraGridViewJS;
    readonly btnMarcar: MouraButton;
    readonly btnDesmarcar: MouraButton;
    GetProdutos: SiSMoura.Core.Entity.ProdutoIdentificarOrcamentoRetorno[];
    protected Init(): void;
    protected LimparCampos(): void;
    protected PreencherGrade(): void;
    protected Gravar(s: any, e: MouraClickEventArgs): void;
    protected MarcarTodos(s: any, e: MouraClickEventArgs): void;
    protected DesmarcarTodos(s: any, e: MouraClickEventArgs): void;
}
declare var r_IdPRodOrcam: R_IdPRodOrcam;
//# sourceMappingURL=R_IdProdOrcam.d.ts.map