declare class C_DocTransp extends MouraPageCadastroAngular<SiSMoura.Core.Entity.Documento_Transporte> {
    Produtos: SiSMoura.Core.Entity.DocumentoTransporteItemRetorno[];
    Produto: SiSMoura.Core.Entity.DocumentoTransporteItemRetorno;
    readonly grdProduto: MouraGridViewJSEditavel;
    readonly lstTipo: MouraRadioButtonList;
    readonly lstDocumento: MouraRadioButtonList;
    readonly cboLocalCarga: MouraComboBox;
    readonly txtProduto: MouraTextBoxProcura;
    readonly txtQuantidade: MouraTextBox;
    readonly txtValor: MouraTextBox;
    readonly txtDescontoPorc: MouraTextBox;
    readonly txtMorada: MouraTextBox;
    readonly txtCodigoPostal: MouraTextBox;
    readonly txtPorto: MouraTextBox;
    readonly txtDescontoValor: MouraTextBox;
    readonly btnImprimir: MouraButton;
    protected Init(): void;
    OnPageLoad(): void;
    protected OnClickAdicionar(s: any, e: MouraGridViewJSEditavelItemCancelavelEventArgs): void;
    protected HabilitarMorada(): void;
    protected OnDepoisLimpar(Entity: SiSMoura.Core.Entity.Documento_Transporte): void;
    protected OnAntesGravar(): boolean;
    protected PreencherProdutosEntity(Entity: SiSMoura.Core.Entity.Documento_Transporte): void;
    protected OnDepoisGravar(): boolean;
    protected OnAntesDeletar(): boolean;
    private produto;
    protected OnPesquisouProduto(s: any, e: any): void;
    protected OnClickAdicionarProdutoGrid(): void;
    protected OnValidandoProdutoGrade(s: any, e: MouraGridViewJSEditavelItemValidandoEventArgs): void;
    protected OnAdicionandoProdutoGrade(s: any, e: MouraGridViewJSEditavelItemValidandoEventArgs): void;
    protected OnLimpandoItemProduto(s: any, e: MouraGridViewJSEditavelItemCancelavelEventArgs): void;
    protected OnDepoisBuscarExistente(Entidade: SiSMoura.Core.Entity.Documento_Transporte): void;
    protected ValidarTipo(): void;
    protected OnAdicionouProdutoGrade(s: any, e: any): void;
    protected CalcularDescontoValor(): void;
    protected CalcularDescontoPorcentagem(): void;
    protected CalcularTotal(): void;
    protected HabilitarCampos(): void;
    protected OnClickBotaoImprimir(s: any, e: DevExpress.Web.Scripts.ASPxClientButtonClickEventArgs): boolean;
}
declare const c_DocTransp: C_DocTransp;
//# sourceMappingURL=C_DocTransp.d.ts.map