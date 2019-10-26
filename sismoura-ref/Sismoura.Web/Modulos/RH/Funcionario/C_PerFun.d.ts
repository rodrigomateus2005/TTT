declare class C_PerFun extends MouraPageCadastroAngular<SiSMoura.Core.Entity.Rh_Perfil> {
    readonly Grid: MouraGridViewJS;
    protected Init(): void;
    OnPageLoad(): void;
    protected OnDepoisLimpar(Entity: SiSMoura.Core.Entity.Rh_Perfil): void;
    protected OnDepoisGravar(): boolean;
    protected OnGridSelecionouItem(s: any, e: MouraGridViewJSClickBotaoLinhaEventArgs): void;
    protected PreencherGrade(): void;
}
declare const c_PerFun: C_PerFun;
//# sourceMappingURL=C_PerFun.d.ts.map