declare class C_FazCli extends MouraPageCadastroAngular<SiSMoura.Core.Entity.Agromoura_Fazenda_Cliente> {
    readonly txtCodigo: MouraTextBox;
    readonly txtNome: MouraTextBox;
    readonly txtTalhoes: MouraTextBox;
    readonly txtArea: MouraTextBox;
    readonly txtProprietario: MouraTextBoxProcura;
    readonly txtCep: MouraTextBoxCep;
    readonly txtEndereco: MouraTextBox;
    readonly txtTelefone: MouraTextBoxProcura;
    readonly txtEmail: MouraTextBoxProcura;
    readonly txtCPF: MouraTextBoxCPF;
    readonly txtGerente: MouraTextBoxProcura;
    readonly txtEndereco_cobranca: MouraTextBox;
    protected Init(): void;
    protected OnConsultarCEP(s: any, e: MouraTextBoxCepPesquisouEventArgs): void;
    protected consultarCPF(): void;
    protected OnClicouOpcaoMsgBoxCPF(resultado: MsgBoxResultEventArgs): void;
    protected OnClicouOKMsgBoxCPFInvalido(resultado: MsgBoxResultEventArgs): void;
    protected MudouTipo(newValue: any, oldValue: any): void;
    protected OnDepoisSetEntidade(Entidade: SiSMoura.Core.Entity.Agromoura_Fazenda_Cliente): void;
    protected OnDepoisLimpar(Entity: SiSMoura.Core.Entity.Agromoura_Fazenda_Cliente): void;
}
declare var c_FazCli: C_FazCli;
//# sourceMappingURL=C_FazCli.d.ts.map