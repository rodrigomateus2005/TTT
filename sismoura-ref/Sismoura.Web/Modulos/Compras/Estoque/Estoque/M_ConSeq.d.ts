declare class M_ConSeq extends MouraPageCadastroAngular<SiSMoura.Core.Entity.Movimentacao> {
    Automatico: boolean;
    Produto: any;
    Produtos: any[];
    readonly Grid: MouraGridViewJSEditavel;
    readonly txtData: MouraTextBoxData;
    readonly txtResponsavel: MouraTextBoxProcura;
    readonly txtProduto: MouraTextBoxProcura;
    readonly txtMovimentacao: MouraTextBoxProcura;
    readonly chkMostrar_Estoque: MouraCheckBox;
    readonly chkQuantidade: MouraCheckBox;
    readonly cboDeposito: MouraComboBox;
    readonly cboMotivo: MouraComboBox;
    readonly txtQuantidade: MouraTextBox;
    readonly txtDocumento: MouraTextBox;
    readonly txtObs: MouraTextBox;
    readonly txtLocalizacao: MouraTextBox;
    readonly btnAprovar: MouraButton;
    readonly btnComparar: MouraButton;
    readonly btnRFIDImportarContagem: MouraButton;
    readonly GridModal: MouraGridViewJS;
    readonly btnImportar: MouraButton;
    readonly btnGerar: MouraButton;
    readonly txtCodigo: MouraTextBoxProcura;
    readonly txtPeriodo: MouraTextBoxPeriodo;
    readonly mdRFID: MouraModal;
    readonly btnCancelar: MouraButton;
    private lstAuxiliar;
    OnPageLoad(): void;
    protected Init(): void;
    protected MudouMostrarEstoque(): void;
    protected OnClickCancelar(s: any, e: DevExpress.Web.Scripts.ASPxClientButtonClickEventArgs): void;
    protected OnClickGerar(s: any, e: DevExpress.Web.Scripts.ASPxClientButtonClickEventArgs): void;
    protected OnClickImportar(s: any, e: DevExpress.Web.Scripts.ASPxClientButtonClickEventArgs): void;
    protected OnClickRFID(s: any, e: DevExpress.Web.Scripts.ASPxClientButtonClickEventArgs): void;
    protected OnClickComparar(s: any, e: DevExpress.Web.Scripts.ASPxClientButtonClickEventArgs): void;
    protected OnClickAprovar(s: any, e: DevExpress.Web.Scripts.ASPxClientButtonClickEventArgs): void;
    protected OnRepostaData(result: MsgBoxResultEventArgs): void;
    protected OnReposta(result: MsgBoxResultEventArgs): void;
    protected LimparCamposModal(): void;
    protected AdicionouItem(sender: any, e: MouraGridViewJSEditavelItemEventArgs): void;
    protected MudouExibirQtd(): void;
    protected OnExcluir(s: any, e: MouraGridViewJSEditavelItemCancelavelEventArgs): void;
    protected OnValidando(s: any, e: MouraGridViewJSEditavelItemValidandoEventArgs): void;
    protected OnDepoisBuscarExistente(Entidade: SiSMoura.Core.Entity.Movimentacao): void;
    protected CamposObrigatorios(flag: boolean): void;
    protected OnCamposEnable(flag: boolean): void;
    protected OnAntesGravar(): boolean;
    protected OnDepoisGravar(): boolean;
    protected OnDepoisLimpar(Entity: SiSMoura.Core.Entity.Movimentacao): void;
    protected LimparProduto(): void;
    protected LimparMovimentacao(): void;
    protected OnAntesDeletar(): boolean;
    protected OnProcurouProduto(e: MouraEventHandler): void;
}
declare var m_ConSeq: M_ConSeq;
//# sourceMappingURL=M_ConSeq.d.ts.map