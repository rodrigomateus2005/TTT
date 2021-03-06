declare class R_Chekin extends MouraPageRelacaoAngular {
    readonly AccordionFiltros: MouraAccordion;
    readonly Grid: MouraGridViewJS;
    readonly chkLocal: MouraCheckBoxList;
    readonly chkSituacao: MouraCheckBoxList;
    readonly dlgServico: MouraModal;
    readonly grdServico: MouraGridViewJS;
    readonly btnSalvar: MouraButton;
    readonly btnFechar: MouraButton;
    readonly mdlDesistencia: MouraModal;
    readonly lblCodCheckin: MouraLabel;
    readonly lblCodCliente: MouraLabel;
    readonly cboEmpresa: MouraComboBoxEmpresa;
    readonly txtAssunto: MouraTextBoxProcura;
    readonly hdnCodigoInterval: HTMLInputElement;
    readonly hdnCHKServico: HTMLInputElement;
    readonly chkMostrarConcluidos: MouraCheckBox;
    readonly chkTempoAdicionar: MouraCheckBox;
    readonly txtTempoAtualizacao: MouraTextBox;
    readonly chkPeriodo: MouraCheckBox;
    readonly txtPeriodo: MouraTextBoxPeriodo;
    readonly accFiltro: MouraAccordion;
    readonly accLegendas: MouraAccordion;
    readonly txtCheckin: MouraTextBoxProcura;
    readonly btnServico: MouraButton;
    readonly btnOkDesistencia: MouraButton;
    readonly txtMotivoDesistencia: MouraTextBox;
    readonly pnC: HTMLElement;
    readonly btnNovoCheckin: MouraButton;
    protected LimparCampos(): void;
    OnPageLoad(): void;
    protected Init(): void;
    protected OnchkchkSituacaoSelectionChanged(): void;
    protected OnchkMostrarConcluidosCheckChanged(): void;
    PreencherGrade(): void;
    protected AlterarVisiblePeriodo(): void;
    GerarGrade(): void;
    PreencherLabel(): void;
    protected ValidarCampos(): boolean;
    protected OnGridCellPrepared(s: any, e: MouraGridViewJSCellPreparedEventArgs): void;
    protected OnGridSelecionouLinha(s: any, e: MouraGridViewJSClickBotaoLinhaEventArgs): void;
    protected OnGridClicouBotao(s: any, e: MouraGridViewJSClickBotaoLinhaEventArgs): void;
    protected OnClickBotaoConfirmarEvento(s: any, e: DevExpress.Web.Scripts.ASPxClientButtonClickEventArgs): boolean;
    protected OnClickDesistencia(checkIn: number, codCliente: number): boolean;
    protected FinalizarCheckin(codCheckIn: number, codCliente: number, isDesistencia: string, motivoDesistencia: string): void;
    protected OnSelecionouOpcaoFinalizar(e: MsgBoxResultEventArgs): void;
    protected AbrirServico(codCheckIn: number): void;
    protected CarregarServicosCheckin(codCheckin: any): void;
    protected OnClickBotaoSalvar(s: any, e: DevExpress.Web.Scripts.ASPxClientButtonClickEventArgs): void;
    protected OnClickBotaoFechar(s: any, e: DevExpress.Web.Scripts.ASPxClientButtonClickEventArgs): void;
    private LimparInterval;
    Refresh(): string;
    protected OnCheckPeriodoChanged(): void;
    protected MudarSituacaoCheckin(codCheckIn: number, codSituacaoAtual: number, finalizado: string): void;
    protected OnClickBotaoNovoCheckin(s: any, e: MouraClickEventArgs): void;
}
declare var r_Chekin: R_Chekin;
//# sourceMappingURL=R_Chekin.d.ts.map