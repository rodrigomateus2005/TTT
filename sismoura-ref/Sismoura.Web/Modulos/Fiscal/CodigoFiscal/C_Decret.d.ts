declare class C_Decret extends MouraPageCadastroAngular<SiSMoura.Core.Entity.Fiscal_Decreto> {
    readonly Grid: MouraGridViewJS;
    protected Init(): void;
    protected OnGridSelecionouItem(s: any, e: MouraGridViewJSClickBotaoLinhaEventArgs): void;
    OnPageLoad(): void;
    protected OnDepoisLimpar(Entity: SiSMoura.Core.Entity.Fiscal_Decreto): void;
    protected OnDepoisGravar(): boolean;
    protected PreencherGrade(): void;
}
declare var c_Decret: C_Decret;
//# sourceMappingURL=C_Decret.d.ts.map