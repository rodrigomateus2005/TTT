declare class C_HosChkLst extends MouraPageAngular {
    readonly grid: MouraGridViewJS;
    readonly txtReserva: MouraTextBoxProcura;
    readonly txtProfissional: MouraTextBoxProcura;
    readonly txtCodigo: MouraTextBoxProcura;
    readonly txtCheckListDescricao: MouraTextBox;
    readonly btnImprimirCheckList: MouraButton;
    readonly sgnCheckList: MouraSignaturePad;
    readonly btnAssinatura: MouraButton;
    readonly btnGravar: MouraButton;
    readonly btnLimpar: MouraButton;
    readonly btnExcluir: MouraButton;
    CheckListItens: SiSMoura.Core.Entity.Animais_Hospedagem_Checklist_Item[];
    Assinatura: SiSMoura.Core.Entity.Animais_Hospedagem_Checklist_Assinatura;
    protected Init(): void;
    OnPageLoad(): void;
    protected OnClickImprimirChecklist(s: any, e: DevExpress.Web.Scripts.ASPxClientButtonClickEventArgs): void;
    protected OnSalvouAssinatura(s: any, e: any): void;
    protected OnClickAssinatura(s: any, e: DevExpress.Web.Scripts.ASPxClientButtonClickEventArgs): void;
    private onBtnGravarClick;
    private GravaCheckList;
    private ValidarCheckList;
    private onBtnLimparClick;
    protected OnTxtReservaProcurou(s: any, e: MouraEventArgs): void;
    protected OnTxtCodigoProcurou(s: any, e: MouraEventArgs): void;
    private LimparCampos;
    private PreencherHospedagem;
    private HabilitarDesabilitarCamposAvaliacaoFisica;
}
declare var c_HosChkLst: C_HosChkLst;
//# sourceMappingURL=C_HosChkLst.d.ts.map