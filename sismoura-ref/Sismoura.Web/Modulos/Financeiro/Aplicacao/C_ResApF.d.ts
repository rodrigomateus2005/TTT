declare class C_ResApF extends MouraPageAngular {
    readonly txtPeriodo: MouraTextBoxPeriodo;
    readonly btnGerar: MouraButton;
    readonly btnResgatar: MouraButton;
    readonly cboConta_Corrente_Origem: MouraComboBox;
    readonly cboConta_Corrente_Destino: MouraComboBox;
    readonly cboConta_Corrente_Destino_Modal: MouraComboBox;
    readonly txtValor_Resgate: MouraTextBox;
    readonly txtJuros: MouraTextBox;
    readonly lblTotal: MouraLabel;
    readonly lblConta_CorrenteOrigem: MouraLabel;
    readonly grd: MouraGridViewJS;
    readonly mdResgate: MouraModal;
    readonly hdnCodigo: HTMLInputElement;
    readonly hdnValor: HTMLInputElement;
    protected Init(): void;
    protected OnClickBotaoLinha(s: any, e: MouraGridViewJSClickBotaoLinhaEventArgs): void;
    protected CalcularTotal(): void;
    protected OnClickResgatar(s: any, e: DevExpress.Web.Scripts.ASPxClientButtonClickEventArgs): void;
    protected OnClickGerar(s: any, e: DevExpress.Web.Scripts.ASPxClientButtonClickEventArgs): void;
    protected preencherGrade(): void;
}
declare var c_ResApF: C_ResApF;
//# sourceMappingURL=C_ResApF.d.ts.map