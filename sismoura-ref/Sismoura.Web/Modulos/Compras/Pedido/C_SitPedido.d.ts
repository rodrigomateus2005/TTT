declare class C_SitPedido extends MouraPageCadastroAngular<SiSMoura.Core.Entity.Situacao_Pedido> {
    readonly gridJS: MouraGridViewJS;
    protected Init(): void;
    OnPageLoad(): void;
    protected OnGridSelecionouItem(s: any, e: MouraGridViewJSClickBotaoLinhaEventArgs): void;
    protected OnDepoisLimpar(Entity: SiSMoura.Core.Entity.Situacao_Pedido): void;
    protected OnDepoisGravar(): boolean;
    protected PreencherGrade(): void;
}
declare const c_SitPedido: C_SitPedido;
//# sourceMappingURL=C_SitPedido.d.ts.map