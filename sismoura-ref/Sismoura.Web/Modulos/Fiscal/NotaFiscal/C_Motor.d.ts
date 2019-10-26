declare class C_Motor extends MouraPageCadastroAngular<SiSMoura.Core.Entity.Motorista> {
    readonly Grid: MouraGridViewJS;
    readonly txtCep: MouraTextBoxCep;
    protected Init(): void;
    protected OnGridSelecionouItem(s: any, e: MouraGridViewJSClickBotaoLinhaEventArgs): void;
    OnPageLoad(): void;
    protected OnDepoisLimpar(Entity: SiSMoura.Core.Entity.Motorista): void;
    protected OnDepoisGravar(): boolean;
    protected PreencherGrade(): void;
    protected OnConsultarCEP(s: any, e: MouraTextBoxCepPesquisouEventArgs): void;
}
declare var c_Motor: C_Motor;
//# sourceMappingURL=C_Motor.d.ts.map