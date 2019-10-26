declare class C_Onu extends MouraPageCadastroAngular<SiSMoura.Core.Entity.Produto_Onu> {
    readonly GridCadastroOnu: MouraGridViewJS;
    protected Init(): void;
    OnSelecionouLinha(e: any, s: MouraGridViewJSClickBotaoLinhaEventArgs): void;
    protected OnDepoisGravar(): boolean;
    protected OnDepoisLimpar(entity: SiSMoura.Core.Entity.Produto_Onu): void;
    protected PreencherGrade(): void;
}
declare var c_Onu: C_Onu;
//# sourceMappingURL=C_Onu.d.ts.map