declare class C_ListVe extends MouraPageCadastroAngular<SiSMoura.Core.Entity.Franquia_Listavez> {
    readonly Grid: MouraGridViewJS;
    protected Init(): void;
    protected GetCadastrados(): void;
    OnPageLoad(): void;
    protected OnDepoisLimpar(Entity: SiSMoura.Core.Entity.Franquia_Listavez): void;
    protected OnAntesGravar(): boolean;
    protected OnDepoisGravar(): boolean;
    protected OnGridSelecionouItem(s: any, e: MouraGridViewJSClickBotaoLinhaEventArgs): void;
    protected OnGravouSucesso(s: any, e: MouraGravouSucessoEventArgs): void;
    protected OnExcluiuSucesso(s: any, e: any): void;
}
declare const c_ListVe: C_ListVe;
//# sourceMappingURL=C_ListVe.d.ts.map