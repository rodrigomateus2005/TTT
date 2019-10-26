declare class C_Tanque extends MouraPageCadastroAngular<SiSMoura.Core.Entity.Posto_Tanque> {
    readonly Grid: MouraGridViewJS;
    readonly txtCodigo: MouraTextBoxProcura;
    readonly txtDescricao: MouraTextBox;
    readonly txtCapacidade: MouraTextBox;
    readonly cboCombustivel: MouraComboBox;
    readonly cboEmpresa: MouraComboBoxEmpresa;
    OnPageLoad(): void;
    protected Init(): void;
    protected OnGridSelecionouItem(s: any, e: MouraGridViewJSClickBotaoLinhaEventArgs): void;
    protected PreencherGrade(): void;
    protected OnDepoisGravar(): boolean;
    protected OnDepoisDeletar(): boolean;
    protected OnDepoisLimpar(Entity: SiSMoura.Core.Entity.Posto_Tanque): void;
    protected AlterouCombustivel(): void;
}
declare const c_Tanque: C_Tanque;
//# sourceMappingURL=C_Tanque.d.ts.map