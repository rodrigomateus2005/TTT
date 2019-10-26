declare class R_FilaAdoc extends MouraPageRelacaoAngular {
    parametrosModal: any;
    readonly AccordionFiltros: MouraAccordion;
    readonly grid: MouraGridViewJS;
    readonly lstEmpresa: MouraListBoxEmpresa;
    readonly cboStatusAdocao: MouraComboBox;
    readonly mdlAvaliacoes: MouraModal;
    readonly txtUsuarioAvaliacao: MouraTextBoxProcura;
    readonly txtDataAvaliacao: MouraTextBoxData;
    readonly txtHoraAvaliacao: MouraTextBoxHora;
    readonly txtObservacaoFicha: MouraTextBox;
    readonly grdFichaAvaliacao: MouraGridViewJS;
    readonly grdAvaliacoesRealizadas: MouraGridViewJS;
    readonly grdVisualizarFichaAval: MouraGridViewJS;
    readonly txtObsFichaVisualizar: MouraTextBox;
    readonly btnSalvarFicha: MouraButton;
    readonly btnLimpar: MouraButton;
    readonly mdlVisualizarFichaAval: MouraModal;
    Init(): void;
    private OnFechouModal;
    private limparCamposFicha;
    protected preencherFicha(): void;
    protected onBtnSalvarFicha(s: any, e: MouraClickEventArgs): void;
    private onClickAvaliacao;
    OnPageLoad(): void;
    protected LimparCampos(): void;
    protected PreencherGrade(): void;
    private GetDadosRelacao;
    private OnSelecionouLinhaFichaAvaliacao;
    private OnExcluindoFichaAvaliacao;
    private OnExcluirFichaAvaliacao;
}
declare var r_FilaAdoc: R_FilaAdoc;
//# sourceMappingURL=R_FilaAdoc.d.ts.map