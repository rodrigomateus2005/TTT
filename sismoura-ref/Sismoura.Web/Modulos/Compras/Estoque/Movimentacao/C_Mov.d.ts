declare class C_Mov extends MouraPageCadastroAngular<SiSMoura.Core.Entity.Mov_Desc> {
    readonly Grid: MouraGridViewJS;
    protected Init(): void;
    protected OnGravouSucesso(s: any, e: MouraGravouSucessoEventArgs): void;
    protected OnExcluiuSucesso(s: any, e: any): void;
    protected OnAntesGravar(): boolean;
    protected OnDepoisGravar(): boolean;
    protected OnGridSelecionouItem(s: any, e: MouraGridViewJSClickBotaoLinhaEventArgs): void;
    protected OnDepoisLimpar(Entity: SiSMoura.Core.Entity.Mov_Desc): void;
    protected GetCadastrados(): void;
    OnPageLoad(): void;
}
declare const c_Mov: C_Mov;
//# sourceMappingURL=C_Mov.d.ts.map