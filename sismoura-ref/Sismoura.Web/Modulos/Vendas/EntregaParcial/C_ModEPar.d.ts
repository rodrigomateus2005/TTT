declare class C_ModEPar extends MouraPageCadastroAngular<SiSMoura.Core.Entity.Modelo_Entrega_Parcial> {
    readonly Grid: MouraGridViewJS;
    readonly htmlEditor: MouraHTMLEditor;
    protected Init(): void;
    protected OnGridSelecionouItem(s: any, e: MouraGridViewJSClickBotaoLinhaEventArgs): void;
    OnPageLoad(): void;
    protected OnDepoisLimpar(Entity: SiSMoura.Core.Entity.Modelo_Entrega_Parcial): void;
    protected OnDepoisBuscarExistente(Entity: SiSMoura.Core.Entity.Modelo_Entrega_Parcial): void;
    protected OnAntesGravar(): boolean;
    protected OnDepoisGravar(): boolean;
    protected PreencherGrade(): void;
    protected GetTags(): string;
}
declare var c_ModEPar: C_ModEPar;
//# sourceMappingURL=C_ModEPar.d.ts.map