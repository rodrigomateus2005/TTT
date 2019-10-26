declare class C_SitOS extends MouraPageCadastroAngular<SiSMoura.Core.Entity.Os_Situacao> {
    readonly Grid: MouraGridViewJS;
    readonly chkBaixarEstoque: MouraCheckBox;
    readonly cboDepositoOrigem: MouraComboBox;
    readonly cboDepositoDestino: MouraComboBox;
    protected Init(): void;
    protected OnGridSelecionouItem(s: any, e: MouraGridViewJSClickBotaoLinhaEventArgs): void;
    OnPageLoad(): void;
    protected MudouGerarVenda(): void;
    protected MudouTransferenciaEstoque(): void;
    protected OnDepoisLimpar(Entity: SiSMoura.Core.Entity.Os_Situacao): void;
    protected OnDepoisGravar(): boolean;
    protected PreencherGrade(): void;
}
declare var c_SitOS: C_SitOS;
//# sourceMappingURL=C_SitOS.d.ts.map