declare class R_ExtHos extends MouraPageRelacaoAngular {
    readonly AccordionFiltros: MouraAccordion;
    readonly txtPeriodo: MouraTextBoxPeriodo;
    readonly txtPet: MouraTextBoxProcuraProprietarioAnimal;
    readonly txtProfissional: MouraTextBoxProcura;
    readonly lstSituacoes: MouraCheckBoxList;
    readonly lstEmpresa: MouraListBoxEmpresa;
    readonly tab: MouraTabPanel;
    readonly grdDiscriminada: MouraGridViewJS;
    readonly grdResumida: MouraGridViewJS;
    readonly grdProdutoResumida: MouraGridViewJS;
    readonly grdProdutoConsumidoResumida: MouraGridViewJS;
    readonly cboTipoHospedagem: MouraComboBox;
    protected Init(): void;
    OnPageLoad(): void;
    private GerarGridHospedagem;
    protected PreencherGrade(): void;
    private ValidadarFiltros;
    protected LimparCampos(): void;
}
declare var r_ExtHos: R_ExtHos;
//# sourceMappingURL=R_ExtHos.d.ts.map