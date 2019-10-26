declare class R_RankingProd extends MouraPageRelacaoAngular {
    readonly AccordionFiltros: MouraAccordion;
    Produtos: any[];
    readonly btnExcel: MouraButton;
    readonly txtPeriodo: MouraTextBoxPeriodo;
    readonly txtMarca: MouraTextBoxProcura;
    readonly lstEmpresa: MouraListBoxEmpresa;
    readonly lstLinha: MouraCheckBoxList;
    readonly lstProdutos: MouraTextBoxProcuraComLista;
    readonly lstFormaPagamento: MouraCheckBoxList;
    readonly chkConsiderarTrocas: MouraCheckBox;
    readonly chkUtilizarCustoVenda: MouraCheckBox;
    readonly chkLojaPropria: MouraCheckBox;
    readonly grid: MouraGridViewJS;
    protected Init(): void;
    protected OnClicouExcel(s: any, e: DevExpress.Web.Scripts.ASPxClientButtonClickEventArgs): void;
    protected FazerDownload(): void;
    protected OnGerouLinhaMarkup(s: any, e: MouraGridViewJSCellPreparedEventArgs): void;
    private somaIcms;
    private somaQtde;
    private somaFatura;
    private somaCompra;
    protected OnCalculateCustomSummary(s: any, e: MouraGridViewCalculateCustomSummary): void;
    OnPageLoad(): void;
    protected AlterouPeriodoInicial(): void;
    protected AlterouPeriodoFim(): void;
    protected OnAlterouEmpresa(): void;
    protected carregarProdutos(): void;
    protected carregarFormaspagamento(): void;
    protected OnAlterouFormaPagamento(): void;
    protected OnAlterouLinha(): void;
    protected OnAlterouProdutos(): void;
    protected LimparCampos(): void;
    protected PreencherGrade(): void;
    protected ValidarCampos(): boolean;
}
declare var r_RankingProd: R_RankingProd;
//# sourceMappingURL=R_RankingProd.d.ts.map