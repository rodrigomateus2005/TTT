declare class C_SerieNFSe extends MouraPageCadastroAngular<SiSMoura.Core.Entity.Serienfse> {
    readonly Grid: MouraGridViewJS;
    protected Init(): void;
    OnPageLoad(): void;
    protected OnGridSelecionouItem(s: any, e: MouraGridViewJSClickBotaoLinhaEventArgs): void;
    protected OnDepoisLimpar(Entity: SiSMoura.Core.Entity.Fiscal_Serie_Nf): void;
    protected OnDepoisGravar(): boolean;
    protected PreencherGrade(): void;
}
declare var c_SerieNFSe: C_SerieNFSe;
//# sourceMappingURL=C_SerieNFSe.d.ts.map