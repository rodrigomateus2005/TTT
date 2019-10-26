declare class C_ModPromis extends MouraPageCadastroAngular<SiSMoura.Core.Entity.Promissoria_Modelo> {
    readonly grid: MouraGridViewJS;
    readonly htmlEditor: MouraHTMLEditor;
    protected Init(): void;
    protected OnGridSelecionouItem(s: any, e: MouraGridViewJSClickBotaoLinhaEventArgs): void;
    OnPageLoad(): void;
    protected OnDepoisLimpar(Entity: SiSMoura.Core.Entity.Promissoria_Modelo): void;
    protected OnDepoisBuscarExistente(Entity: SiSMoura.Core.Entity.Promissoria_Modelo): void;
    protected OnAntesGravar(): boolean;
    protected OnDepoisGravar(): boolean;
    protected PreencherGrade(): void;
    protected GetTags(): string;
}
declare var c_ModPromis: C_ModPromis;
//# sourceMappingURL=C_ModPromis.d.ts.map