declare class C_ImpAte extends MouraPageCadastroAngular<SiSMoura.Core.Entity.Animais_Atendimento_Documento> {
    readonly Grid: MouraGridViewJS;
    readonly htmlEditor: MouraHTMLEditor;
    protected Init(): void;
    protected OnGridSelecionouItem(s: any, e: MouraGridViewJSClickBotaoLinhaEventArgs): void;
    OnPageLoad(): void;
    protected OnDepoisLimpar(Entity: SiSMoura.Core.Entity.Animais_Atendimento_Documento): void;
    protected OnDepoisBuscarExistente(Entity: SiSMoura.Core.Entity.Animais_Atendimento_Documento): void;
    protected OnAntesGravar(): boolean;
    protected OnDepoisGravar(): boolean;
    protected PreencherGrade(): void;
    protected GetTags(): string;
}
declare var c_ImpAte: C_ImpAte;
//# sourceMappingURL=C_ImpAte.d.ts.map