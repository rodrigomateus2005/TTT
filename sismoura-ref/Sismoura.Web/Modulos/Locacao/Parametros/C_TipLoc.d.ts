declare class C_TipLoc extends MouraPageCadastroAngular<SiSMoura.Core.Entity.Locacao_Equipamento_Tipo> {
    readonly Grid: MouraGridViewJS;
    protected Init(): void;
    protected OnDepoisLimpar(Entity: SiSMoura.Core.Entity.Locacao_Equipamento_Tipo): void;
    protected OnGravouSucesso(s: any, e: MouraGravouSucessoEventArgs): void;
    protected OnExcluiuSucesso(s: any, e: any): void;
    protected OnGridSelecionouItem(s: any, e: MouraGridViewJSClickBotaoLinhaEventArgs): void;
    protected GetCadastrados(): void;
}
declare var c_TipLoc: C_TipLoc;
//# sourceMappingURL=C_TipLoc.d.ts.map