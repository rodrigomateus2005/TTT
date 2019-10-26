declare class C_BonRes extends MouraPageCadastroAngular<SiSMoura.Core.Entity.Usuario_Bonificacao> {
    readonly Grid: MouraGridViewJS;
    readonly txtFuncionario: MouraTextBoxProcura;
    readonly txtCodigo: MouraTextBoxProcura;
    readonly txtBonificacao: MouraTextBox;
    readonly txtMetaMax: MouraTextBox;
    readonly txtMetaMin: MouraTextBox;
    readonly cboTipoBonificacao: MouraComboBox;
    protected Init(): void;
    protected OnGridSelecionouItem(s: any, e: MouraGridViewJSClickBotaoLinhaEventArgs): void;
    OnPageLoad(): void;
    protected OnProcurouFuncionario(s: MouraTextBoxProcura, e: MouraEventArgs): void;
    protected OnDepoisBuscarExistente(Entity: SiSMoura.Core.Entity.Usuario_Bonificacao): void;
    private auxFuncionarioDeletando;
    protected OnAntesDeletar(): boolean;
    protected OnDepoisLimpar(Entidade: SiSMoura.Core.Entity.Usuario_Bonificacao): void;
    protected OnAntesGravar(): boolean;
    protected OnDepoisGravar(): boolean;
    protected PreencherGrade(Entity: SiSMoura.Core.Entity.Usuario_Bonificacao): void;
}
declare var c_BonRes: C_BonRes;
//# sourceMappingURL=C_BonRes.d.ts.map