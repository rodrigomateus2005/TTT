declare class C_MailCon extends MouraPageCadastroAngular<SiSMoura.Core.Entity.Animais_Configuracao_Email> {
    readonly txtCodigo: MouraTextBoxProcura;
    readonly htmlEditorMensagem: MouraHTMLEditor;
    protected Init(): void;
    protected OnDepoisBuscarExistente(Entidade: SiSMoura.Core.Entity.Animais_Configuracao_Email): void;
    protected OnAntesGravar(): boolean;
    protected OnDepoisLimpar(Entity: SiSMoura.Core.Entity.Animais_Configuracao_Email): void;
    private ValidarCampos;
    protected GetTags(): string;
}
declare const c_MailCon: C_MailCon;
//# sourceMappingURL=C_MailCon.d.ts.map