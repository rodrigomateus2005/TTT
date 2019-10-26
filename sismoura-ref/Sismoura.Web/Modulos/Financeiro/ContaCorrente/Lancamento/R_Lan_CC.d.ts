declare class R_Lan_CC extends MouraPageRelacaoAngular {
    readonly AccordionFiltros: MouraAccordion;
    readonly grid: MouraGridViewJS;
    readonly txtContaContabil: MouraTextBoxProcura;
    readonly cboContaCorrente: MouraContaCorrenteCombo;
    OnPageLoad(): void;
    Init(): void;
    LimparCampos(): void;
    PreencherGrade(): void;
    private OnProcurouConta;
    private VerificarContaContabil;
    private OnMudouContaCorrente;
}
declare const r_Lan_CC: R_Lan_CC;
//# sourceMappingURL=R_Lan_CC.d.ts.map