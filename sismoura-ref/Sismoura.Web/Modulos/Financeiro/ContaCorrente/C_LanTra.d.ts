declare class C_LanTra extends MouraPage {
    readonly txtTipoLancamentoContabilOrigem: MouraTextBoxProcura;
    readonly txtTipoLancamentoContabilOrigem_hdnEmpresaContabil: HTMLInputElement;
    readonly txtTipoLancamentoContabilDestino: MouraTextBoxProcura;
    readonly txtTipoLancamentoContabilDestino_hdnEmpresaContabil: HTMLInputElement;
    readonly cboContaCorrenteOrigem: MouraContaCorrenteCombo;
    readonly cboContaCorrenteDestino: MouraContaCorrenteCombo;
    protected Init(): void;
    protected MudouEmpresaOrigem(): void;
    protected MudouEmpresaDestino(): void;
    OnPageLoad(): void;
    PreencherEmpresaContabil(codEmpresa: any): void;
    protected OntxtTipoLancamentoContabilOrigemPesquisou(): void;
    protected txtTipoLancamentoContabilDestinoPesquisou(): void;
}
declare const c_LanTra: C_LanTra;
//# sourceMappingURL=C_LanTra.d.ts.map