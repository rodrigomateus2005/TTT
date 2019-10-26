declare class C_Cor extends MouraPageCadastroAngular<SiSMoura.Core.Entity.Cores> {
    readonly Grid: MouraGridViewJS;
    protected Init(): void;
    protected OnGridSelecionouItem(s: any, e: MouraGridViewJSClickBotaoLinhaEventArgs): void;
    OnPageLoad(): void;
    protected OnDepoisLimpar(Entity: SiSMoura.Core.Entity.Cores): void;
    protected OnDepoisGravar(): boolean;
    protected PreencherGrade(): void;
}
declare var c_Cor: C_Cor;
//# sourceMappingURL=C_Cor.d.ts.map