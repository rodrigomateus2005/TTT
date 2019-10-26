declare class C_DocEx extends MouraPageCadastroAngular<SiSMoura.Core.Entity.Animais_Veterinaria_Documento_Exame> {
    readonly Grid: MouraGridViewJS;
    readonly htmlEditor: MouraHTMLEditor;
    protected Init(): void;
    protected OnGridSelecionouItem(s: any, e: MouraGridViewJSClickBotaoLinhaEventArgs): void;
    OnPageLoad(): void;
    protected OnDepoisLimpar(Entity: SiSMoura.Core.Entity.Animais_Veterinaria_Documento_Exame): void;
    protected OnDepoisBuscarExistente(Entity: SiSMoura.Core.Entity.Animais_Veterinaria_Documento_Exame): void;
    protected OnAntesGravar(): boolean;
    protected OnDepoisGravar(): boolean;
    protected PreencherGrade(): void;
    protected GetTags(): string;
}
declare var c_DocEx: C_DocEx;
//# sourceMappingURL=C_DocEx.d.ts.map