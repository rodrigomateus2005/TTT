declare class C_CartaoF extends MouraPageCadastroAngular<SiSMoura.Core.Entity.Posto_Cartao> {
    readonly Grid: MouraGridViewJS;
    OnPageLoad(): void;
    protected Init(): void;
    protected OnGridSelecionouItem(s: any, e: MouraGridViewJSClickBotaoLinhaEventArgs): void;
    protected PreencherGrade(): void;
    protected OnDepoisGravar(): boolean;
    protected OnDepoisDeletar(): boolean;
    protected OnDepoisLimpar(Entity: SiSMoura.Core.Entity.Posto_Cartao): void;
}
declare const c_CartaoF: C_CartaoF;
//# sourceMappingURL=C_CartaoF.d.ts.map