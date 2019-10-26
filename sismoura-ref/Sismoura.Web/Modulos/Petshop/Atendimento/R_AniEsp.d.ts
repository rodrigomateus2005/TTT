declare class R_AniEsp extends MouraPageRelacaoAngular {
    readonly AccordionFiltros: MouraAccordion;
    readonly txtPeriodo: MouraTextBoxPeriodo;
    readonly txtPet: MouraTextBoxProcuraProprietarioAnimal;
    readonly cboEmpresa: MouraComboBoxEmpresa;
    readonly grd: MouraGridViewJS;
    protected Init(): void;
    OnPageLoad(): void;
    protected LimparCampos(): void;
    protected PreencherGrade(): void;
    protected ValidarPeriodo(dataInicio: Date, dataFim: Date): boolean;
    protected OnExcluiuItem(s: any, e: MouraGridViewJSItemEventArgs): void;
}
declare const r_AniEsp: R_AniEsp;
//# sourceMappingURL=R_AniEsp.d.ts.map