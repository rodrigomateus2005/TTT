declare class C_ModOrc extends MouraPageCadastroAngular<SiSMoura.Core.Entity.Modelo_Orcamento> {
    readonly Grid: MouraGridViewJS;
    readonly htmlEditor: MouraHTMLEditor;
    protected Init(): void;
    protected OnGridSelecionouItem(s: any, e: MouraGridViewJSClickBotaoLinhaEventArgs): void;
    OnPageLoad(): void;
    protected OnDepoisLimpar(Entity: SiSMoura.Core.Entity.Modelo_Orcamento): void;
    protected OnDepoisBuscarExistente(Entity: SiSMoura.Core.Entity.Modelo_Orcamento): void;
    protected OnAntesGravar(): boolean;
    protected OnDepoisGravar(): boolean;
    protected PreencherGrade(): void;
    protected GetTags(): string;
}
declare var c_ModOrc: C_ModOrc;
//# sourceMappingURL=C_ModOrc.d.ts.map