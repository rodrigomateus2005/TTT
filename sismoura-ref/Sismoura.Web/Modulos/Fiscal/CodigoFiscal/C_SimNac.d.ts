declare class C_SimNac extends MouraPageCadastroAngular<SiSMoura.Core.Entity.Fiscal_Simples_Nacional> {
    readonly txtCodigo: MouraTextBoxProcura;
    readonly cboEmpresa: MouraComboBoxEmpresa;
    readonly txtData: MouraTextBoxData;
    readonly txtICMS: MouraTextBox;
    readonly Grid: MouraGridViewJS;
    readonly accGrid: MouraAccordion;
    OnPageLoad(): void;
    protected Init(): void;
    protected OnGridSelecionouItem(s: any, e: MouraGridViewJSClickBotaoLinhaEventArgs): void;
    protected PreencherGradeRegistrosCadastrados(): void;
    protected MensagemUsuarioLogado(): string;
    protected OnDepoisGravar(): boolean;
    protected OnDepoisLimpar(Entity: SiSMoura.Core.Entity.Fiscal_Simples_Nacional): void;
    protected OnDepoisBuscarExistente(Entity: SiSMoura.Core.Entity.Fiscal_Simples_Nacional): void;
    protected LimparCampos(): void;
}
declare const c_SimNac: C_SimNac;
//# sourceMappingURL=C_SimNac.d.ts.map