declare class R_AtdTer extends MouraPageRelacaoAngular {
    readonly AccordionFiltros: MouraAccordion;
    readonly txtPeriodo: MouraTextBoxPeriodo;
    readonly lstEmpresa: MouraListBoxEmpresa;
    readonly txtProfissionalTerceirizado: MouraTextBoxProcura;
    readonly chkRecusados: MouraCheckBox;
    readonly grd: MouraGridViewJS;
    protected Init(): void;
    OnPageLoad(): void;
    protected LimparCampos(): void;
    protected OnAntesAbrirProcuraProfissional(s: any, e: MouraTextBoxProcuraAntesAbrirProcuraEventArgs): void;
    protected OnTxtProfissionalProcurou(s: MouraTextBoxProcuraRetornoProcura, e: MouraEventArgs): void;
    PreencherGrade(): void;
    protected ValidarPeriodo(dataInicio: Date, dataFim: Date): boolean;
    protected OnGrdCellPrepared(s: any, e: MouraGridViewJSCellPreparedEventArgs): void;
}
declare const r_AtdTer: R_AtdTer;
//# sourceMappingURL=R_AtdTer.d.ts.map