declare class R_SlaAnda extends MouraPageRelacaoAngular {
    readonly AccordionFiltros: MouraAccordion;
    readonly Grid: MouraGridViewJS;
    readonly lstIlha: MouraCheckBoxList;
    readonly chkSomenteAtrasada: MouraCheckBox;
    readonly chkTempoAdicionar: MouraCheckBox;
    readonly txtTempoAtualizacao: MouraTextBox;
    readonly txtGrpAten: MouraTextBoxProcura;
    readonly hdnCodigoInterval: HTMLInputElement;
    readonly ilha: string;
    readonly accFiltro: MouraAccordion;
    protected LimparCampos(): void;
    OnPageLoad(): void;
    protected Init(): void;
    PreencherGrade(): void;
    GerarGrade(): void;
    protected OnGridCellPrepared(s: any, e: MouraGridViewJSCellPreparedEventArgs): void;
    private LimparInterval;
    Refresh(): string;
}
declare var r_SlaAnda: R_SlaAnda;
//# sourceMappingURL=R_SlaAnda.d.ts.map