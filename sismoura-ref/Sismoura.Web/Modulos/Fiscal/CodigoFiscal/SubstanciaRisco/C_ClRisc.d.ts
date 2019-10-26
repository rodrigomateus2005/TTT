declare class C_ClRisc extends MouraPageCadastroAngular<SiSMoura.Core.Entity.Produto_Classe_Risco> {
    readonly GridClasseRisco: MouraGridViewJS;
    protected Init(): void;
    OnSelecionouLinha(e: any, s: MouraGridViewJSClickBotaoLinhaEventArgs): void;
    protected OnDepoisGravar(): boolean;
    protected OnDepoisLimpar(entity: SiSMoura.Core.Entity.Produto_Classe_Risco): void;
    protected PreencherGrade(): void;
}
declare var c_ClRisc: C_ClRisc;
//# sourceMappingURL=C_ClRisc.d.ts.map