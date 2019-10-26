declare class C_Modelo extends MouraPageCadastroAngular<SiSMoura.Core.Entity.Modelo> {
    readonly Grid: MouraGridViewJS;
    protected Init(): void;
    protected OnGridSelecionouItem(s: any, e: MouraGridViewJSClickBotaoLinhaEventArgs): void;
    OnPageLoad(): void;
    protected OnDepoisLimpar(Entity: SiSMoura.Core.Entity.Modelo): void;
    protected OnDepoisGravar(): boolean;
    protected PreencherGrade(): void;
}
declare var c_Modelo: C_Modelo;
//# sourceMappingURL=C_Modelo.d.ts.map