declare class C_COrcPr extends MouraPageCadastroAngular<SiSMoura.Core.Entity.Orcamento_Produto_Conferencia> {
    readonly gridProduto: MouraGridViewJSEditavel;
    readonly lblQtdeItens: MouraLabel;
    readonly lblQtdeConf: MouraLabel;
    readonly chkLancar: MouraCheckBox;
    readonly txtQtde: MouraTextBox;
    readonly txtProduto: MouraTextBoxProcura;
    readonly txtOrcamento: MouraTextBoxProcura;
    Produto: SiSMoura.Core.Entity.OrcamentoProdutoConferenciaProdutoRetorno;
    Produtos: SiSMoura.Core.Entity.OrcamentoProdutoConferenciaProdutoRetorno[];
    readonly fotoProduto: MouraFotosPastaJS;
    private registroNovo;
    OnPageLoad(): void;
    protected Init(): void;
    protected OnAlterandoItemGrade(): void;
    protected OnGerouCelulaGrade(s: any, e: MouraGridViewJSCellPreparedEventArgs): void;
    protected OnDepoisLimpar(Entity: SiSMoura.Core.Entity.Orcamento_Produto_Conferencia): void;
    private AtualizaValorQtdeEntrada;
    private AtualizaValorQtdeConferida;
    private verificar;
    protected OnAntesGravar(): boolean;
    protected OnDepoisGravar(): boolean;
    PreencherEntidade(codigo: string): void;
    OnDepoisBuscarExistente(Entity: SiSMoura.Core.Entity.Orcamento_Produto_Conferencia): void;
    private GetOrcamentoByConferencia;
    private GetDadosProduto;
    private OnCheckLancar;
    private OnDepoisProcurouProduto;
    private AlterouQuantidadeConferida;
    private ValidarCamposProduto;
    private AdicionandoProduto;
    private OnSelecionouProduto;
    private OnDepoisSelecionar;
    private OnDepoisBuscouOrcamento;
    private GetProdutosOrcamento;
    private VerificarConferenciaExistente;
}
declare const c_COrcPr: C_COrcPr;
//# sourceMappingURL=C_COrcPr.d.ts.map