declare class R_Equipa extends MouraPageRelacaoAngular {
    readonly AccordionFiltros: MouraAccordion;
    readonly txtGrupo: MouraTextBoxProcura;
    readonly txtControle: MouraTextBox;
    readonly chkInativo: MouraCheckBox;
    readonly lstSituacao: MouraRadioButtonList;
    readonly grid: MouraGridViewJS;
    readonly accRelacao: MouraAccordion;
    readonly lstEmpresa: MouraListBoxEmpresa;
    readonly lstDeposito: MouraCheckBoxList;
    protected Init(): void;
    OnPageLoad(): void;
    protected LimparCampos(): void;
    protected PreencherGrade(): boolean;
    protected OnGridCellPrepared(s: any, e: MouraGridViewJSCellPreparedEventArgs): void;
    protected AlteraDeposito(): void;
}
declare var r_Equipa: R_Equipa;
//# sourceMappingURL=R_Equipa.d.ts.map