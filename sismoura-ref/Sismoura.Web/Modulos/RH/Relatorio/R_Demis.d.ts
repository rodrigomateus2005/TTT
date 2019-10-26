declare class R_Demis extends MouraPage {
    readonly cboEmpresa: MouraComboBoxEmpresa;
    readonly cboTipo: MouraComboBox;
    readonly txtFuncionario: MouraTextBoxProcura;
    readonly txtDataEmissao: MouraTextBoxData;
    readonly txtDataInicio: MouraTextBoxData;
    readonly txtDataFim: MouraTextBoxData;
    readonly cboEmpregadoDevera: MouraComboBox;
    readonly txtComparecerAs: MouraTextBoxHora;
    readonly txtDataComparecimento: MouraTextBoxData;
    readonly txtPrazoComparecimento: MouraTextBox;
    readonly btnLimparGrid: MouraButton;
    readonly Grid: MouraGridView;
    protected Init(): void;
    private passouLoad;
    OnPageLoad(): void;
    protected oncboTipoChange(): void;
    protected executar_Click(limpar: boolean): void;
    protected bloquearLimparTodosCampos(): void;
    protected bloquearTodosCampos(): void;
}
declare var r_Demis: R_Demis;
//# sourceMappingURL=R_Demis.d.ts.map