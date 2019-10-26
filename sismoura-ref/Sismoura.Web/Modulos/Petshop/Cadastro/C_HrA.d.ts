declare class C_HrA extends MouraPageAngular {
    readonly grid: MouraGridViewJS;
    readonly txtMedico: MouraTextBoxProcura;
    readonly txtProfissionalDe: MouraTextBoxProcura;
    readonly txtIntervalo: MouraTextBox;
    readonly txtPeriodo: MouraTextBoxPeriodo;
    readonly txtHora: MouraTextBoxHora;
    readonly txtHoraFinal: MouraTextBoxHora;
    readonly lstDia: MouraCheckBoxList;
    readonly dlgCopia: MouraModal;
    readonly btnCopiar: MouraButton;
    readonly btnConfirmarCopia: MouraButton;
    readonly btnCancelaCopia: MouraButton;
    readonly cboEmpresa: MouraComboBoxEmpresa;
    readonly Botoes: MouraCadastroButton;
    protected onCboEmpresaSelectedItemChanged(): void;
    protected Init(): void;
    protected OnClickCopiar(s: any, e: DevExpress.Web.Scripts.ASPxClientButtonClickEventArgs): void;
    protected OnClickConfirmarCopia(s: any, e: DevExpress.Web.Scripts.ASPxClientButtonClickEventArgs): void;
    protected OnClickCancelarCopia(s: any, e: DevExpress.Web.Scripts.ASPxClientButtonClickEventArgs): void;
    protected OnRespondeuConfirmarCopia(result: MsgBoxResultEventArgs): void;
    protected OnRespondeuExcluir(result: MsgBoxResultEventArgs): void;
    protected OnClickGravar(s: any, e: DevExpress.Web.Scripts.ASPxClientButtonClickEventArgs): void;
    protected validarCampos(): boolean;
    protected OnClickExcluir(s: any, e: DevExpress.Web.Scripts.ASPxClientButtonClickEventArgs): void;
    protected OnClickNovo(s: any, e: DevExpress.Web.Scripts.ASPxClientButtonClickEventArgs): void;
    protected OnClickNovoProcura(s: any, e: DevExpress.Web.Scripts.ASPxClientButtonClickEventArgs): void;
    protected LimparCampos(): void;
    protected OnProcurouProfissional(): void;
    OnPageLoad(): void;
    protected PreencherGrade(): void;
    protected LimparCamposHorario(): void;
}
declare const c_HrA: C_HrA;
//# sourceMappingURL=C_HrA.d.ts.map