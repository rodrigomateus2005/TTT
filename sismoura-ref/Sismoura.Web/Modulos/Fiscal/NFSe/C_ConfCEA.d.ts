declare class C_ConfCEA extends MouraPageCadastroAngular<SiSMoura.Core.Entity.Config_Cliente_Envio_Automatico> {
    readonly cboEmpresaEnvio: MouraComboBox;
    readonly txtContrato: MouraTextBoxProcura;
    readonly chkPrioritario: MouraCheckBox;
    readonly grid: MouraGridViewJS;
    protected Init(): void;
    OnSelecionouLinha(e: any, s: MouraGridViewJSClickBotaoLinhaEventArgs): void;
    OnPageLoad(): void;
    protected PreencherGrade(): void;
    protected VerificarConfigEnvioAutomatico(parametros: any): void;
    protected GetCadastrados(parametros: any): void;
    protected TratarErro(erro: JQueryXHR): void;
    protected OnAntesGravar(): boolean;
    protected OnExcluiuRegistroGrade(s: any, e: MouraGridViewJSItemEventArgs): void;
    protected OnDepoisDeletar(): boolean;
    protected OnDepoisGravar(): boolean;
    protected OnDepoisLimpar(): void;
    protected LimparCampos(): void;
}
declare const c_ConfCEA: C_ConfCEA;
//# sourceMappingURL=C_ConfCEA.d.ts.map