declare class R_CFOPEn extends MouraPageCadastroAngular<SiSMoura.Core.Entity.Cfop_Entrada_Produto> {
    readonly Grid: MouraGridViewJS;
    protected Init(): void;
    protected OnDepoisGravar(): boolean;
    protected OnGridSelecionouItem(s: any, e: MouraGridViewJSClickBotaoLinhaEventArgs): void;
    protected GetCadastrados(): void;
    protected OnDepoisLimpar(Entity: SiSMoura.Core.Entity.Cfop_Entrada_Produto): void;
    OnPageLoad(): void;
}
declare const r_CFOPEn: R_CFOPEn;
//# sourceMappingURL=R_CFOPEn.d.ts.map