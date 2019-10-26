declare class C_Clinic extends MouraPageCadastroAngular<SiSMoura.Core.Entity.Animais_Clinica_Indicacao> {
    readonly Grid: MouraGridViewJS;
    readonly txtCep: MouraTextBoxCep;
    protected Init(): void;
    OnSelecionouLinha(e: any, s: MouraGridViewJSClickBotaoLinhaEventArgs): void;
    protected OnConsultarCEP(entity: SiSMoura.Core.Entity.Animais_Clinica_Indicacao, e: MouraTextBoxCepPesquisouEventArgs): void;
    protected OnDepoisGravar(): boolean;
    protected OnDepoisLimpar(Entity: SiSMoura.Core.Entity.Animais_Clinica_Indicacao): void;
    protected PreencherGrade(): void;
}
declare var c_Clinic: C_Clinic;
//# sourceMappingURL=C_Clinic.d.ts.map