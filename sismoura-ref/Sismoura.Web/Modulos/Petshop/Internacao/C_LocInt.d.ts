declare class C_LocInt extends MouraPageCadastroAngular<SiSMoura.Core.Entity.Animais_Internacao_Local> {
    readonly Grid: MouraGridViewJS;
    protected Init(): void;
    protected OnGravouSucesso(s: any, e: MouraGravouSucessoEventArgs): void;
    protected OnExcluiuSucesso(s: any, e: any): void;
    protected OnAntesGravar(): boolean;
    protected OnDepoisGravar(): boolean;
    protected OnGridSelecionouItem(s: any, e: MouraGridViewJSClickBotaoLinhaEventArgs): void;
    protected OnDepoisLimpar(Entity: SiSMoura.Core.Entity.Animais_Internacao_Local): void;
    protected GetCadastrados(): void;
    OnPageLoad(): void;
}
declare const c_LocInt: C_LocInt;
//# sourceMappingURL=C_LocInt.d.ts.map