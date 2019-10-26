declare class InformarCartaoVenda {
    private _telaVenda;
    TelaVenda: VendaWEB;
    private _telaPagamento;
    TelaPagamento: ConcluirPagamento;
    readonly dvMainCartao: HTMLDivElement;
    readonly mdCartao: MouraModal;
    readonly txtInfCartao: MouraTextBox;
    readonly btnAddCartao: MouraButton;
    readonly grdCartao: MouraGridViewJS;
    readonly btnOkCartao: MouraButton;
    readonly cboCartao: MouraComboBox;
    readonly btnCartaoTotal: MouraButton;
    CartoesInformados: SiSMoura.Core.Entity.CartaoVendaRetorno[];
    constructor(telaVenda: VendaWEB, telaPagamento: ConcluirPagamento);
    Init(): void;
    LimparCamposCartao(): void;
    AbrirModalCartao(): void;
    protected OnClickBotaoOK(s: any, e: DevExpress.Web.Scripts.ASPxClientButtonClickEventArgs): void;
    protected FecharModalCadastro(): void;
    protected OnClickBotaoADD(s: any, e: DevExpress.Web.Scripts.ASPxClientButtonClickEventArgs): void;
    protected ProximoItem(): number;
    protected OnClickBotaoCartaoTotal(s: any, e: DevExpress.Web.Scripts.ASPxClientButtonClickEventArgs): void;
    protected TotalNoCampovalor(): void;
    protected OnKeyDownValorCartao(e: any): void;
    protected AdicionarCartao(): void;
    protected CriarAtalhosModal(): void;
    protected KeyESC(e: any): void;
    protected KeyF5(e: any): void;
}
//# sourceMappingURL=InformarCartaoVenda.d.ts.map