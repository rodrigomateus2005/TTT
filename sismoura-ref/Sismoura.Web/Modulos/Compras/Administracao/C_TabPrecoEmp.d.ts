declare class C_TabPrecoEmp extends MouraPageAngular {
    readonly txtTabPreco: MouraTextBoxProcura;
    readonly txtPreco: MouraTextBox;
    readonly txtDesconto: MouraTextBox;
    readonly chkListaPadrao: MouraCheckBox;
    readonly lblTooltip: MouraLabel;
    readonly lstEmpresa: MouraListBoxEmpresa;
    readonly gridTabPreco: MouraGridViewJS;
    readonly agpBotoes: MouraAgrupamento;
    readonly btnGravar: MouraButton;
    readonly btnLimpar: MouraButton;
    protected Init(): void;
    private MostrarListaPadrao;
    private onClickButtonGravar;
    private onClickButtonAdicionar;
    private ValidaCampos;
    private LimpaCampos;
}
declare var c_TabPrecoEmp: C_TabPrecoEmp;
//# sourceMappingURL=C_TabPrecoEmp.d.ts.map