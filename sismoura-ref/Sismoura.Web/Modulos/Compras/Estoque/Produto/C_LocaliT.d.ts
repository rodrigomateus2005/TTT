declare class C_LocaliT extends MouraPageCadastroAngular<SiSMoura.Core.Entity.Produto_Localizacao_Tipo> {
    readonly Grid: MouraGridViewJS;
    protected Init(): void;
    protected OnGridSelecionouItem(s: any, e: MouraGridViewJSClickBotaoLinhaEventArgs): void;
    OnPageLoad(): void;
    protected OnDepoisLimpar(Entity: SiSMoura.Core.Entity.Produto_Localizacao_Tipo): void;
    protected OnDepoisGravar(): boolean;
    protected PreencherGrade(): void;
}
declare var c_LocaliT: C_LocaliT;
//# sourceMappingURL=C_LocaliT.d.ts.map