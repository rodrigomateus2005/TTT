declare class R_ConExp extends MouraPageRelacaoAngular {
    readonly AccordionFiltros: MouraAccordion;
    readonly cboEmpresa: MouraComboBoxEmpresa;
    readonly grid: MouraGridViewJS;
    OnPageLoad(): void;
    Init(): void;
    OnCellsPrepared(s: any, e: MouraGridViewJSCellPreparedEventArgs): void;
    LimparCampos(): void;
    protected PreencherGrade(): void;
}
declare const r_ConExp: R_ConExp;
//# sourceMappingURL=R_ConExp.d.ts.map