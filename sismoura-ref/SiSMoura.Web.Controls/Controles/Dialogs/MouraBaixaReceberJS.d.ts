declare class MouraBaixaReceberJS extends MouraControl {
    BaixouConta: MouraEventHandler;
    readonly dadosCheque: MouraDadosChequeJS;
    readonly pnModal: MouraModal;
    readonly lblTotalAReceber: MouraLabel;
    readonly cboFormaPagamento: MouraComboBox;
    readonly txtNumeroDocumento: MouraTextBox;
    readonly txtContaContabil: MouraTextBoxProcura;
    readonly cboContaCorrente: MouraContaCorrenteCombo;
    readonly cboGerar: DevExpress.Web.Scripts.ASPxClientComboBox;
    readonly cboCartao: MouraComboBox;
    readonly txtDataCredito: MouraTextBoxData;
    readonly txtValor: MouraTextBox;
    readonly btnOK: MouraButton;
    readonly btnCancelar: MouraButton;
    readonly btnAdicionar: MouraButton;
    readonly grd: MouraGridViewJS;
    readonly hdnFormaPagamento: HTMLInputElement;
    readonly hdnValorJuros: HTMLInputElement;
    readonly hdnMulta: HTMLInputElement;
    readonly hdnValorDesconto: HTMLInputElement;
    readonly hdnCodigos: HTMLInputElement;
    readonly hdnCodigo: HTMLInputElement;
    readonly hdnCodUsuario: HTMLInputElement;
    readonly hdnTela: HTMLInputElement;
    readonly hdnObservacao: HTMLInputElement;
    readonly hdnDataBaixa: HTMLInputElement;
    readonly hdnCodEmpresa: HTMLInputElement;
    readonly hdnVencimentoResiduos: HTMLInputElement;
    readonly hdnIsBaixaLote: HTMLInputElement;
    readonly hdnCreditoUtilizado: HTMLInputElement;
    readonly hdnTipoDesconto: HTMLInputElement;
    FormasPagamento: SiSMoura.Core.Entity.ContasReceberPagamento[];
    Codigos: number[];
    constructor(id: string);
    protected IniciarEventos(): void;
    protected OnCancelarClick(s: any, e: DevExpress.Web.Scripts.ASPxClientButtonClickEventArgs): void;
    private LimparCampos;
    protected OnClickOk(s: any, e: DevExpress.Web.Scripts.ASPxClientButtonClickEventArgs): void;
    /**
     * Se o desconto está em porcentagem ou no valor real. (P ou R)
     * @param tipoDesconto
     */
    MostrarEmLote(codigos: number[], tela: string, codUsuario: number, valorAReceber: number, contaContabilPadrao: number, contaCorrentePadrao: string, observacao: string, valorJuros: number, valorDesconto: number, dataBaixa: Date, formaPagamentoPadrao: number, tipoDesconto: string, multa?: number): void;
    Mostrar(codContaReceber: number, Tela: string, codUsuario: number, valorAPagar: number, contaContabilPadrao: number, contaCorrentePadrao: string, observacao: string, valorJuros: number, valorDesconto: number, dataBaixa: Date, codEmpresa: number, valorCreditoUtilizado: number, numDocBancario: string, dataEmissaoResiduo?: Date, dataVencResiduo?: Date, formaPagamentoPadrao?: number, multa?: number): void;
    protected PreencherGrade(): void;
    protected BaixarContaEmLote(): void;
    protected BaixarContaIndividual(): void;
    private OnExcluiuItem;
    private OnAdicionarClick;
    private GetDocumentoBancario;
    private AdicionarPagamento;
    private OnInformouCheque;
    private VerificarContabil;
    private ValidarPagamento;
    private OnProcurouContaContabil;
    private IsSintetica;
    private IsContaPermitidaUsuario;
    private TerminouContaIndividual;
    private TerminouEmLote;
}
//# sourceMappingURL=MouraBaixaReceberJS.d.ts.map