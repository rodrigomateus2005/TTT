declare class R_Orcame extends MouraPageRelacaoAngular {
    readonly AccordionFiltros: MouraAccordion;
    readonly lstSitOrcamento: MouraCheckBoxList;
    readonly lstEmpresa: MouraListBoxEmpresa;
    readonly txtHoraInicial: MouraTextBoxHora;
    readonly txtHoraFinal: MouraTextBoxHora;
    readonly txtVendedor: MouraTextBoxProcuraComLista;
    readonly txtCidade: MouraTextBoxProcuraComLista;
    readonly gridAgrupada: MouraGridViewJS;
    readonly gridDiscriminada: MouraGridViewJS;
    readonly gridResumida: MouraGridViewJS;
    OnPageLoad(): void;
    Init(): void;
    LimparCampos(): void;
    PreencherGrade(): void;
}
declare const r_Orcame: R_Orcame;
//# sourceMappingURL=R_Orcame.d.ts.map