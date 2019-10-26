declare class C_ImpNFi extends MouraPageCadastroAngular<SiSMoura.Core.Entity.Impressora_Nao_Fiscal> {
    readonly cboAmbiente: MouraComboBox;
    readonly cboEmpresa: MouraComboBoxEmpresa;
    readonly txtDescricao: MouraTextBox;
    readonly txtCaminho: MouraTextBox;
    readonly txtSaltos: MouraTextBox;
    readonly grid: MouraGridViewJS;
    Entity: SiSMoura.Core.Entity.Impressora_Nao_Fiscal;
    protected Init(): void;
    OnPageLoad(): void;
    protected OnDepoisLimpar(Entity: SiSMoura.Core.Entity.Impressora_Nao_Fiscal): boolean;
    protected OnDepoisGravar(): boolean;
    protected OnGridSelecionouLinha(s: any, e: MouraGridViewJSClickBotaoLinhaEventArgs): void;
    protected PreencherGrade(): void;
    protected PreencherCaminho(): void;
}
declare const c_ImpNFi: C_ImpNFi;
//# sourceMappingURL=C_ImpNFi.d.ts.map