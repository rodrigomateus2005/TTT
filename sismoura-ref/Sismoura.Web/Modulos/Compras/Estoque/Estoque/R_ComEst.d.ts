declare class R_ComEst extends MouraPageRelacaoAngular {
    readonly AccordionFiltros: MouraAccordion;
    readonly Grid: MouraGridViewJS;
    readonly txtGrupo: MouraTextBoxProcura;
    readonly txtSubGrupo: MouraTextBoxProcura;
    readonly txtLinha: MouraTextBoxProcura;
    readonly chkEstoque: MouraCheckBox;
    readonly chkInativo: MouraCheckBox;
    readonly optOpcao: MouraRadioButtonList;
    readonly txtDias: MouraTextBox;
    readonly lblItens: MouraLabel;
    protected Init(): void;
    OnPageLoad(): void;
    protected PreencherGrade(): void;
    protected LimparCampos(): void;
}
declare var r_ComEst: R_ComEst;
//# sourceMappingURL=R_ComEst.d.ts.map