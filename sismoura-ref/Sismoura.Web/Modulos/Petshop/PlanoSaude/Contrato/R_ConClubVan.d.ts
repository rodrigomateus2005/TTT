declare class R_ConclubVan extends MouraPageRelacaoAngular {
    readonly AccordionFiltros: MouraAccordion;
    readonly cboTipoPeriodo: MouraComboBox;
    readonly txtPet: MouraTextBoxProcuraProprietarioAnimal;
    readonly txtPeriodo: MouraTextBoxPeriodo;
    readonly lstEmpresa: MouraListBoxEmpresa;
    readonly cboTipo: MouraComboBox;
    readonly grdResultado: MouraGridViewJS;
    OnPageLoad(): void;
    protected Init(): void;
    protected OnGrdResultadoSelecionouLinha(s: any, e: MouraGridViewJSClickBotaoLinhaEventArgs): void;
    protected LimparCampos(): void;
    protected PreencherGrade(): void;
    private GetDadosRelacao;
}
declare var r_ConclubVan: R_ConclubVan;
//# sourceMappingURL=R_ConClubVan.d.ts.map