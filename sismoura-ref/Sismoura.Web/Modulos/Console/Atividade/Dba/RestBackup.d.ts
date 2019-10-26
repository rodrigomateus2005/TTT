declare class RestBackup extends MouraPageAngular {
    readonly cboServidor: MouraComboBox;
    readonly txtCliente: MouraTextBoxProcura;
    readonly txtNomeBanco: MouraTextBox;
    readonly txtNomeUsuario: MouraTextBox;
    readonly fpPath: MouraFileUploadJS;
    readonly cboTipoBanco: MouraComboBox;
    readonly IsDba: boolean;
    protected idInterval: number;
    protected fileUploaded: File;
    protected Init(): void;
    private HabilitaCampos;
    OnPageLoad(): void;
    protected GetDadosMigracao(codMigracao: number): void;
    protected OnClickBotaoIniciar(): void;
    protected IncluirBancoBackup(codBanco: number): void;
    protected OnFileUploaded(s: any, e: any): void;
    protected executandoBackup: boolean;
    protected AtualizarStatus(): void;
}
declare const restBackup: RestBackup;
//# sourceMappingURL=RestBackup.d.ts.map