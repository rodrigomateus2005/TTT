declare class R_Cr_Car extends MouraPageRelacaoAngular {
    readonly AccordionFiltros: MouraAccordion;
    readonly gridAnalitica: MouraGridViewJS;
    readonly gridSintetica: MouraGridViewJS;
    readonly accCadastro: MouraAccordion;
    readonly lstEmpresa: MouraListBoxEmpresa;
    readonly lstCartao: MouraCheckBoxList;
    readonly optSelecao: MouraRadioButtonList;
    readonly cboCartao: MouraComboBox;
    readonly tabResultado: MouraTabPanel;
    readonly txtPeriodo: MouraTextBoxPeriodo;
    OnPageLoad(): void;
    Init(): void;
    PreencherGrade(): void;
    LimparCampos(): void;
    private SelectionChanged;
    private PreencherListaCartao;
    private PreencherGridAnalitica;
    private PreencherGridSintetica;
    private TipoChanged;
}
declare const r_Cr_Car: R_Cr_Car;
//# sourceMappingURL=R_Cr_Car.d.ts.map