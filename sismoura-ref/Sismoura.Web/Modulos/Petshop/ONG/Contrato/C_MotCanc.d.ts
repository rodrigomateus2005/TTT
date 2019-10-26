declare class C_MotCanc extends MouraPageCadastroAngular<SiSMoura.Core.Entity.Animais_Adocao_Motivo_Cancelamento> {
    readonly Grid: MouraGridViewJS;
    readonly cboMotivoDevolucao: MouraComboBox;
    readonly chkDevolver: MouraCheckBox;
    protected Init(): void;
    OnChkDevolver_Changed(): void;
    OnPageLoad(): void;
    protected OnGravouSucesso(s: any, e: MouraGravouSucessoEventArgs): void;
    protected OnExcluiuSucesso(s: any, e: any): void;
    protected AtualizarGrid(): void;
    protected SelecionarRegistro(s: any, e: MouraGridViewJSClickBotaoLinhaEventArgs): void;
    protected OnDepoisLimpar(): void;
}
declare var c_MotCanc: C_MotCanc;
//# sourceMappingURL=C_MotCanc.d.ts.map