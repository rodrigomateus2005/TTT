declare class C_MarPro extends MouraPageCadastroAngular<SiSMoura.Core.Entity.Produto_Margem> {
    readonly Grid: MouraGridViewJS;
    protected Init(): void;
    protected OnGravouSucesso(s: any, e: MouraGravouSucessoEventArgs): void;
    protected OnExcluiuSucesso(s: any, e: any): void;
    protected OnAntesGravar(): boolean;
    protected OnDepoisGravar(): boolean;
    protected OnGridSelecionouItem(s: any, e: MouraGridViewJSClickBotaoLinhaEventArgs): void;
    protected OnDepoisLimpar(Entity: SiSMoura.Core.Entity.Produto_Margem): void;
    protected GetCadastrados(): void;
    OnPageLoad(): void;
}
declare const c_MarPro: C_MarPro;
//# sourceMappingURL=C_MarPro.d.ts.map