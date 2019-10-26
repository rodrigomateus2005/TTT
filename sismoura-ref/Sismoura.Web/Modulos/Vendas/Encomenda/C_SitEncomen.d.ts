declare class C_SitEncomen extends MouraPageCadastroAngular<SiSMoura.Core.Entity.Situacao_Encomenda> {
    readonly Grid: MouraGridViewJS;
    protected Init(): void;
    protected OnGridSelecionouItem(s: any, e: MouraGridViewJSClickBotaoLinhaEventArgs): void;
    OnPageLoad(): void;
    protected OnDepoisLimpar(Entity: SiSMoura.Core.Entity.Situacao_Encomenda): void;
    protected OnDepoisGravar(): boolean;
    protected PreencherGrade(): void;
}
declare var c_SitEncomen: C_SitEncomen;
//# sourceMappingURL=C_SitEncomen.d.ts.map