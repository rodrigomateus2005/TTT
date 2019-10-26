declare class C_DevAnimAdoc extends MouraPageCadastroAngular<SiSMoura.Core.Entity.Animais_Adocao_Devolucao> {
    private validouDataDevolucao;
    private enviarEmailDevolucao;
    readonly txtPet: MouraTextBoxProcuraProprietarioAnimal;
    readonly cboEmpresa: MouraComboBoxEmpresa;
    readonly txtDataDevolucao: MouraTextBoxData;
    readonly cboMotivoDevolucao: MouraComboBox;
    readonly btnEnviarEmailDevolucao: MouraButton;
    OnPageLoad(): void;
    Init(): void;
    protected OnGravouSucesso(): void;
    protected OnDepoisGravar(): boolean;
    OnAntesGravar(): boolean;
    OnDepoisLimpar(entidade: SiSMoura.Core.Entity.Animais_Adocao_Devolucao): void;
    OnAntesDeletar(): boolean;
    protected OnTxtProprietarioOngProcurou(s: MouraTextBoxProcuraRetornoProcura, e: MouraEventArgs): void;
    protected OnClickBotaonEnviarEmailDevolucao(s: any, e: MouraClickEventArgs): void;
    private EnviarEmailDevolucao;
}
declare var c_DevAnimAdoc: C_DevAnimAdoc;
//# sourceMappingURL=C_DevAnimAdoc.d.ts.map