declare class C_PedComSemanal extends MouraPageAngular {
    private systextilList;
    private selecionadas;
    private linhasQuantidade;
    private data;
    readonly lblEmpresaSystextil: MouraLabel;
    readonly lblDataSystextil: MouraLabel;
    readonly lblHoraSystextil: MouraLabel;
    readonly txtCodigo: MouraTextBoxProcura;
    readonly txtDataEmissao: MouraTextBoxData;
    readonly btnInserirProdutos: MouraButton;
    readonly gridIntegracaoSystextil: MouraGridViewJS;
    readonly lblHora: MouraLabel;
    readonly lblData: MouraLabel;
    readonly lblDeposito: MouraLabel;
    readonly lblEmpresa: MouraLabel;
    readonly mdIntegracaoSystextil: MouraModal;
    readonly btnEstoqueFabrica: MouraButton;
    readonly txtUltimoPedido: MouraTextBox;
    readonly txtFornecedor: MouraTextBoxProcura;
    readonly gridRetornoPedido: MouraGridViewJSEditavel;
    readonly gridSubExpandir: MouraGridViewJSEditavel;
    readonly gridCurvaABCRetorno: MouraGridViewJS;
    readonly mdReprovarPedido: MouraModal;
    readonly txtAreaReprovacao: MouraTextBox;
    readonly btnGravarReprovacao: MouraButton;
    readonly btnCancelarReprovacao: MouraButton;
    readonly btnLimpa: MouraButton;
    readonly btnGerar: MouraButton;
    readonly btnCancelarFornecedor: MouraButton;
    readonly btnGravarFornecedor: MouraButton;
    readonly lbDepositoFornecedor: MouraLabel;
    readonly cboFormaPagamento: MouraComboBox;
    readonly lstEmpresaRemessa: MouraListBoxEmpresa;
    readonly cboGradeSemanalRetorno: MouraComboBox;
    readonly txtPeriodo: MouraTextBoxPeriodo;
    readonly btnEmail: MouraButton;
    readonly btnLimpar: MouraButton;
    readonly btnGravar: MouraButton;
    readonly gridCurvaABC: MouraGridViewJS;
    readonly gridRemessaPedido: MouraGridViewJSEditavel;
    readonly btnMarcarTodos: MouraButton;
    readonly txtFornecedorRemessa: MouraTextBoxProcura;
    readonly txtCompradorRemessa: MouraTextBoxProcura;
    readonly txtHoraLimiteResp: MouraTextBoxHora;
    readonly lblPrazoRespostaDia: MouraLabel;
    readonly txtPrazoResposta: MouraTextBoxData;
    readonly lstEmpresaRetorno: MouraListBoxEmpresa;
    readonly cboGradeSemanalRemessa: MouraComboBox;
    readonly EnvioEmail: MouraEmail;
    readonly mdSubExpandir: MouraModal;
    readonly mdDadosFornecedor: MouraModal;
    readonly chkFornecedor: MouraCheckBoxList;
    readonly tab: MouraTabPanel;
    Retorno: any[];
    Remessas: any[];
    SubRetorno: any[];
    OnPageLoad(): void;
    protected Init(): void;
    private ClicouBotaoMotivoRemessa;
    private atualizarCurvaABC;
    private CalcularValor;
    protected AdicionarColunaGradePedidoRemessa(): void;
    private modalFornecedorCancelar;
    private modalRecusaCancelar;
    private preencherComboGradeSemanal;
    private preencherComboGradeSemanalRetorno;
    protected showIntegracaoSystextil(): void;
    private preencheHoraLimitePrazoResposta;
    protected retornaDiaDaSemana(): void;
    protected exibirDiaDaSemana(diaSemana: number): void;
    protected ExibeModalSubExpandir(data: any): void;
    protected ExibeModalFornecedor(): void;
    protected ExibeModalReprovar(): void;
    protected onClickGravarReprova(): void;
    protected OnClickEnviarEmail(): void;
    protected onLimparRemessa(): void;
    protected onLimparRetorno(): void;
    protected onClickGravar(): void;
    protected validaCamposRemessa(): boolean;
    protected isFranqueado(): void;
    protected gerarPedidosRetorno(): void;
}
declare var c_PedComSemanal: C_PedComSemanal;
//# sourceMappingURL=C_PedComSemanal.d.ts.map