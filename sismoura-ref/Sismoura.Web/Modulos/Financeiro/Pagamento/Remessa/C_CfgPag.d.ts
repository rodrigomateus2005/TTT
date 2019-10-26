declare class C_CfgPag extends MouraPageCadastroAngular<SiSMoura.Core.Entity.Configuracao_Remessa_Pagamento> {
    readonly Grid: MouraGridViewJS;
    readonly cboConta: MouraContaCorrenteCombo;
    protected Init(): void;
    protected OnComboSelectedIndexChanged(): void;
    protected OnGridSelecionouItem(s: any, e: MouraGridViewJSClickBotaoLinhaEventArgs): void;
    OnPageLoad(): void;
    protected OnDepoisLimpar(Entity: SiSMoura.Core.Entity.Configuracao_Remessa_Pagamento): void;
    protected OnDepoisGravar(): boolean;
    protected OnDepoisBuscarExistente(Entity: SiSMoura.Core.Entity.Configuracao_Remessa_Pagamento): void;
    protected PreencherGrade(): void;
}
declare var c_CfgPag: C_CfgPag;
//# sourceMappingURL=C_CfgPag.d.ts.map