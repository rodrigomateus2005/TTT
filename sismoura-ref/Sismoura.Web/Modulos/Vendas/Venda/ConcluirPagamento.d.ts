declare class ConcluirPagamento {
    private _telaVenda;
    TelaVenda: VendaWEB;
    private _telaCartao;
    readonly TelaCartao: InformarCartaoVenda;
    readonly txtTotalVenda: MouraTextBox;
    readonly txtAPagar: MouraTextBox;
    readonly txtValorRecebido: MouraTextBox;
    readonly txtTroco: MouraTextBox;
    readonly txtDescontoP: MouraTextBox;
    readonly txtDescontoR: MouraTextBox;
    readonly txtValorDinheiro: MouraTextBox;
    readonly txtValorCheque: MouraTextBox;
    readonly txtValorCartao: MouraTextBox;
    readonly txtValorCliente: MouraTextBox;
    readonly mdConcluir: MouraModal;
    readonly btnPagVoltar: MouraButton;
    readonly btnPagConcluirVenda: MouraButton;
    readonly dvPagMain: HTMLDivElement;
    readonly imgDinheiro: HTMLImageElement;
    readonly imgCheque: HTMLImageElement;
    readonly imgCartao: HTMLImageElement;
    readonly imgCrediario: HTMLImageElement;
    readonly hdnEmitiuSAT: HTMLInputElement;
    readonly hdnVendaAtiva: HTMLInputElement;
    constructor(telaVenda: VendaWEB);
    Init(): void;
    AbrirTelaPagamento(totalVenda: number): void;
    protected IniciarTelaPagamento(totalVenda: number): void;
    CalculaTotaisVenda(): void;
    protected CalculaDesconto(alterouPorcentagem: boolean): void;
    protected TotalCartao(): void;
    protected OnChangeDescontoPorc(): void;
    protected OnChangeDescontoValor(): void;
    protected OnClickBotaoVoltar(s: any, e: DevExpress.Web.Scripts.ASPxClientButtonClickEventArgs): void;
    protected OnClickBotaoConcluir(s: any, e: DevExpress.Web.Scripts.ASPxClientButtonClickEventArgs): void;
    protected CalculaTotalPagamentoRestante(): number;
    SetValorPagamentoTotal(textbox: MouraTextBox): void;
    protected OnKeyDownValorDinheiro(e: any): void;
    protected OnKeyDownValorCheque(e: any): void;
    protected OnChangeValoresPagamento(): void;
    protected ValidaFinalizarVenda(): boolean;
    protected FinalizarVenda(): void;
    protected GravarVenda(): void;
    protected OnFinalizouVenda(d: any): void;
    protected OnErroFinalizouVenda(erro: JQueryXHR): void;
    protected EmitirSAT(): void;
    catch(ex: any): void;
    /**
     * Cria uma classe do tipo Sat_Requisicao_Nf_Pagamento para emitir o SAT
     * idPagamento: Dinheiro = 1, Cheque = 2
                      Cartao_Credito = 3, Cartao_Debito = 4 ,
                      Cartao_Credito_Loja = 5, Vale_Alimentacao = 10
                      Vale_Refeicao = 11, Vale_Presente = 12
                      Vale_Combustivel = 13, Outros = 99
     */
    protected CriarPagamentoSAT(idPagamento: number, valor: number): any;
    protected OnEmitiuSAT(d: any): void;
    protected OnErroEmitirSAT(erro: JQueryXHR): void;
    AbrirModalCartao(): void;
    protected OnFechouModalCartao(s: any, e: any): void;
    protected OnClickImagemDinheiro(): void;
    protected OnClickImagemCheque(): void;
    protected OnClickImagemCartao(): void;
    protected CriarAtalhosModal(): void;
    protected KeyESC(e: any): void;
    protected KeyF5(e: any): void;
    protected KeyF6(e: any): void;
    protected KeyF7(e: any): void;
    protected KeyF9(e: any): void;
}
//# sourceMappingURL=ConcluirPagamento.d.ts.map