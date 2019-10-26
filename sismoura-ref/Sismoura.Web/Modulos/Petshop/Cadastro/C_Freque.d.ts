declare class C_Freque extends MouraPageCadastroAngular<SiSMoura.Core.Entity.Frequencia> {
    readonly GridFreque: MouraGridViewJS;
    protected Init(): void;
    protected OnGridSelecionouItem(s: any, e: MouraGridViewJSClickBotaoLinhaEventArgs): void;
    OnPageLoad(): void;
    protected OnDepoisLimpar(Entity: SiSMoura.Core.Entity.Frequencia): void;
    protected OnDepoisGravar(): boolean;
    protected PreencherGrade(): void;
}
declare const c_Freque: C_Freque;
//# sourceMappingURL=C_Freque.d.ts.map