declare class C_Adicional_Angular extends MouraPageCadastroAngular<SiSMoura.Core.Entity.Ybg_Adicionais> {
    readonly Grid: MouraGridViewJS;
    readonly hndCodigo: HTMLInputElement;
    protected Init(): void;
    OnSelecionouLinha(e: any, s: MouraGridViewJSClickBotaoLinhaEventArgs): void;
    OnPageLoad(): void;
    protected MudouProduto(): void;
    protected OnDepoisGravar(): boolean;
    protected OnDepoisLimpar(Entity: SiSMoura.Core.Entity.Ybg_Adicionais): void;
    protected PreencherGrade(): void;
}
declare var c_Adicional_Angular: C_Adicional_Angular;
//# sourceMappingURL=C_Adicional_Angular.d.ts.map