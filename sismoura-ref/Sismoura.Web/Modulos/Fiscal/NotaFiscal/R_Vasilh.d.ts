declare class R_Vasilh extends MouraPageRelacaoAngular {
    readonly AccordionFiltros: MouraAccordion;
    readonly txtPeriodo: MouraTextBoxPeriodo;
    readonly Grid: MouraGridViewJS;
    readonly txtClienteProcura: MouraTextBoxProcura;
    readonly txtNota_Saida: MouraTextBox;
    readonly txtSerie: MouraTextBox;
    readonly lblCliente: MouraLabel;
    readonly lblClienteNome: MouraLabel;
    readonly lblData_Saida: MouraLabel;
    readonly lblValor_Saida: MouraLabel;
    readonly cboEmpresa: MouraComboBoxEmpresa;
    protected Init(): void;
    OnPageLoad(): void;
    protected PreencherGrade(): void;
    protected MudouTipo(): void;
    protected LimparLabels(): void;
    protected LimparCampos(): void;
}
declare var r_Vasilh: R_Vasilh;
//# sourceMappingURL=R_Vasilh.d.ts.map