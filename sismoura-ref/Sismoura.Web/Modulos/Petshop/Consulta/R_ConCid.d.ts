declare class R_ConCid extends MouraPageRelacaoAngular {
    readonly AccordionFiltros: MouraAccordion;
    readonly Grid: MouraGridViewJS;
    readonly lstEmpresa: MouraListBoxEmpresa;
    readonly rdnTipo: MouraRadioButtonList;
    readonly txtPeriodo: MouraTextBoxPeriodo;
    readonly accFiltro: MouraAccordion;
    readonly txtCID: MouraTextBoxProcura;
    readonly txtPet: MouraTextBoxProcuraProprietarioAnimal;
    readonly txtProfissional: MouraTextBoxProcura;
    readonly txtAssunto: MouraTextBoxProcura;
    readonly lstGrupoCid: MouraCheckBoxList;
    protected LimparCampos(): void;
    OnPageLoad(): void;
    protected Init(): void;
    protected OntxtCIDProcurou(): void;
    protected OnGrupoCidChange(): void;
    PreencherGrade(): void;
    GerarGrade(): void;
}
declare var r_ConCid: R_ConCid;
//# sourceMappingURL=R_ConCid.d.ts.map