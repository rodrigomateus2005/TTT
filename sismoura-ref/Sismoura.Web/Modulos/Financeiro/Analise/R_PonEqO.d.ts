declare class R_PonEqO extends MouraPage {
    readonly mdSimular: MouraModal;
    readonly txtCustoFixo: MouraTextBox;
    readonly txtLucroDesejado: MouraTextBox;
    readonly txtFaturamentoNec: MouraTextBox;
    readonly txtFaturamentoMes: MouraTextBox;
    readonly txtDiferenca: MouraTextBox;
    readonly lblTotalMC: MouraLabel;
    protected Init(): void;
    protected OnEndCallBackModalSimular(): void;
    protected OnTextBoxCustoFixoChange(): void;
    protected OnTextBoxLucroDesejadoChange(): void;
    protected CalcularSimulacao(): void;
}
declare var r_PonEqO: R_PonEqO;
//# sourceMappingURL=R_PonEqO.d.ts.map