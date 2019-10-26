declare class C_CVenPr extends MouraPageCadastroAngular<SiSMoura.Core.Entity.Venda_Produto_Conferencia> {
    readonly gridProduto: MouraGridViewJSEditavel;
    readonly lblQtdeItens: MouraLabel;
    readonly lblQtdeConf: MouraLabel;
    readonly chkLancar: MouraCheckBox;
    readonly txtQtde: MouraTextBox;
    readonly txtProduto: MouraTextBoxProcura;
    readonly txtVenda: MouraTextBoxProcura;
    Produto: SiSMoura.Core.Entity.VendaProdutoConferenciaProdutoRetorno;
    Produtos: SiSMoura.Core.Entity.VendaProdutoConferenciaProdutoRetorno[];
    readonly fotoProduto: MouraFotosPastaJS;
    private registroNovo;
    OnPageLoad(): void;
    protected Init(): void;
    protected OnGerouCelulaGrade(s: any, e: MouraGridViewJSCellPreparedEventArgs): void;
    protected OnDepoisLimpar(Entity: SiSMoura.Core.Entity.Venda_Produto_Conferencia): void;
    private AtualizaValorQtdeEntrada;
    private AtualizaValorQtdeConferida;
    private verificar;
    protected OnAntesGravar(): boolean;
    protected OnDepoisGravar(): boolean;
    PreencherEntidade(codigo: string): void;
    OnDepoisBuscarExistente(Entity: SiSMoura.Core.Entity.Venda_Produto_Conferencia): void;
    private GetVendaByConferencia;
    private GetDadosProduto;
    private OnCheckLancar;
    private OnDepoisProcurouProduto;
    private AlterouQuantidadeConferida;
    private ValidarCamposProduto;
    private AdicionandoProduto;
    private OnSelecionouProduto;
    private OnDepoisSelecionar;
    private OnDepoisBuscouVenda;
    private GetProdutosVenda;
    private VerificarConferenciaExistente;
}
declare const c_CVenPr: C_CVenPr;
//# sourceMappingURL=C_CVenPr.d.ts.map