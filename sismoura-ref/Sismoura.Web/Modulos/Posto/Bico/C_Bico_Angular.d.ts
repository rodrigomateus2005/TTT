declare class C_Bico_Angular extends MouraPageCadastroAngular<SiSMoura.Core.Entity.Posto_Bico> {
    readonly Grid: MouraGridViewJS;
    readonly cboEmpresa: MouraComboBoxEmpresa;
    readonly txtBico: MouraTextBox;
    readonly btnLimpar: MouraButton;
    OnPageLoad(): void;
    protected Init(): void;
    protected OnGridSelecionouItem(s: any, e: MouraGridViewJSClickBotaoLinhaEventArgs): void;
    protected PreencherGrade(): void;
    protected OnDepoisGravar(): boolean;
    protected OnDepoisDeletar(): boolean;
    protected OnDepoisBuscarExistente(Entity: SiSMoura.Core.Entity.Posto_Bico): boolean;
    protected OnDepoisLimpar(Entity: SiSMoura.Core.Entity.Posto_Bico): void;
    protected OnClickBtnLimpar(): void;
    protected BicoPerdeuFoco(): void;
}
declare const c_Bico_Angular: C_Bico_Angular;
//# sourceMappingURL=C_Bico_Angular.d.ts.map