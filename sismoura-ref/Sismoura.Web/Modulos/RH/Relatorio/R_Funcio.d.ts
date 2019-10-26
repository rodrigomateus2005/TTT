declare class R_Funcio extends MouraPageRelacaoAngular {
    readonly grid: MouraGridViewJS;
    readonly AccordionFiltros: MouraAccordion;
    readonly txtPeriodo: MouraTextBoxPeriodo;
    readonly lstCargo: MouraCheckBoxList;
    readonly lstSecao: MouraCheckBoxList;
    readonly lstSetor: MouraCheckBoxList;
    readonly lstEmpresa: MouraListBoxEmpresa;
    readonly lstDepartamento: MouraCheckBoxList;
    readonly chlSituacao: MouraCheckBoxList;
    readonly cboTipo: MouraComboBox;
    readonly cboTipoEmpresa: MouraComboBox;
    readonly gridModal: MouraGridViewJS;
    readonly mdDt: MouraModal;
    readonly btnFechar: MouraButton;
    OnPageLoad(): void;
    Init(): void;
    private OnTipoChanged;
    private OnSelecionouLinha;
    private OnClickFechar;
    private OnMostrarDadosEmpresa;
    LimparCampos(): void;
    PreencherGrade(): void;
}
declare const r_Funcio: R_Funcio;
//# sourceMappingURL=R_Funcio.d.ts.map