declare class C_ImpMat extends MouraPageCadastroAngular<SiSMoura.Core.Entity.Animais_Impressora_Nao_Fiscal> {
    readonly Grid: MouraGridViewJS;
    readonly btnTeste: MouraButton;
    readonly txtCodigo: MouraTextBoxProcura;
    readonly txtCaminho: MouraTextBox;
    Init(): void;
    OnPageLoad(): void;
    protected PreencherGrade(): void;
    protected OnDepoisLimpar(Entity: SiSMoura.Core.Entity.Animais_Impressora_Nao_Fiscal): void;
    protected OnDepoisGravar(): boolean;
    protected OnSelecionouLinha(s: any, e: MouraGridViewJSClickBotaoLinhaEventArgs): void;
    protected OnClickBotaoTeste(s: any, e: DevExpress.Web.Scripts.ASPxClientButtonClickEventArgs): void;
}
declare const c_ImpMat: C_ImpMat;
//# sourceMappingURL=C_ImpMat.d.ts.map