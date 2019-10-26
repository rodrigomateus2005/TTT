declare class G_Parc extends MouraPageRelacaoAngular {
    readonly AccordionFiltros: MouraAccordion;
    readonly grid: MouraGridViewJS;
    readonly cboContaCorrente: MouraContaCorrenteCombo;
    readonly btnGerarP: MouraButton;
    OnPageLoad(): void;
    Init(): void;
    LimparCampos(): void;
    PreencherGrade(): void;
    private OnCellPrepared;
    private OnSelecionouLinha;
    private OnClickGerarParcelas;
    private GerarParcelas;
    private OnMudouContaCorrente;
    private PreencherNomeContaCorrente;
}
declare const g_Parc: G_Parc;
//# sourceMappingURL=G_Parc.d.ts.map