declare class R_Troca extends MouraPageRelacaoAngular {
    readonly AccordionFiltros: MouraAccordion;
    readonly txtProduto: MouraTextBoxProcura;
    readonly grdResumida: MouraGridViewJS;
    readonly grdDiscriminada: MouraGridViewJS;
    readonly cboEmpresa: MouraComboBoxEmpresa;
    readonly cboPdv: MouraComboBox;
    readonly cboDeposito: MouraComboBox;
    readonly txtVenda: MouraTextBoxProcura;
    OnPageLoad(): void;
    Init(): void;
    PreencherGrade(): void;
    LimparCampos(): void;
    private AlteraPDV;
    private AlteraComboDeposito;
    private OnMudouEmpresa;
    private OnProcurouVenda;
    private GetDataVenda;
    private OnCellPrepared;
    private OnCellPreparedResumida;
}
declare const r_Troca: R_Troca;
//# sourceMappingURL=R_Troca.d.ts.map