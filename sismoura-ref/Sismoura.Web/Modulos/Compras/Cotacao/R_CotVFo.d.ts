declare class R_CotVFo extends MouraPageRelacaoAngular {
    readonly tabCE: MouraTabPanel;
    readonly AccordionFiltros: MouraAccordion;
    readonly gridCG: MouraGridViewJS;
    readonly gridRE: MouraGridViewJS;
    readonly txtPeriodoCG: MouraTextBoxPeriodo;
    readonly txtPeriodoRE: MouraTextBoxPeriodo;
    Init(): void;
    OnPageLoad(): void;
    PreencherGrade(): void;
    PreencherGradeCG(): void;
    PreencherGradeRE(): void;
    BotaoRelacao_BotaoGerarClick(s: MouraButton, e: MouraClickEventArgs): void;
    LimparCampos(): void;
}
declare const r_CotVFo: R_CotVFo;
//# sourceMappingURL=R_CotVFo.d.ts.map