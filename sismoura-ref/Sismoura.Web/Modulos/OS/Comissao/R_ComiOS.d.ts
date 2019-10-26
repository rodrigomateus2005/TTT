declare class R_ComiOS extends MouraPageRelacaoAngular {
    readonly AccordionFiltros: MouraAccordion;
    readonly grid: MouraGridViewJS;
    readonly txtVendedor: MouraTextBoxProcura;
    readonly txtServico: MouraTextBoxProcura;
    readonly txtResponsavel: MouraTextBoxProcura;
    readonly accCadastro: MouraAccordion;
    readonly rblPeriodo: MouraRadioButtonList;
    readonly rblTipo: MouraRadioButtonList;
    readonly lblDesconto: MouraLabel;
    readonly lblTotalFinal: MouraLabel;
    readonly lblTotal: MouraLabel;
    readonly rblComissao: MouraRadioButtonList;
    OnPageLoad(): void;
    Init(): void;
    LimparCampos(): void;
    PreencherGrade(): void;
    SelectedIndexChanged(): void;
}
declare const r_ComiOS: R_ComiOS;
//# sourceMappingURL=R_ComiOS.d.ts.map