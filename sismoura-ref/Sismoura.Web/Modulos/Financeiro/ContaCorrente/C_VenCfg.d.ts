declare class C_VenCfg extends MouraPageCadastroAngular<SiSMoura.Core.Entity.Configuracao_Contabil_Venda_Pagamento> {
    Grupo: any;
    Grupos: any[];
    readonly Grid: MouraGridViewJSEditavel;
    readonly gridCadastrados: MouraGridViewJS;
    readonly txtCodigo: MouraTextBoxProcura;
    readonly lstGrupos: MouraCheckBoxList;
    readonly txtCentroCusto: MouraTextBoxProcura;
    readonly txtContaContabil: MouraTextBoxProcura;
    readonly cboPagamento: MouraComboBox;
    readonly cboEmpresa: MouraComboBoxEmpresa;
    readonly chkContabilizacaoBandeira: MouraCheckBox;
    protected Init(): void;
    protected OnSelecionouItem(s: any, e: MouraGridViewJSEditavelItemCancelavelEventArgs): void;
    protected OnSelecionouLinha(s: any, e: MouraGridViewJSClickBotaoLinhaEventArgs): void;
    OnPageLoad(): void;
    protected OnDepoisLimpar(Entity: SiSMoura.Core.Entity.Configuracao_Contabil_Venda_Pagamento): void;
    protected OnAntesGravar(): boolean;
    protected OnDepoisBuscarCodigo(): void;
    protected PreencherGrupos(Codigo: number): void;
    protected OnDepoisBuscarCentroCusto(): void;
    protected OnDepoisBuscarConta(): void;
    protected buscarExistente(): void;
    protected OnComboBoxContaChange(): void;
    protected OnDepoisBuscarExistente(Entity: SiSMoura.Core.Entity.Configuracao_Contabil_Venda_Pagamento): void;
    protected GetCadastrados(): void;
    protected OnDepoisGravar(): boolean;
    protected OnComboBoxPagamentoChange(): void;
    protected OnchkContabilizacaoBandeiraChanged(s: any, e: MouraEventArgs): void;
    protected OnValidando(s: any, e: MouraGridViewJSEditavelItemCancelavelEventArgs): void;
}
declare var c_VenCfg: C_VenCfg;
//# sourceMappingURL=C_VenCfg.d.ts.map