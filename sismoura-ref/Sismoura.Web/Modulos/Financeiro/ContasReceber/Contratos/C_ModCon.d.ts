declare class C_ModCon extends MouraPageCadastroAngular<SiSMoura.Core.Entity.Os_Modelo_Contrato> {
    readonly Grid: MouraGridViewJS;
    readonly htmlEditor: MouraHTMLEditor;
    protected Init(): void;
    protected OnGridSelecionouItem(s: any, e: MouraGridViewJSClickBotaoLinhaEventArgs): void;
    OnPageLoad(): void;
    protected OnDepoisLimpar(Entity: SiSMoura.Core.Entity.Os_Modelo_Contrato): void;
    protected OnDepoisBuscarExistente(Entity: SiSMoura.Core.Entity.Os_Modelo_Contrato): void;
    protected OnAntesGravar(): boolean;
    protected OnDepoisGravar(): boolean;
    protected PreencherGrade(): void;
    protected GetTags(): string;
}
declare var c_ModCon: C_ModCon;
//# sourceMappingURL=C_ModCon.d.ts.map