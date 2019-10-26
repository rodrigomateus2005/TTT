declare class C_ConfMA extends MouraPageCadastroAngular<SiSMoura.Core.Entity.Animais_Empresa_Agendamento> {
    readonly txtCodigo: MouraTextBoxProcura;
    readonly lstTipoProfissional: MouraCheckBoxList;
    readonly txtEmpresa: MouraTextBoxProcura;
    protected Init(): void;
    protected VerificarExistencia(empresa: number): void;
    protected OnMudouEmpresa(): void;
    protected OnDepoisLimpar(Entity: SiSMoura.Core.Entity.Animais_Empresa_Agendamento): void;
    protected OnDepoisBuscarExistente(Entity: SiSMoura.Core.Entity.Animais_Empresa_Agendamento): void;
    protected OnAntesGravar(): boolean;
    protected PreencherTipos(): void;
}
declare const c_ConfMA: C_ConfMA;
//# sourceMappingURL=C_ConfMA.d.ts.map