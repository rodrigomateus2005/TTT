declare class CalEst extends MouraPageRelacaoAngular {
    readonly AccordionFiltros: MouraAccordion;
    private isLoad;
    readonly txtPeriodo: MouraTextBoxPeriodo;
    readonly cboEmpresa: MouraComboBoxEmpresa;
    readonly cboDeposito: MouraComboBox;
    readonly cboParametro: MouraComboBox;
    readonly chkConsiderarSaidas: MouraCheckBox;
    readonly chkConsiderarDevolucoes: MouraCheckBox;
    readonly chkUtilizarMediaCalculo: MouraCheckBox;
    readonly txtPercentualSeguranca: MouraTextBox;
    readonly grid: MouraGridViewJS;
    readonly txtMarca: MouraTextBoxProcura;
    readonly txtSubgrupo: MouraTextBoxProcura;
    readonly txtGrupo: MouraTextBoxProcura;
    readonly txtPeriodoMes: MouraTextBoxMesAno;
    readonly txtNomeProduto: MouraTextBox;
    readonly btnAtualizar: MouraButton;
    readonly accFiltro: MouraAccordion;
    readonly accCadastro: MouraAccordion;
    protected Init(): void;
    OnPageLoad(): void;
    protected OnComboBoxEmpresaChange(): void;
    protected AlteraDeposito(): void;
    protected OnComboBoxParametroChange(): void;
    protected AlterarColunasGrade(): void;
    protected LimparCampos(): void;
    protected PreencherGrade(): void;
    protected AtualizarProdutos(s: any, e: DevExpress.Web.Scripts.ASPxClientButtonClickEventArgs): void;
}
declare var calEst: CalEst;
//# sourceMappingURL=CalEst.d.ts.map