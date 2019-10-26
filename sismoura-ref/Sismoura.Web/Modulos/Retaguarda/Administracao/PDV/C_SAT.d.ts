declare class C_SAT extends MouraPageCadastroAngular<SiSMoura.Core.Entity.Sat_Cadastro> {
    readonly Grid: MouraGridViewJS;
    readonly txtNumero_Serie: MouraTextBox;
    readonly txtCodigo: MouraTextBoxProcura;
    readonly txtDescricao: MouraTextBox;
    readonly cboPDV: MouraComboBox;
    readonly chkInativo: MouraCheckBox;
    protected Init(): void;
    protected OnGridSelecionouItem(s: any, e: MouraGridViewJSClickBotaoLinhaEventArgs): void;
    protected OnDepoisBuscarExistente(Entidade: SiSMoura.Core.Entity.Sat_Cadastro): void;
    OnPageLoad(): void;
    protected OnDepoisLimpar(Entity: SiSMoura.Core.Entity.Sat_Cadastro): void;
    protected OnDepoisGravar(): boolean;
    protected PreencherGrade(): void;
    protected OnAntesGravar(): boolean;
}
declare const c_SAT: C_SAT;
//# sourceMappingURL=C_SAT.d.ts.map