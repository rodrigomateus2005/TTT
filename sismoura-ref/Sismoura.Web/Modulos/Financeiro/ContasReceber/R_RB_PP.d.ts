declare class R_RB_PP extends MouraPageRelacaoAngular {
    readonly AccordionFiltros: MouraAccordion;
    readonly lstEmpresa: MouraListBoxEmpresa;
    readonly grid: MouraGridViewJS;
    readonly lstContaCorrente: MouraContaCorrenteLista;
    readonly lstPosicoesTitulos: MouraCheckBoxList;
    readonly infVenda: MouraInformacoesVenda;
    readonly cboEstado: MouraComboBox;
    readonly txtCidade: MouraTextBoxProcura;
    readonly txtHora1: MouraTextBoxHora;
    readonly txtHora2: MouraTextBoxHora;
    OnPageLoad(): void;
    Init(): void;
    LimparCampos(): void;
    PreencherGrade(): void;
    private OnSelecionouLinha;
    private OnClickDetalhes;
    private MudouEstado;
    private OnSelecionouEmpresa;
}
declare const r_RB_PP: R_RB_PP;
//# sourceMappingURL=R_RB_PP.d.ts.map