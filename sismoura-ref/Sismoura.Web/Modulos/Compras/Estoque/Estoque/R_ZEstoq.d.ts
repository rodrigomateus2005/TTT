declare class R_ZEstoq extends MouraPageRelacaoAngular {
    readonly AccordionFiltros: MouraAccordion;
    readonly chkIntervalo: MouraCheckBox;
    readonly agpIntervalo: MouraAgrupamento;
    readonly txtGrupo: MouraTextBoxProcura;
    readonly txtInicio: MouraTextBox;
    readonly txtFim: MouraTextBox;
    readonly cboDeposito: MouraComboBox;
    readonly chkNegativos: MouraCheckBox;
    readonly grid: MouraGridViewJS;
    readonly btnZerar: MouraButton;
    OnPageLoad(): void;
    Init(): void;
    LimparCampos(): void;
    PreencherGrade(): void;
    private OnCheckIntervalo;
    private LimpaAgrupamento;
    private VerificaCamposObrigatorios;
    private OnSelecionouLinha;
    private OnClickZerar;
    private ZerarEstoque;
}
declare const r_ZEstoq: R_ZEstoq;
//# sourceMappingURL=R_ZEstoq.d.ts.map