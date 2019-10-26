declare class R_EspRes extends MouraPageRelacaoAngular {
    readonly AccordionFiltros: MouraAccordion;
    readonly grid: MouraGridViewJS;
    readonly txtPeriodo: MouraTextBoxPeriodo;
    readonly txtPet: MouraTextBoxProcuraProprietarioAnimal;
    readonly cboEmpresa: MouraComboBoxEmpresa;
    readonly cboTamanhoBaia: MouraComboBox;
    OnPageLoad(): void;
    protected Init(): void;
    protected OnExcluiuRegistroGrade(s: any, e: MouraGridViewJSItemEventArgs): void;
    protected OnSelecionouLinhaGrid(s: any, e: MouraGridViewJSClickBotaoLinhaEventArgs): void;
    protected LimparCampos(): void;
    protected PreencherGrade(): void;
    private GetDadosRelacao;
    private ObterParametrosRelacao;
}
declare var r_EspRes: R_EspRes;
//# sourceMappingURL=R_EspRes.d.ts.map