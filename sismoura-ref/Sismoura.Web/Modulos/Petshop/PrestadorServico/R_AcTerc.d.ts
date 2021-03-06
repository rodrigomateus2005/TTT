declare class R_AcTerc extends MouraPageAngular {
    readonly grdServicos: MouraGridViewJS;
    readonly grdEscala: MouraGridViewJS;
    readonly btnGerar: MouraButton;
    readonly btnAceitarServicos: MouraButton;
    readonly btnRecusarServicos: MouraButton;
    readonly txtPeriodoEscala: MouraTextBoxPeriodo;
    readonly btnAceitarEscala: MouraButton;
    readonly btnRecusarEscala: MouraButton;
    readonly divSolicitacaoEscala: HTMLElement;
    readonly divAceiteEscala: HTMLElement;
    readonly btnFaltaServico: MouraButton;
    readonly divAtendimentoFaltaServico: HTMLElement;
    readonly divServicoFaltante: HTMLElement;
    readonly txtPeriodoAtendimentosFaltante: MouraTextBoxPeriodo;
    readonly btnGerarFaltaAtendimento: MouraButton;
    readonly grdAtendimentosFaltaServico: MouraGridViewJS;
    readonly lblAtendimentoFaltaServico: MouraLabel;
    readonly dlgFaltaServico: MouraModal;
    readonly txtServico: MouraTextBoxProcura;
    readonly grdServicosFaltantes: MouraGridViewJSEditavel;
    Servicos: SiSMoura.Core.Entity.AnimaisRecusaServicoRetorno[];
    readonly btnSalvarRecusa: MouraButton;
    readonly btnVoltarAtendimentos: MouraButton;
    readonly dlgMotivoRecusaServicos: MouraModal;
    readonly txtMotivoRecusaServicos: MouraTextBoxProcura;
    readonly txtObservacaoRecusaServicos: MouraTextBox;
    readonly btnConfirmarRecusaServicos: MouraButton;
    readonly btnCancelarRecusaServicos: MouraButton;
    PeriodosSelecionados: SiSMoura.Core.Entity.AnimaisPeriodoSelecionadoRetorno[];
    readonly dlgMotivoRecusaEscala: MouraModal;
    readonly txtMotivoRecusaEscala: MouraTextBox;
    readonly btnConfirmarRecusaEscala: MouraButton;
    readonly btnCancelarRecusaEscala: MouraButton;
    readonly btnConfirmarSolicitacao: MouraButton;
    readonly dlgConfirmarSolicitacao: MouraModal;
    readonly cboEmpresaEscala: MouraComboBox;
    readonly btnFinalizarSolicitacao: MouraButton;
    readonly tab: MouraTabPanel;
    readonly dlgHistoricoServicos: MouraModal;
    readonly txtPeriodoHistoricoServicos: MouraTextBoxPeriodo;
    readonly btnGerarHistoricoServicos: MouraButton;
    readonly grdHistoricoServicos: MouraGridViewJS;
    readonly btnHistoricoServicos: MouraButton;
    readonly btnExtrato: MouraButton;
    readonly dlgHistoricoRecusa: MouraModal;
    readonly txtPeriodoHistoricoRecusa: MouraTextBoxPeriodo;
    readonly btnHistoricoRecusa: MouraButton;
    readonly btnGerarHistoricoRecusa: MouraButton;
    readonly grdHistoricoRecusa: MouraGridViewJS;
    readonly btnHistoricoServicoFaltante: MouraButton;
    readonly dlgHistoricoServicoFaltante: MouraModal;
    readonly txtPeriodoServicoFaltante: MouraTextBoxPeriodo;
    readonly btnGerarServicoFaltante: MouraButton;
    readonly grdHistoricoServicoFaltante: MouraGridViewJS;
    protected Init(): void;
    OnPageLoad(): void;
    protected PreencherGradeServicos(): void;
    protected ConfigurarGradeEscala(): void;
    protected PreencherGradeEscala(): void;
    protected OnGrdServicosCellPrepared(s: any, e: MouraGridViewJSCellPreparedEventArgs): void;
    protected OnGrdEscalaCellPrepared(s: any, e: MouraGridViewJSCellPreparedEventArgs): void;
    protected OnGrdHistoricoRecusaCellPrepared(s: any, e: MouraGridViewJSCellPreparedEventArgs): void;
    protected OnClickIncluirServicoFaltante(s: any, e: MouraGridViewJSEditavelItemCancelavelEventArgs): void;
    protected OnClickGerar(s: any, e: DevExpress.Web.Scripts.ASPxClientButtonClickEventArgs): void;
    protected AlteraVisibleAtendimentoFaltante(visible: boolean): void;
    protected OnClickGerarFaltaAtendimento(s: any, e: DevExpress.Web.Scripts.ASPxClientButtonClickEventArgs): void;
    protected OnClickVoltarAtendimentos(s: any, e: DevExpress.Web.Scripts.ASPxClientButtonClickEventArgs): void;
    private atendimentoServicoFaltante;
    protected OnGrdAtendimentosFaltaServicoClickBotaoLinha(s: any, e: MouraGridViewJSClickBotaoLinhaEventArgs): void;
    protected OnClickAceitarServicos(s: any, e: DevExpress.Web.Scripts.ASPxClientButtonClickEventArgs): void;
    protected OnClickRecusarServicos(s: any, e: DevExpress.Web.Scripts.ASPxClientButtonClickEventArgs): void;
    protected OnClickAceitarEscala(s: any, e: MouraClickEventArgs): void;
    protected OnClickRecusarEscala(s: any, e: MouraClickEventArgs): void;
    protected OnClickConfirmarRecusaEscala(s: any, e: MouraClickEventArgs): void;
    protected OnClickCancelarRecusaEscala(s: any, e: MouraClickEventArgs): void;
    protected AceitarRecusarEscala(isAceitar: boolean): void;
    protected OnGrdEscalaClicouBotao(s: any, e: MouraGridViewJSClickBotaoLinhaEventArgs): void;
    private AtualizaVisibleEscala;
    private RetornaDiaSemana;
    protected OnClickConfirmarSolicitacao(s: any, e: MouraClickEventArgs): void;
    protected AceitarRecusar(isAceitar: boolean): void;
    protected OnClickFinalizarSolicitacao(s: any, e: MouraClickEventArgs): void;
    protected OnRespostaAceitarServicos(result: MsgBoxResultEventArgs): void;
    protected OnRespostaRecusarServicos(result: MsgBoxResultEventArgs): void;
    protected OnClickConfirmarRecusaServicos(s: any, e: DevExpress.Web.Scripts.ASPxClientButtonClickEventArgs): void;
    protected OnClickFaltaServico(s: any, e: DevExpress.Web.Scripts.ASPxClientButtonClickEventArgs): void;
    protected OnClickCancelarRecusaServicos(s: any, e: DevExpress.Web.Scripts.ASPxClientButtonClickEventArgs): void;
    protected OnClickHistoricoServico(s: any, e: DevExpress.Web.Scripts.ASPxClientButtonClickEventArgs): void;
    protected OnClickHistoricoRecusa(s: any, e: DevExpress.Web.Scripts.ASPxClientButtonClickEventArgs): void;
    protected OnProcurouMotivoRecusaServicos(e: MouraEventHandler): void;
    protected OnClickSalvarRecusa(s: any, e: DevExpress.Web.Scripts.ASPxClientButtonClickEventArgs): void;
    protected OnClickGerarHistoricoServico(s: any, e: DevExpress.Web.Scripts.ASPxClientButtonClickEventArgs): void;
    protected OnClickGerarHistoricoRecusa(s: any, e: DevExpress.Web.Scripts.ASPxClientButtonClickEventArgs): void;
    protected ValidarPeriodo(dataInicio: Date, dataFim: Date): boolean;
    protected OnClickBtnExtrato(s: any, e: DevExpress.Web.Scripts.ASPxClientButtonClickEventArgs): void;
    protected OnFechouModalMotivoRecusaServicos(s: any, e: MouraEventHandler): void;
    protected OnFechouModalMotivoRecusaEscala(s: any, e: MouraEventHandler): void;
    protected OnFechouModalConfirmarSolicitacao(s: any, e: MouraEventHandler): void;
    protected OnFechouModalHistoricoServico(s: any, e: MouraEventHandler): void;
    protected OnFechouModalHistoricoRecusa(s: any, e: MouraEventHandler): void;
    protected OnFechouModalFaltaServico(s: any, e: MouraEventHandler): void;
    protected OnClickHistoricoServicoFaltante(s: any, e: DevExpress.Web.Scripts.ASPxClientButtonClickEventArgs): void;
    protected OnClickGerarServicoFaltante(s: any, e: DevExpress.Web.Scripts.ASPxClientButtonClickEventArgs): void;
    protected OnGrdHistoricoServicoFaltanteCellPrepared(s: any, e: MouraGridViewJSCellPreparedEventArgs): void;
    protected OnFechouModalHistoricoServicoFaltante(s: any, e: MouraEventHandler): void;
}
declare const r_AcTerc: R_AcTerc;
//# sourceMappingURL=R_AcTerc.d.ts.map