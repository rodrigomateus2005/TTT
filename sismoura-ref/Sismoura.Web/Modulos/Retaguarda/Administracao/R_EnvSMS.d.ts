declare class R_EnvSMS extends MouraPageRelacaoAngular {
    readonly AccordionFiltros: MouraAccordion;
    readonly grid: MouraGridViewJS;
    Entity: any;
    OnPageLoad(): void;
    Init(): void;
    protected LimparCampos(): void;
    protected ValidarPeriodo(dataInicio: Date, dataFim: Date): boolean;
    protected PreencherGrade(): void;
}
declare const r_EnvSMS: R_EnvSMS;
//# sourceMappingURL=R_EnvSMS.d.ts.map