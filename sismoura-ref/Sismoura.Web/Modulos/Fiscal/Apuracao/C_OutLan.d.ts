declare class C_OutLan extends MouraPageCadastroAngular<SiSMoura.Core.Entity.Fiscal_Outros_Lancamentos> {
    readonly txtAjuste: MouraTextBoxProcura;
    readonly txtCodigo: MouraTextBoxProcura;
    readonly txtCodigoCR25: MouraTextBox;
    readonly txtCodigoCR26: MouraTextBox;
    readonly txtCodigoCR27: MouraTextBox;
    readonly txtCodigoCR28: MouraTextBox;
    readonly txtCreditar: MouraTextBoxProcura;
    readonly txtDebitar: MouraTextBoxProcura;
    readonly cboEmpresa: MouraComboBoxEmpresa;
    readonly cboTipoCredito: MouraComboBoxEmpresa;
    readonly cboTipoDebito: MouraComboBoxEmpresa;
    readonly cboTipoDeducao: MouraComboBoxEmpresa;
    readonly txtCreditar_hdnEmpresaContabil: HTMLInputElement;
    readonly txtDebitar_hdnEmpresaContabil: HTMLInputElement;
    readonly txtValor: MouraTextBox;
    readonly txtDescricao: MouraTextBox;
    readonly txtDescricaoOcorrencia: MouraTextBox;
    readonly txtFundamentacaoLegal: MouraTextBox;
    readonly txtHistorico: MouraTextBoxProcura;
    readonly txtDescricaoHistorico: MouraTextBox;
    readonly txtIECentralizador: MouraTextBox;
    readonly txtIESubtituto: MouraTextBox;
    readonly txtIESubtituido: MouraTextBox;
    readonly txtNumeroNFCR26: MouraTextBox;
    readonly txtNumeroNFCR27: MouraTextBox;
    readonly txtPeriodo: MouraTextBoxPeriodo;
    readonly txtValorTransferencia: MouraTextBox;
    readonly txtValorNF: MouraTextBox;
    readonly txtValorNFCR27: MouraTextBox;
    readonly txtValorNFCR28: MouraTextBox;
    readonly txtVistoEletronico: MouraTextBox;
    readonly txtValorCR28: MouraTextBox;
    readonly Grid: MouraGridViewJS;
    readonly GridCR25: MouraGridViewJSEditavel;
    readonly GridCR26: MouraGridViewJSEditavel;
    readonly GridCR27: MouraGridViewJSEditavel;
    readonly GridCR28: MouraGridViewJSEditavel;
    readonly GridCredRec: MouraGridViewJSEditavel;
    readonly GridRessarcSubstTrib: MouraGridViewJSEditavel;
    readonly GridCredTransf: MouraGridViewJSEditavel;
    readonly GridEstDebit: MouraGridViewJSEditavel;
    readonly GridEstCred: MouraGridViewJSEditavel;
    readonly GridCompCred: MouraGridViewJSEditavel;
    readonly GridUtCredRecTransf: MouraGridViewJSEditavel;
    readonly GridRemetCred: MouraGridViewJSEditavel;
    readonly GridIncentCult: MouraGridViewJSEditavel;
    readonly GridIncentEsporte: MouraGridViewJSEditavel;
    readonly btnIEs: MouraButton;
    readonly btnIESubstituto: MouraButton;
    readonly btnIESubstituido: MouraButton;
    readonly btnCredRessarc: MouraButton;
    readonly btnDetalhamento: MouraButton;
    readonly btnGravarCR25: MouraButton;
    readonly btnGravarCR26: MouraButton;
    readonly btnGravarCR27: MouraButton;
    readonly btnGravarCR28: MouraButton;
    readonly btnCancelarCR25: MouraButton;
    readonly btnCancelarCR26: MouraButton;
    readonly btnCancelarCR27: MouraButton;
    readonly btnCancelarCR28: MouraButton;
    readonly mdCR25IEs: MouraModal;
    readonly mdCR26IE_Subtituto: MouraModal;
    readonly mdCR27IE_Substituido: MouraModal;
    readonly mdCR28CredAcum_RessarcimentoST: MouraModal;
    readonly mdCreditos_Recebidos: MouraModal;
    readonly txtCodigo_CredRec: MouraTextBoxProcura;
    readonly txtMotivoCredRec: MouraTextBox;
    readonly txtInscrEstadualCredRec: MouraTextBox;
    readonly txtNotaFiscalCredRec: MouraTextBox;
    readonly cboUFCredRec: MouraComboBox;
    readonly txtDataEmissaoCredRec: MouraTextBoxData;
    readonly txtDataVistoCredRec: MouraTextBoxData;
    readonly txtSerieCredRec: MouraTextBox;
    readonly txtValorCredRec: MouraTextBox;
    CredRec: any;
    CredRecs: any[];
    readonly btnGravarCredRec: MouraButton;
    readonly btnCancelarCredRec: MouraButton;
    readonly mdRessarcSubstTrib: MouraModal;
    readonly txtCodigo_RessarcSubstTrib: MouraTextBoxProcura;
    readonly cboMotivoRessarcSubstTrib: MouraComboBox;
    readonly txtNotaFiscalRessarcSubstTrib: MouraTextBox;
    readonly txtValorRessarcSubstTrib: MouraTextBox;
    readonly txtSerieRessarcSubstTrib: MouraTextBox;
    readonly txtDataEmissaoRessarcSubstTrib: MouraTextBoxData;
    readonly txtDataVistoRessarcSubstTrib: MouraTextBoxData;
    RessarcSubstTrib: any;
    RessarcSubstTribs: any[];
    readonly btnGravarRessarcSubstTrib: MouraButton;
    readonly btnCancelarRessarcSubstTrib: MouraButton;
    readonly mdCredTransf: MouraModal;
    readonly txtCodigo_CredTransf: MouraTextBoxProcura;
    readonly txtMotivoCredTransf: MouraTextBox;
    readonly txtInscricaoEstadualCredTransf: MouraTextBox;
    readonly txtNotaFiscalCredTransf: MouraTextBox;
    readonly cboUFCredTransf: MouraComboBox;
    readonly txtDataEmissaoCredTransf: MouraTextBoxData;
    readonly txtDataVistoCredTransf: MouraTextBoxData;
    readonly txtSerieCredTransf: MouraTextBox;
    readonly txtValorCredTransf: MouraTextBox;
    CredTransf: any;
    CredTransfs: any[];
    readonly btnGravarCredTransf: MouraButton;
    readonly btnCancelarCredTransf: MouraButton;
    readonly mdEstDebit: MouraModal;
    readonly txtCodigo_EstDebit: MouraTextBox;
    readonly cboMotivoEstDebit: MouraComboBox;
    readonly txtNotaFiscalEstDebit: MouraTextBox;
    readonly txtValorEstDebit: MouraTextBox;
    readonly txtSerieEstDebit: MouraTextBox;
    readonly txtDataEmissaoEstDebit: MouraTextBoxData;
    readonly txtJustificativaEstDebit: MouraTextBox;
    EstDebit: any;
    EstDebits: any[];
    readonly btnGravarEstDebit: MouraButton;
    readonly btnCancelarEstDebit: MouraButton;
    readonly mdEstCred: MouraModal;
    readonly txtCodigo_EstCred: MouraTextBox;
    readonly txtAutoInfracaoEstCred: MouraTextBox;
    readonly cboCodigoEstornoEstCred: MouraComboBox;
    readonly txtNotaFiscalEstCred: MouraTextBox;
    readonly txtValorEstCred: MouraTextBox;
    readonly txtSerieEstCred: MouraTextBox;
    readonly txtDataEmissaoEstCred: MouraTextBoxData;
    EstCred: any;
    EstCreds: any[];
    readonly btnGravarEstCred: MouraButton;
    readonly btnCancelarEstCred: MouraButton;
    readonly mdCompCred: MouraModal;
    readonly txtCodigo_CompCred: MouraTextBoxProcura;
    readonly txtInscricaoEstadualCompCred: MouraTextBox;
    readonly txtNotaFiscalCompCred: MouraTextBox;
    readonly txtDataEmissaoCompCred: MouraTextBoxData;
    readonly txtDataVistoCompCred: MouraTextBoxData;
    readonly txtSerieCompCred: MouraTextBox;
    readonly txtValorCompCred: MouraTextBox;
    CompCred: any;
    CompCreds: any[];
    readonly btnGravarCompCred: MouraButton;
    readonly btnCancelarCompCred: MouraButton;
    readonly mdUtCredRecTransf: MouraModal;
    readonly txtCodigo_UtCredRecTransf: MouraTextBoxProcura;
    readonly txtMotivoUtCredRecTransf: MouraTextBox;
    readonly txtNotaFiscalUtCredRecTransf: MouraTextBox;
    readonly txtDataEmissaoUtCredRecTransf: MouraTextBoxData;
    readonly txtDataVistoUtCredRecTransf: MouraTextBoxData;
    readonly txtSerieUtCredRecTransf: MouraTextBox;
    readonly txtValorUtCredRecTransf: MouraTextBox;
    UtCredRecTransf: any;
    UtCredRecTransfs: any[];
    readonly btnGravarUtCredRecTransf: MouraButton;
    readonly btnCancelarUtCredRecTransf: MouraButton;
    readonly btnRemetenteUtCredRecTransf: MouraButton;
    readonly mdRemetCred: MouraModal;
    readonly txtCodigo_RemetCred: MouraTextBoxProcura;
    readonly txtInscricaoEstadualRemetCred: MouraTextBox;
    readonly txtMotivoRemetCred: MouraTextBox;
    readonly txtNotaFiscalRemetCred: MouraTextBox;
    readonly txtDataEmissaoRemetCred: MouraTextBoxData;
    readonly txtDataVistoRemetCred: MouraTextBoxData;
    readonly txtSerieRemetCred: MouraTextBox;
    readonly txtValorRemetCred: MouraTextBox;
    RemetCred: any;
    RemetCreds: any[];
    readonly btnGravarRemetCred: MouraButton;
    readonly btnCancelarRemetCred: MouraButton;
    readonly mdIncentCult: MouraModal;
    readonly txtCodigo_IncentCult: MouraTextBoxProcura;
    readonly txtSaldoIncentCult: MouraTextBox;
    readonly txtEstornoSaldoIncentCult: MouraTextBox;
    readonly txtAliquotaIncentCult: MouraTextBox;
    readonly txtValorDeduzirIncentCult: MouraTextBox;
    readonly txtCertificadoAprovacaoIncentCult: MouraTextBox;
    readonly txtValorIncentCult: MouraTextBox;
    readonly txtDataAutoIncentCult: MouraTextBoxData;
    readonly lblSaldoIncentCult: MouraLabel;
    IncentCult: any;
    IncentCults: any[];
    readonly btnGravarIncentCult: MouraButton;
    readonly btnCancelarIncentCult: MouraButton;
    readonly mdIncentEsporte: MouraModal;
    readonly txtCodigo_IncentEsporte: MouraTextBoxProcura;
    readonly txtSaldoIncentEsporte: MouraTextBox;
    readonly txtEstornoSaldoIncentEsporte: MouraTextBox;
    readonly txtAliquotaIncentEsporte: MouraTextBox;
    readonly txtValorDeduzirIncentEsporte: MouraTextBox;
    readonly txtCertificadoIncentEsporte: MouraTextBox;
    readonly txtValorIncentEsporte: MouraTextBox;
    readonly txtDataIncentEsporte: MouraTextBoxData;
    readonly lblSaldoIncentEsporte: MouraLabel;
    IncentEsporte: any;
    IncentEsportes: any[];
    readonly btnGravarIncentEsporte: MouraButton;
    readonly btnCancelarIncentEsporte: MouraButton;
    Fiscal: any;
    Fiscais: any[];
    FiscalCR26: any;
    FiscaisCR26: any[];
    FiscalCR27: any;
    FiscaisCR27: any[];
    FiscalCR28: any;
    FiscaisCR28: any[];
    Ajuste: SiSMoura.Core.Entity.Fiscal_Tipo_Ajuste_Contabil;
    OnPageLoad(): void;
    protected MudouCodigoCR25(): void;
    protected MudouCodigoCR26(): void;
    protected MudouCodigoCR27(): void;
    protected MudouCodigoCR28(): void;
    protected MudouCodigoCredRec(): void;
    protected MudouCodigoRessarcSubstTrib(): void;
    protected MudouCodigoCredTransf(): void;
    protected MudouCodigoEstDebit(): void;
    protected MudouCodigoEstCred(): void;
    protected MudouCodigoCompCred(): void;
    protected MudouCodigoUtCredRecTransf(): void;
    protected MudouCodigoRemetCred(): void;
    protected validandoIECentralizador(): void;
    protected validandoIESubstituido(): void;
    protected OnRepostaVisualizar(result: MsgBoxResultEventArgs): void;
    protected OnRepostaVisualizarCR26(result: MsgBoxResultEventArgs): void;
    protected OnRepostaVisualizarCR27(result: MsgBoxResultEventArgs): void;
    protected OnRepostaVisualizarCR28(result: MsgBoxResultEventArgs): void;
    protected Init(): void;
    protected OnDeletar(): void;
    protected OnDetalhamento(): void;
    protected OnDetalhamentoClick(s: any, e: DevExpress.Web.Scripts.ASPxClientButtonClickEventArgs): void;
    protected OnDepoisBuscarExistente(): void;
    protected BuscarDadosAjuste(): void;
    protected OnValidandoGridCredRec(s: any, e: MouraGridViewJSEditavelItemCancelavelEventArgs): void;
    protected OnGrdSelecionouItemCredRec(s: any, e: MouraGridViewJSClickBotaoLinhaEventArgs): void;
    protected PreencherGridCredRec(): void;
    protected ObrigatoriosCredRec(flag: boolean): void;
    protected LimparCredRec(): void;
    protected OnGravarCredRec(s: any, e: DevExpress.Web.Scripts.ASPxClientButtonClickEventArgs): void;
    protected OnCancelarCredRec(s: any, e: DevExpress.Web.Scripts.ASPxClientButtonClickEventArgs): void;
    protected OnValidandoGridRessarcSubstTrib(s: any, e: MouraGridViewJSEditavelItemCancelavelEventArgs): void;
    protected OnGrdSelecionouItemRessarcSubstTrib(s: any, e: MouraGridViewJSClickBotaoLinhaEventArgs): void;
    protected PreencherGridRessarcSubstTrib(): void;
    protected ObrigatoriosRessarcSubstTrib(flag: boolean): void;
    protected LimparRessarcSubstTrib(): void;
    protected OnGravarRessarcSubstTrib(s: any, e: DevExpress.Web.Scripts.ASPxClientButtonClickEventArgs): void;
    protected OnCancelarRessarcSubstTrib(s: any, e: DevExpress.Web.Scripts.ASPxClientButtonClickEventArgs): void;
    protected MudouMotivo(): void;
    protected OnValidandoGridCredTransf(s: any, e: MouraGridViewJSEditavelItemCancelavelEventArgs): void;
    protected OnGrdSelecionouItemCredTransf(s: any, e: MouraGridViewJSClickBotaoLinhaEventArgs): void;
    protected PreencherGridCredTransf(): void;
    protected ObrigatoriosCredTransf(flag: boolean): void;
    protected LimparCredTransf(): void;
    protected OnGravarCredTransf(s: any, e: DevExpress.Web.Scripts.ASPxClientButtonClickEventArgs): void;
    protected OnCancelarCredTransf(s: any, e: DevExpress.Web.Scripts.ASPxClientButtonClickEventArgs): void;
    protected OnValidandoGridEstDebit(s: any, e: MouraGridViewJSEditavelItemCancelavelEventArgs): void;
    protected OnGrdSelecionouItemEstDebit(s: any, e: MouraGridViewJSClickBotaoLinhaEventArgs): void;
    protected PreencherGridEstDebit(): void;
    protected ObrigatoriosEstDebit(flag: boolean): void;
    protected LimparEstDebit(): void;
    protected OnGravarEstDebit(s: any, e: DevExpress.Web.Scripts.ASPxClientButtonClickEventArgs): void;
    protected OnCancelarEstDebit(s: any, e: DevExpress.Web.Scripts.ASPxClientButtonClickEventArgs): void;
    protected OnValidandoGridEstCred(s: any, e: MouraGridViewJSEditavelItemCancelavelEventArgs): void;
    protected OnGrdSelecionouItemEstCred(s: any, e: MouraGridViewJSClickBotaoLinhaEventArgs): void;
    protected PreencherGridEstCred(): void;
    protected ObrigatoriosEstCred(): void;
    protected LimparEstCred(): void;
    protected OnGravarEstCred(s: any, e: DevExpress.Web.Scripts.ASPxClientButtonClickEventArgs): void;
    protected OnCancelarEstCred(s: any, e: DevExpress.Web.Scripts.ASPxClientButtonClickEventArgs): void;
    protected OnValidandoGridCompCred(s: any, e: MouraGridViewJSEditavelItemCancelavelEventArgs): void;
    protected OnGrdSelecionouItemCompCred(s: any, e: MouraGridViewJSClickBotaoLinhaEventArgs): void;
    protected PreencherGridCompCred(): void;
    protected ObrigatoriosCompCred(flag: boolean): void;
    protected LimparCompCred(): void;
    protected OnGravarCompCred(s: any, e: DevExpress.Web.Scripts.ASPxClientButtonClickEventArgs): void;
    protected OnCancelarCompCred(s: any, e: DevExpress.Web.Scripts.ASPxClientButtonClickEventArgs): void;
    protected OnValidandoGridUtCredRecTransf(s: any, e: MouraGridViewJSEditavelItemCancelavelEventArgs): void;
    protected OnGrdSelecionouItemUtCredRecTransf(s: any, e: MouraGridViewJSClickBotaoLinhaEventArgs): void;
    protected PreencherGridUtCredRecTransf(): void;
    protected ObrigatoriosUtCredRecTransf(flag: boolean): void;
    protected LimparUtCredRecTransf(): void;
    protected OnGravarUtCredRecTransf(s: any, e: DevExpress.Web.Scripts.ASPxClientButtonClickEventArgs): void;
    protected OnCancelarUtCredRecTransf(s: any, e: DevExpress.Web.Scripts.ASPxClientButtonClickEventArgs): void;
    protected Maior(): any;
    protected OnAbrirModal(s: any, e: DevExpress.Web.Scripts.ASPxClientButtonClickEventArgs): void;
    protected OnValidandoGridRemetCred(s: any, e: MouraGridViewJSEditavelItemCancelavelEventArgs): void;
    protected OnGrdSelecionouItemRemetCred(s: any, e: MouraGridViewJSClickBotaoLinhaEventArgs): void;
    protected PreencherGridRemetCred(): void;
    protected ObrigatoriosRemetCred(flag: boolean): void;
    protected LimparRemetCred(): void;
    protected OnGravarRemetCred(s: any, e: DevExpress.Web.Scripts.ASPxClientButtonClickEventArgs): void;
    protected OnCancelarRemetCred(s: any, e: DevExpress.Web.Scripts.ASPxClientButtonClickEventArgs): void;
    protected OnValidandoGridIncentCult(s: any, e: MouraGridViewJSEditavelItemCancelavelEventArgs): void;
    protected OnGrdSelecionouItemIncentCult(s: any, e: MouraGridViewJSClickBotaoLinhaEventArgs): void;
    protected PreencherGridIncentCult(): void;
    protected LimparIncentCult(): void;
    protected LimparEntidadeIncentCult(): void;
    protected PreencherEntidadeIncentivo(tipo: number): SiSMoura.Core.Entity.Fiscal_Dapi_Incentivo;
    protected OnGravarIncentCult(s: any, e: DevExpress.Web.Scripts.ASPxClientButtonClickEventArgs): void;
    protected OnCancelarIncentCult(s: any, e: DevExpress.Web.Scripts.ASPxClientButtonClickEventArgs): void;
    protected OnChangeAliquota(): void;
    protected PreencherLabel(): void;
    protected OnValidandoGridIncentEsporte(s: any, e: MouraGridViewJSEditavelItemCancelavelEventArgs): void;
    protected OnGrdSelecionouItemIncentEsporte(s: any, e: MouraGridViewJSClickBotaoLinhaEventArgs): void;
    protected PreencherGridIncentEsporte(): void;
    protected LimparIncentEsporte(): void;
    protected LimparEntidadeIncentEsporte(): void;
    protected OnGravarIncentEsporte(s: any, e: DevExpress.Web.Scripts.ASPxClientButtonClickEventArgs): void;
    protected OnCancelarIncentEsporte(s: any, e: DevExpress.Web.Scripts.ASPxClientButtonClickEventArgs): void;
    protected OnChangeAliquotaIncentEsporte(): void;
    protected PreencherLabelIncentEsporte(): void;
    protected OnIEs(s: any, e: DevExpress.Web.Scripts.ASPxClientButtonClickEventArgs): void;
    protected OnIESubstituto(s: any, e: DevExpress.Web.Scripts.ASPxClientButtonClickEventArgs): void;
    protected OnIE_Substituido(s: any, e: DevExpress.Web.Scripts.ASPxClientButtonClickEventArgs): void;
    protected OnCR28CredAcum_RessarcimentoST(s: any, e: DevExpress.Web.Scripts.ASPxClientButtonClickEventArgs): void;
    protected OnGravarCR25(s: any, e: DevExpress.Web.Scripts.ASPxClientButtonClickEventArgs): void;
    protected OnCancelarCR25(s: any, e: DevExpress.Web.Scripts.ASPxClientButtonClickEventArgs): void;
    protected OnValidando(s: any, e: MouraGridViewJSEditavelItemValidandoEventArgs): void;
    protected LimparFiscal(): void;
    protected OnGravarCR26(s: any, e: DevExpress.Web.Scripts.ASPxClientButtonClickEventArgs): void;
    protected OnCancelarCR26(s: any, e: DevExpress.Web.Scripts.ASPxClientButtonClickEventArgs): void;
    protected OnValidandoCR26(s: any, e: MouraGridViewJSEditavelItemCancelavelEventArgs): void;
    protected LimparFiscalCR26(): void;
    protected OnGravarCR27(s: any, e: DevExpress.Web.Scripts.ASPxClientButtonClickEventArgs): void;
    protected OnCancelarCR27(s: any, e: DevExpress.Web.Scripts.ASPxClientButtonClickEventArgs): void;
    protected OnValidandoCR27(s: any, e: MouraGridViewJSEditavelItemCancelavelEventArgs): void;
    protected LimparFiscalCR27(): void;
    protected OnGravarCR28(s: any, e: DevExpress.Web.Scripts.ASPxClientButtonClickEventArgs): void;
    protected OnCancelarCR28(s: any, e: DevExpress.Web.Scripts.ASPxClientButtonClickEventArgs): void;
    protected OnValidandoCR28(s: any, e: MouraGridViewJSEditavelItemCancelavelEventArgs): void;
    protected LimparFiscalCR28(): void;
    protected ValidarCampos(): any;
    protected OnDepoisPesquisar(s: any, e: MouraDepoisPesquisarEventArgs): void;
    PreencherCamposFiscalAjuste(): void;
    PreencherEmpresaContabil(): void;
    protected BuscarGrade(): void;
    protected OnGrdSelecionouItem(s: any, e: MouraGridViewJSClickBotaoLinhaEventArgs): void;
    protected OnGrdSelecionouItemCR25(s: any, e: MouraGridViewJSClickBotaoLinhaEventArgs): void;
    protected OnGrdSelecionouItemCR26(s: any, e: MouraGridViewJSClickBotaoLinhaEventArgs): void;
    protected OnGrdSelecionouItemCR27(s: any, e: MouraGridViewJSClickBotaoLinhaEventArgs): void;
    protected OnGrdSelecionouItemCR28(s: any, e: MouraGridViewJSClickBotaoLinhaEventArgs): void;
    protected OnDepoisLimpar(Entity: SiSMoura.Core.Entity.Fiscal_Outros_Lancamentos): boolean;
    protected OnDepoisGravar(): boolean;
    protected OnDepoisDeletar(): boolean;
    protected OnAntesGravar(): boolean;
}
declare var c_OutLan: C_OutLan;
//# sourceMappingURL=C_OutLan.d.ts.map