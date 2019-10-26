declare class R_AltPRej extends MouraPageAngular {
    readonly txtProprietario: MouraTextBoxProcura;
    readonly cboTipoNota: MouraComboBox;
    readonly txtPeriodo: MouraTextBoxPeriodo;
    readonly cboEmpresa: MouraComboBoxEmpresa;
    readonly grid: MouraGridViewJS;
    readonly txtNCM: MouraTextBox;
    readonly cboCFOP: MouraComboBox;
    readonly cboSituacao: MouraComboBox;
    readonly cboST_PIS: MouraComboBox;
    readonly cboST_COFINS: MouraComboBox;
    readonly txtAliq_PIS: MouraTextBox;
    readonly cboSt_IPI_Saida: MouraComboBox;
    readonly txtAliq_COFINS: MouraTextBox;
    readonly txtAliq_IPI: MouraTextBox;
    Produtos: SiSMoura.Core.Entity.ProdutoRejeitadoRetorno[];
    readonly btnGerar: MouraButton;
    readonly btnCorrigir: MouraButton;
    readonly btnLimpar: MouraButton;
    protected Init(): void;
    private ValidarFiltros;
    private onBtnGerarClick;
    protected OnGerouGrade(d: any): void;
    private ValidarCampos;
    private onBtnCorrigirClick;
    private onBtnLimparClick;
    private LimparCampos;
    OnCboTipoNotaChanged(s: any, e: any): void;
}
declare var r_AltPRej: R_AltPRej;
//# sourceMappingURL=R_AltPRej.d.ts.map