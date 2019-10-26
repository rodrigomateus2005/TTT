declare class C_StatEs extends MouraPageCadastroAngular<SiSMoura.Core.Entity.Produto_Status> {
    readonly Grid: MouraGridViewJS;
    protected Init(): void;
    protected OnGravouSucesso(s: any, e: MouraGravouSucessoEventArgs): void;
    protected OnExcluiuSucesso(s: any, e: any): void;
    protected OnAntesGravar(): boolean;
    protected OnDepoisGravar(): boolean;
    protected OnGridSelecionouItem(s: any, e: MouraGridViewJSClickBotaoLinhaEventArgs): void;
    protected OnDepoisLimpar(Entity: SiSMoura.Core.Entity.Produto_Status): void;
    protected GetCadastrados(): void;
    OnPageLoad(): void;
}
declare const c_StatEs: C_StatEs;
//# sourceMappingURL=C_StatEs.d.ts.map