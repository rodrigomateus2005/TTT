declare class R_EntSaiAn extends MouraPageRelacaoAngular {
    readonly AccordionFiltros: MouraAccordion;
    readonly gridAnalitica: MouraGridViewJS;
    readonly accCadastro: MouraAccordion;
    readonly lstOrigemAn: MouraListBoxEmpresa;
    readonly lstDestinoAn: MouraListBoxEmpresa;
    readonly txtMarca: MouraTextBoxProcura;
    readonly lblTotalAnalitica: MouraLabel;
    readonly cboMovimento: MouraComboBox;
    readonly cboMotivo: MouraComboBox;
    readonly cboDeposito: MouraComboBox;
    OnPageLoad(): void;
    Init(): void;
    protected PreencherComboDeposito(empresaString: string): void;
    private SelectedIndexChanged;
    protected CellPrepared(s: any, e: MouraGridViewJSCellPreparedEventArgs): void;
    LimparCampos(): void;
    PreencherGrade(): void;
}
declare const r_EntSaiAn: R_EntSaiAn;
//# sourceMappingURL=R_EntSaiAn.d.ts.map