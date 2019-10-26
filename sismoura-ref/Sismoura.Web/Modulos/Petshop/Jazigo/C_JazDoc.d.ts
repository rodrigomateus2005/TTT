declare class C_JazDoc extends MouraPageCadastroAngular<SiSMoura.Core.Entity.Animais_Jazigo_Documento> {
    readonly Grid: MouraGridViewJS;
    readonly htmlEditor: MouraHTMLEditor;
    protected Init(): void;
    protected OnGridSelecionouItem(s: any, e: MouraGridViewJSClickBotaoLinhaEventArgs): void;
    OnPageLoad(): void;
    protected OnDepoisLimpar(Entity: SiSMoura.Core.Entity.Animais_Jazigo_Documento): void;
    protected OnDepoisBuscarExistente(Entity: SiSMoura.Core.Entity.Animais_Jazigo_Documento): void;
    protected OnAntesGravar(): boolean;
    protected OnDepoisGravar(): boolean;
    protected PreencherGrade(): void;
    protected GetTags(): string;
}
declare var c_JazDoc: C_JazDoc;
//# sourceMappingURL=C_JazDoc.d.ts.map