declare class R_GerEscPro extends MouraPageRelacaoAngular {
    readonly AccordionFiltros: MouraAccordion;
    readonly grid: MouraGridViewJS;
    readonly txtData: MouraTextBoxData;
    readonly txtProfissional: MouraTextBoxProcura;
    readonly lstEmpresa: MouraListBoxEmpresa;
    readonly lblData: MouraLabel;
    readonly btnMenos: MouraButton;
    readonly btnMais: MouraButton;
    readonly agpData: MouraAgrupamento;
    PeriodosSelecionados: SiSMoura.Core.Entity.EscalaPeriodoSelecionadoRetorno[];
    readonly btnAprovar: MouraButton;
    readonly btnReprovar: MouraButton;
    readonly dlgRealocar: MouraModal;
    readonly grdRealocar: MouraGridViewJS;
    protected Init(): void;
    OnPageLoad(): void;
    protected LimparCampos(): void;
    protected OnClickBtnMenos(s: any, e: MouraClickEventArgs): void;
    protected OnClickBtnMais(s: any, e: MouraClickEventArgs): void;
    protected OnGridCellPrepared(s: any, e: MouraGridViewJSCellPreparedEventArgs): void;
    private codigoAlteracaoSelecionado;
    private temAtendimentoSelcionado;
    protected OnGridClicouBotao(s: any, e: MouraGridViewJSClickBotaoLinhaEventArgs): void;
    protected OnGrdRealocarSelecionouLinha(s: any, e: MouraGridViewJSClickBotaoLinhaEventArgs): void;
    PreencherGrade(): void;
    protected ConfigurarGrade(): void;
    protected OnClickBtnAprovar(s: any, e: MouraClickEventArgs): void;
    protected OnClickBtnReprovar(s: any, e: MouraClickEventArgs): void;
    private AprovarReprovar;
    protected retornarDiaSemana(dia: number): string;
}
declare const r_GerEscPro: R_GerEscPro;
//# sourceMappingURL=R_GerEscPro.d.ts.map