declare class C_MDFe_OLD extends MouraPage {
    readonly grdReboque: MouraGridView;
    readonly grdPedagio: MouraGridView;
    readonly mdTransmitirNFe: MouraModal;
    readonly lblSituacaoAtual: MouraLabel;
    readonly lblSituacao: MouraLabel;
    readonly lblSituacaoEvento: MouraLabel;
    readonly lblRetornoEvento: MouraLabel;
    readonly grdCte: MouraGridView;
    readonly grdNFe: MouraGridView;
    readonly grdNF: MouraGridView;
    readonly btnAdicionaReboque: MouraButton;
    readonly btnAdicionaPedagio: MouraButton;
    readonly cbpEventoNFe: MouraCallBackPanel;
    readonly cboSerie: MouraComboBox;
    readonly btnAdicionaCTe: MouraButton;
    readonly btnAdicionaNFe: MouraButton;
    readonly btnAdicionaMDFe: MouraButton;
    readonly btnEventos: MouraButton;
    readonly btnEncerrarMdfe: MouraButton;
    readonly btnGerenciarNFe: MouraButton;
    readonly btnConfirmaEvento: MouraButton;
    readonly mdReboque: MouraModal;
    readonly mdEncerrar: MouraModal;
    readonly mdEventosMDFe: MouraModal;
    readonly mdPedagio: MouraModal;
    readonly mdCTe: MouraModal;
    readonly mdNFe: MouraModal;
    readonly mdMdfe: MouraModal;
    readonly mtpDocumentos: MouraTabPanel;
    readonly tab: MouraTabPanel;
    readonly cboUFDoc: MouraComboBox;
    readonly cboTipoEvento: DevExpress.Web.Scripts.ASPxClientComboBox;
    readonly cboMunDoc: MouraComboBox;
    readonly txtJustificativaEvento: MouraTextBox;
    readonly hdnCodigo: HTMLInputElement;
    readonly cboEmpresa: MouraComboBoxEmpresa;
    readonly txtCNPJ: MouraTextBox;
    readonly txtIE: MouraTextBox;
    readonly txtNome: MouraTextBox;
    readonly txtFantasia: MouraTextBox;
    readonly txtEndereco: MouraTextBox;
    readonly txtNumero: MouraTextBox;
    readonly txtComplemento: MouraTextBox;
    readonly txtBairro: MouraTextBox;
    readonly txtCep: MouraTextBox;
    readonly txtCidadeEmit: MouraTextBox;
    readonly txtE_Mail: MouraTextBox;
    readonly txtFone_DDD1: MouraTextBoxTelefone;
    protected Init(): void;
    protected OnClickBotaoAdicionaReboque(s: any, e: DevExpress.Web.Scripts.ASPxClientButtonClickEventArgs): boolean;
    protected OnClickBotaoEncerrarMDFe(s: any, e: DevExpress.Web.Scripts.ASPxClientButtonClickEventArgs): boolean;
    protected OnMtpDocumentosTabChanged(s: any, e: DevExpress.Web.Scripts.ASPxClientTabControlTabEventArgs): void;
    protected OnTabTabChanged(s: any, e: DevExpress.Web.Scripts.ASPxClientTabControlTabEventArgs): void;
    private VerificarTabVisible;
    protected OnClickBotaoAdicionaPedagio(s: any, e: DevExpress.Web.Scripts.ASPxClientButtonClickEventArgs): boolean;
    protected OnClickBotaoAdicionaCte(s: any, e: DevExpress.Web.Scripts.ASPxClientButtonClickEventArgs): boolean;
    protected OnClickBotaoEventosMDFe(s: any, e: DevExpress.Web.Scripts.ASPxClientButtonClickEventArgs): boolean;
    protected OnClickBotaoGerenciarNFe(s: any, e: DevExpress.Web.Scripts.ASPxClientButtonClickEventArgs): boolean;
    protected OnClickBotaoAdicionaNFe(s: any, e: DevExpress.Web.Scripts.ASPxClientButtonClickEventArgs): boolean;
    protected OnClickBotaoAdicionaMDFe(s: any, e: DevExpress.Web.Scripts.ASPxClientButtonClickEventArgs): boolean;
    protected OnClickBotaoConfirmarEvento(s: any, e: DevExpress.Web.Scripts.ASPxClientButtonClickEventArgs): boolean;
    protected carregarEventosNFe(e: MsgBoxResultEventArgs): void;
    protected OnChangeCboEmpresa(): void;
}
declare var c_MDFe_OLD: C_MDFe_OLD;
//# sourceMappingURL=C_MDFe_OLD.d.ts.map