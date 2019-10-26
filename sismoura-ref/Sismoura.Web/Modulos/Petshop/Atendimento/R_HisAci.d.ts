declare class R_HisAci extends MouraPageRelacaoAngular {
    readonly AccordionFiltros: MouraAccordion;
    readonly txtPeriodo: MouraTextBoxPeriodo;
    readonly cboOrigemAcidente: MouraComboBox;
    readonly txtTipoAcidente: MouraTextBoxProcura;
    readonly lstEmpresa: MouraListBoxEmpresa;
    readonly txtPet: MouraTextBoxProcuraProprietarioAnimal;
    readonly txtProfissional: MouraTextBoxProcura;
    readonly grd: MouraGridViewJS;
    OnPageLoad(): void;
    protected LimparCampos(): void;
    PreencherGrade(): void;
    protected ValidarPeriodo(dataInicio: Date, dataFim: Date): boolean;
}
declare const r_HisAci: R_HisAci;
//# sourceMappingURL=R_HisAci.d.ts.map