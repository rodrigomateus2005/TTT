declare class C_FinancTipDoc extends MouraPageCadastroAngular<SiSMoura.Core.Entity.Modelo_Cobranca> {
    readonly grid: MouraGridViewJS;
    readonly htmlEditor: MouraHTMLEditor;
    OnPageLoad(): void;
    Init(): void;
    protected GetTags(): string;
    protected OnDepoisLimpar(Entity: SiSMoura.Core.Entity.Modelo_Cobranca): void;
    protected OnGridSelecionouItem(s: any, e: MouraGridViewJSClickBotaoLinhaEventArgs): void;
    protected OnDepoisBuscarExistente(Entity: SiSMoura.Core.Entity.Modelo_Cobranca): void;
    protected OnAntesGravar(): boolean;
    protected OnDepoisGravar(): boolean;
    protected OnDepoisDeletar(): boolean;
    protected PreencherGrade(): void;
}
declare const c_FinancTipDoc: C_FinancTipDoc;
//# sourceMappingURL=C_FinancTipDoc.d.ts.map