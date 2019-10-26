declare class R_LogTra extends MouraPageRelacaoAngular {
    readonly AccordionFiltros: MouraAccordion;
    readonly grid: MouraGridViewJS;
    readonly grdModal: MouraGridViewJS;
    readonly accRelacao: MouraAccordion;
    readonly mdLog: MouraModal;
    readonly txtPeriodo: MouraTextBoxPeriodo;
    readonly btnFechar: MouraButton;
    readonly cboTela: MouraComboBox;
    readonly cboTipo: MouraComboBox;
    readonly txtCampoCodigo: MouraTextBox;
    readonly txtUsuario: MouraTextBoxProcura;
    readonly cboTabela: MouraComboBox;
    OnPageLoad(): void;
    protected Init(): void;
    protected OnGridSelecionouItem(s: any, e: MouraGridViewJSClickBotaoLinhaEventArgs): void;
    protected OnClickFechar(s: any, e: DevExpress.Web.Scripts.ASPxClientButtonClickEventArgs): void;
    protected PreencherGrade(): void;
    protected CarregarLogHistoricoCampo(codigo: number): void;
    protected LimparCampos(): void;
}
declare var r_LogTra: R_LogTra;
//# sourceMappingURL=R_LogTra.d.ts.map