declare class C_Saldo extends MouraPageCadastroAngular<SiSMoura.Core.Entity.Saldo> {
    readonly Grid: MouraGridViewJS;
    readonly btnCalcular: MouraButton;
    readonly btnGerarLote: MouraButton;
    readonly mdSaldos: MouraModal;
    readonly txtPeriodo: MouraTextBoxPeriodo;
    readonly txtData: MouraTextBoxData;
    readonly lstContaCorrente_Lista: MouraCheckBoxList;
    readonly lstContaCorrente_CheckBox: MouraCheckBox;
    protected Init(): void;
    OnPageLoad(): void;
    protected OnSelecionouLinha(s: any, e: MouraGridViewJSClickBotaoLinhaEventArgs): void;
    protected OnClickCalcular(s: any, e: DevExpress.Web.Scripts.ASPxClientButtonClickEventArgs): void;
    protected LimparCamposCalcular(): void;
    protected OnClickGerarLote(s: any, e: DevExpress.Web.Scripts.ASPxClientButtonClickEventArgs): void;
    protected OnRepostaGerarSaldos(result: MsgBoxResultEventArgs): void;
    protected OnDepoisLimpar(Entity: SiSMoura.Core.Entity.Saldo): void;
    protected OnAntesGravar(): boolean;
    protected GetCadastrados(): void;
    protected OnDepoisGravar(): boolean;
}
declare const c_Saldo: C_Saldo;
//# sourceMappingURL=C_Saldo.d.ts.map