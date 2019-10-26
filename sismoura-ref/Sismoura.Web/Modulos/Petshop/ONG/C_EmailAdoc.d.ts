declare class C_EmailAdoc extends MouraPageCadastroAngular<SiSMoura.Core.Entity.Animais_Adocao_Email> {
    readonly txtCodigo: MouraTextBoxProcura;
    readonly htmlEditorMensagem: MouraHTMLEditor;
    protected Init(): void;
    protected OnDepoisBuscarExistente(Entidade: SiSMoura.Core.Entity.Animais_Adocao_Email): void;
    protected OnAntesGravar(): boolean;
    protected OnDepoisLimpar(Entity: SiSMoura.Core.Entity.Animais_Adocao_Email): void;
    private ValidarCampos;
    protected GetTags(): string;
}
declare var c_EmailAdoc: C_EmailAdoc;
//# sourceMappingURL=C_EmailAdoc.d.ts.map