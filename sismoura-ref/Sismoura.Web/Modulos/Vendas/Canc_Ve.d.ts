declare class Canc_Ve extends MouraPageAngular {
    readonly grid: MouraGridViewJS;
    readonly txtVenda: MouraTextBoxProcura;
    readonly txtMotivo: MouraTextBox;
    readonly btnCancelar: MouraButton;
    readonly btnNovo: MouraButton;
    readonly btnReativar: MouraButton;
    readonly txtCupomFiscal: MouraTextBox;
    readonly lblCodCliente: MouraLabel;
    readonly lblNome: MouraLabel;
    readonly lblApelido: MouraLabel;
    readonly lblAcrescimo: MouraLabel;
    readonly lblDesconto: MouraLabel;
    readonly lblTotal: MouraLabel;
    protected Init(): void;
    protected OnProcurouVenda(): void;
    protected OnClickCancelar(s: any, e: DevExpress.Web.Scripts.ASPxClientButtonClickEventArgs): void;
    protected VerificarAutorizacaoCancelarVendaDataMaior(retorno: MouraFuncoesAdministrativasRetorno): void;
    protected VerificarAutorizacaoCaixaAberto(retorno: MouraFuncoesAdministrativasRetorno): void;
    protected OnClickReativar(s: any, e: DevExpress.Web.Scripts.ASPxClientButtonClickEventArgs): void;
    protected OnClickNovo(s: any, e: DevExpress.Web.Scripts.ASPxClientButtonClickEventArgs): void;
    OnPageLoad(): void;
    protected PreencherGrade(): void;
    protected OnRespondeuMensagemExistente(result: MsgBoxResultEventArgs): void;
    protected OnRespondeuReativar(result: MsgBoxResultEventArgs): void;
    protected OnRespondeuCancelar(result: MsgBoxResultEventArgs): void;
    protected DesativaBotoes(): void;
    protected AtivaBotoes(): void;
    protected limparCampos(): void;
    protected MostrarCancelarVenda(): void;
}
declare const canc_Ve: Canc_Ve;
//# sourceMappingURL=Canc_Ve.d.ts.map