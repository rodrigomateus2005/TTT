declare class R_EntAni extends MouraPageRelacaoAngular {
    readonly AccordionFiltros: MouraAccordion;
    readonly grid: MouraGridViewJS;
    readonly txtPeriodo: MouraTextBoxPeriodo;
    readonly txtProprietario: MouraTextBoxProcura;
    readonly txtCriador: MouraTextBoxProcura;
    readonly lstEmpresa: MouraListBoxEmpresa;
    init(): void;
    OnPageLoad(): void;
    PreencherGrade(): void;
    LimparCampos(): void;
}
declare const r_EntAni: R_EntAni;
//# sourceMappingURL=R_EntAni.d.ts.map