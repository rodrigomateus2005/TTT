declare class C_ImpVen extends MouraPageCadastroAngular<SiSMoura.Core.Entity.Contabil_Configuracao_Imposto_Venda> {
    readonly txtCodigo: MouraTextBoxProcura;
    readonly txtContaCredito: MouraTextBoxProcuraContabil;
    readonly txtContaDebito: MouraTextBoxProcuraContabil;
    readonly cboEmpresa: MouraComboBoxEmpresa;
    readonly rdnForma: MouraRadioButtonList;
    readonly cboImposto: MouraComboBox;
    readonly Grid: MouraGridViewJS;
    protected Init(): void;
    OnPageLoad(): void;
    protected OnClickBotaoLinha(s: any, e: MouraGridViewJSClickBotaoLinhaEventArgs): void;
    protected OnDepoisGravar(): boolean;
    protected OnDepoisLimpar(Entity: SiSMoura.Core.Entity.Contabil_Configuracao_Imposto_Venda): boolean;
    protected OnDepoisBuscarExistente(Entity: SiSMoura.Core.Entity.Contabil_Configuracao_Imposto_Venda): void;
    protected OnDepoisDeletar(): boolean;
    protected GetCadastrados(): void;
    cboImpostoSelectedItemChanged(): void;
    protected OntxtContaDebitoAntesAbrirProcura(s: MouraTextBoxProcura, ev: MouraTextBoxProcuraAntesAbrirProcuraEventArgs): void;
    protected OntxtContaCreditoAntesAbrirProcura(s: MouraTextBoxProcura, ev: MouraTextBoxProcuraAntesAbrirProcuraEventArgs): void;
    protected OntxtCodigoAntesAbrirProcura(s: MouraTextBoxProcura, ev: MouraTextBoxProcuraAntesAbrirProcuraEventArgs): void;
}
declare var c_ImpVen: C_ImpVen;
//# sourceMappingURL=C_ImpVen.d.ts.map