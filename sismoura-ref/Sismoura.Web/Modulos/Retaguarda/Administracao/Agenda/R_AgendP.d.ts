declare class R_AgendP extends MouraPageRelacaoAngular {
    readonly grid: MouraGridViewJS;
    readonly AccordionFiltros: MouraAccordion;
    readonly cboUsuario: MouraComboBox;
    readonly cboTipoAgenda: MouraComboBox;
    OnPageLoad(): void;
    protected OnVisibleUsuario(): void;
    Init(): void;
    PreencherGrade(): void;
    PreencherGrid(): boolean;
    LimparCampos(): void;
}
declare const r_AgendP: R_AgendP;
//# sourceMappingURL=R_AgendP.d.ts.map