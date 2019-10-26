declare class C_MailPlan extends MouraPageCadastroAngular<SiSMoura.Core.Entity.Animais_Plano_Email> {
    readonly txtCodigo: MouraTextBoxProcura;
    readonly htmlEditorMensagem: MouraHTMLEditor;
    readonly htmlEditorAssinatura: MouraHTMLEditor;
    readonly grdRegistros: MouraGridViewJS;
    protected Init(): void;
    protected OnGravouSucesso(s: any, e: MouraGravouSucessoEventArgs): void;
    protected OnExcluiuSucesso(s: any, e: any): void;
    protected OnAntesGravar(): boolean;
    private ValidarCampos;
    protected OnDepoisGravar(): boolean;
    protected OnGridSelecionouItem(s: any, e: MouraGridViewJSClickBotaoLinhaEventArgs): void;
    protected OnDepoisLimpar(Entity: SiSMoura.Core.Entity.Animais_Plano_Email): void;
    OnPageLoad(): void;
    protected OnDepoisBuscarExistente(Entidade: SiSMoura.Core.Entity.Animais_Plano_Email): void;
    protected GetTags(): string;
}
declare var c_MailPlan: C_MailPlan;
//# sourceMappingURL=C_MailPlan.d.ts.map