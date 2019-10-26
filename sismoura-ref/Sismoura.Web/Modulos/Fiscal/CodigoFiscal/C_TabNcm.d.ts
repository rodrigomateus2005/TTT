declare class C_TabNcm extends MouraPageCadastroAngular<SiSMoura.Core.Entity.Fiscal_Ncm_Unidade_Tributavel> {
    readonly txtCodigo: MouraTextBoxProcura;
    readonly txtNCM: MouraTextBox;
    readonly txtUnTrib: MouraTextBox;
    readonly txtDescricao: MouraTextBox;
    readonly txtDtVigIni: MouraTextBoxData;
    readonly txtDtVigFim: MouraTextBoxData;
    readonly txtDtVigAlt: MouraTextBoxData;
    readonly Grid: MouraGridViewJS;
    protected Init(): void;
    OnPageLoad(): void;
    OnSelecionouLinha(s: any, e: MouraGridViewJSClickBotaoLinhaEventArgs): void;
    protected OnAntesGravar(): boolean;
    protected OnDepoisGravar(): boolean;
    protected OnDepoisDeletar(): boolean;
    protected LimparCampos(): void;
    protected PreencherGrade(): void;
}
declare const c_TabNcm: C_TabNcm;
//# sourceMappingURL=C_TabNcm.d.ts.map