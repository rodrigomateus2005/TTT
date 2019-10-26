declare class R_SolBkp extends MouraPageAngular {
    protected readonly txtBancoCliente: MouraTextBoxProcura;
    protected readonly lblBackup: MouraLabel;
    protected idInterval: number;
    protected Init(): void;
    OnPageLoad(): void;
    protected OnClickBackup(): void;
    protected executandoBackup: boolean;
    protected BackupBanco(): void;
    protected AtualizarStatus(): void;
    protected DownloadArquivo(): void;
}
declare const r_SolBkp: R_SolBkp;
//# sourceMappingURL=R_SolBkp.d.ts.map