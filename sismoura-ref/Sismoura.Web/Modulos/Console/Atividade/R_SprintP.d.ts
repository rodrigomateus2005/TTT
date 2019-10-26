declare class R_SprintP extends MouraPageRelacaoAngular {
    readonly AccordionFiltros: MouraAccordion;
    readonly grid: MouraGridViewJS;
    readonly chkFreelancer: MouraCheckBox;
    readonly cboStaus: MouraComboBox;
    readonly grdProgramadores: MouraGridViewJS;
    readonly grdAtividades: MouraGridViewJS;
    readonly tabSprint: MouraTabPanel;
    readonly mdDetalharSprint: MouraModal;
    readonly mdInf: MouraModal;
    readonly accCadastro: MouraAccordion;
    OnPageLoad(): void;
    Init(): void;
    LimparCampos(): void;
    LimparCamposModalSprint(): void;
    LimparCamposModalAtividade(): void;
    PreencherGrade(): void;
    protected SelecionouLinha(s: any, e: MouraGridViewJSClickBotaoLinhaEventArgs): void;
    protected SelecionouLinhaGrdAtividade(s: any, e: MouraGridViewJSClickBotaoLinhaEventArgs): void;
    protected ClickBotaoFecharSprint(): void;
    protected ClickBotaoFecharInf(): void;
    protected CellPrepared(s: any, e: MouraGridViewJSCellPreparedEventArgs): void;
    private ProcuraValorComboStaus;
}
declare const r_SprintP: R_SprintP;
//# sourceMappingURL=R_SprintP.d.ts.map