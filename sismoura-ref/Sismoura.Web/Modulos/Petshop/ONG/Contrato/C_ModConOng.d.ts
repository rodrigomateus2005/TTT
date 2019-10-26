declare class C_ModConOng extends MouraPageCadastroAngular<SiSMoura.Core.Entity.Animais_Modelo_Contrato_Ong> {
    readonly Grid: MouraGridViewJS;
    readonly htmlEditor: MouraHTMLEditor;
    protected Init(): void;
    protected OnGridSelecionouItem(s: any, e: MouraGridViewJSClickBotaoLinhaEventArgs): void;
    OnPageLoad(): void;
    protected OnDepoisLimpar(Entity: SiSMoura.Core.Entity.Animais_Modelo_Contrato_Ong): void;
    protected OnDepoisBuscarExistente(Entity: SiSMoura.Core.Entity.Animais_Modelo_Contrato_Ong): void;
    protected OnAntesGravar(): boolean;
    protected OnDepoisGravar(): boolean;
    protected PreencherGrade(): void;
    protected GetTags(): string;
}
declare var c_ModConOng: C_ModConOng;
//# sourceMappingURL=C_ModConOng.d.ts.map