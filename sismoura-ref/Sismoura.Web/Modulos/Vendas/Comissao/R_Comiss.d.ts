declare class R_Comiss extends MouraPageRelacaoAngular {
    readonly gridDiscriminada: MouraGridViewJS;
    readonly gridResumida: MouraGridViewJS;
    readonly AccordionFiltros: MouraAccordion;
    readonly tabResultado: MouraTabPanel;
    readonly lblTotalComissao: MouraLabel;
    OnPageLoad(): void;
    Init(): void;
    LimparTotalComissao(): void;
    PreencherGrade(): void;
    PreencherGridDiscriminada(): void;
    PreencherGridResumida(): void;
    LimparCampos(): void;
    groupBy(xs: any, key: any): any;
}
declare const r_Comiss: R_Comiss;
//# sourceMappingURL=R_Comiss.d.ts.map