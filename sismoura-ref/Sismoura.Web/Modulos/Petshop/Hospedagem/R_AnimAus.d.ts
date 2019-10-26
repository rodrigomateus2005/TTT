declare class R_AnimAus extends MouraPageRelacaoAngular {
    readonly AccordionFiltros: MouraAccordion;
    readonly grid: MouraGridViewJS;
    readonly txtPeriodo: MouraTextBoxPeriodo;
    readonly cboTipoHospedagem: MouraComboBox;
    readonly cboPago: MouraComboBox;
    readonly cboPresenca: MouraComboBox;
    readonly cboEmpresa: MouraComboBoxEmpresa;
    readonly txtPet: MouraTextBoxProcuraProprietarioAnimal;
    OnPageLoad(): void;
    protected Init(): void;
    protected LimparCampos(): void;
    protected OnGridCellPrepared(s: any, e: MouraGridViewJSCellPreparedEventArgs): void;
    protected PreencherGrade(): void;
    private GetDadosRelacao;
}
declare var r_AnimAus: R_AnimAus;
//# sourceMappingURL=R_AnimAus.d.ts.map