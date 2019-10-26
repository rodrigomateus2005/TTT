declare class C_CDAdPr extends MouraPageCadastroAngular<SiSMoura.Core.Entity.Cardapio_Adicional> {
    readonly Grid: MouraGridViewJS;
    protected Init(): void;
    protected OnGridSelecionouItem(s: any, e: MouraGridViewJSClickBotaoLinhaEventArgs): void;
    OnPageLoad(): void;
    protected OnDepoisLimpar(Entity: SiSMoura.Core.Entity.Cardapio_Adicional): void;
    protected OnDepoisGravar(): boolean;
    protected PreencherGrade(): void;
}
declare var c_CDAdPr: C_CDAdPr;
//# sourceMappingURL=C_CDAdPr.d.ts.map